import axios from 'axios';

const COPPER_API_BASE = 'https://api.copper.com/developer_api/v1';
const API_KEY = '6bfe01556842169d697b7f2b69237c51';
const USER_EMAIL = 'runar.finanger@onio.com';

const getHeaders = () => ({
  'X-PW-AccessToken': API_KEY,
  'X-PW-Application': 'developer_api',
  'X-PW-UserEmail': USER_EMAIL,
  'Content-Type': 'application/json'
});

export const getSalesPipelineId = async () => {
  try {
    const response = await axios.get(`${COPPER_API_BASE}/pipelines`, {
      headers: getHeaders()
    });
    
    const salesPipe = response.data.find(pipeline => 
      pipeline.name.toLowerCase() === 'sales pipe'
    );
    
    if (!salesPipe) {
      throw new Error('Sales pipe pipeline not found');
    }
    
    return {
      pipelineId: salesPipe.id,
      stageId: salesPipe.stages[0]?.id // First stage as default
    };
  } catch (error) {
    console.error('Error fetching Sales pipe pipeline:', error);
    throw error;
  }
};

export const findPersonByEmail = async (email) => {
  try {
    const response = await axios.post(`${COPPER_API_BASE}/people/search`, {
      emails: [email]
    }, {
      headers: getHeaders()
    });
    
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    // If person not found, just return null instead of throwing
    if (error.response?.status === 422) {
      return null;
    }
    console.error('Error searching for person:', error);
    throw error;
  }
};

export const createOrUpdatePerson = async (formData) => {
  try {
    const existingPerson = await findPersonByEmail(formData.email);
    
    // Handle name logic properly
    let personName = '';
    let firstName = '';
    let lastName = '';
    
    if (formData.first_name && formData.last_name) {
      personName = `${formData.first_name} ${formData.last_name}`;
      firstName = formData.first_name;
      lastName = formData.last_name;
    } else if (formData.name) {
      personName = formData.name;
      // Try to split the name into first and last
      const nameParts = formData.name.split(' ');
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
    }
    
    const personData = {
      name: personName,
      emails: [{
        email: formData.email,
        category: 'work'
      }]
    };
    
    // Only add optional fields if they have values
    if (firstName) personData.first_name = firstName;
    if (lastName) personData.last_name = lastName;
    if (formData.company) personData.company_name = formData.company;
    if (formData.job_title) personData.title = formData.job_title;
    
    // Custom fields are causing API errors - will add to opportunity details instead
    console.log('Skipping custom fields - will add to opportunity details');

    if (existingPerson) {
      const response = await axios.put(`${COPPER_API_BASE}/people/${existingPerson.id}`, personData, {
        headers: getHeaders()
      });
      return response.data;
    } else {
      const response = await axios.post(`${COPPER_API_BASE}/people`, personData, {
        headers: getHeaders()
      });
      return response.data;
    }
  } catch (error) {
    console.error('Error creating/updating person:', error);
    throw error;
  }
};

export const createOpportunity = async (person, formData, formType = 'contact') => {
  try {
    const { pipelineId, stageId } = await getSalesPipelineId();
    
    let opportunityName = '';
    let details = '';
    
    if (formType === 'newsletter') {
      opportunityName = `Newsletter signup - ${person.name}`;
      details = `Newsletter signup from ${formData.company || 'Unknown company'}`;
      if (formData.contact_when_datasheet_ready) {
        details += ' - Requested datasheet notification';
      }
    } else {
      opportunityName = `${formData.reason_for_contacting || 'Contact form'} - ${person.name}`;
      
      // Create structured details with message on top, then key fields
      let detailsParts = [];
      
      // Add message first if provided
      if (formData.message) {
        detailsParts.push(formData.message);
        detailsParts.push(''); // Empty line for paragraph break
      }
      
      // Add the 3 important fields on separate lines
      if (formData.reason_for_contacting) {
        detailsParts.push(`Reason: ${formData.reason_for_contacting}`);
      }
      if (formData.project_status) {
        detailsParts.push(`Project Status: ${formData.project_status}`);  
      }
      if (formData.estimated_annual_volume) {
        detailsParts.push(`Est. Annual Volume: ${formData.estimated_annual_volume}`);
      }
      
      // Add other form fields (excluding about_my_project as requested)
      if (formData.request_a_meeting) detailsParts.push('Requested meeting: Yes');
      if (formData.request_pitch_deck) detailsParts.push('Requested pitch deck: Yes'); 
      if (formData.whitepaper) detailsParts.push('Requested whitepaper: Yes');
      
      details = detailsParts.join('\n');
    }
    
    const opportunityData = {
      name: opportunityName,
      primary_contact_id: person.id,
      pipeline_id: pipelineId,
      pipeline_stage_id: stageId,
      details: details,
      tags: [formType === 'newsletter' ? 'Newsletter' : 'Contact Form']
    };
    
    const response = await axios.post(`${COPPER_API_BASE}/opportunities`, opportunityData, {
      headers: getHeaders()
    });
    
    return response.data;
  } catch (error) {
    console.error('Error creating opportunity:', error);
    throw error;
  }
};

export const processCopperSubmission = async (formData, formType = 'contact') => {
  try {
    const person = await createOrUpdatePerson(formData);
    const opportunity = await createOpportunity(person, formData, formType);
    
    return {
      success: true,
      person,
      opportunity
    };
  } catch (error) {
    console.error('Error processing Copper submission:', error);
    return {
      success: false,
      error: error.message || 'Failed to process submission'
    };
  }
};