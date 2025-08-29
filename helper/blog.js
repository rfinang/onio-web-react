import _ from "lodash";
const mapItem = (item) => {
  // Handle both direct properties and Strapi v4 attributes structure
  const data = item.attributes || item;
  
  return {
    id: item.id,
    title: data.title,
    content: data.content,
    slug: data.slug,
    publish_date: data.publish_date,
    thumbnail: data.thumbnail ? JSON.parse(JSON.stringify(data.thumbnail)) : null,
    categories: data.categories ? JSON.parse(JSON.stringify(data.categories)) : null,
    read_time: data.read_time,
    feature_image: data.feature_image ? JSON.parse(JSON.stringify(data.feature_image)) : null,
  };
};

export const blogItemsGenerate = (data) => {
  let blogPost = [];
  const blogArr = _.get(data, "data.data", []);
  blogPost = blogArr.map(mapItem);
  return blogPost;
};

export const calculateReadTime = (content) => {
  const words_per_minute = 225;

  // Count the words in the content.
  let word_count = _.words(content).length;
  // How many minutes?
  let minutes = Math.floor(word_count / words_per_minute);

  if(minutes < 1){
    return 'Less than 1';
  }

  return minutes;
}
