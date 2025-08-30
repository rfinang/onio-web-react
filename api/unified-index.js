/**
 * Unified API Index - Replaces 20+ individual API files
 * Uses the new ApiService for consistent, maintainable API calls
 */

import axios from "axios";
import { apiService } from "../lib/api-service";

// ================================
// SIMPLE ENDPOINT WRAPPERS (populate=deep pattern)
// ================================

// Core content APIs
export const getHomeApi = () => apiService.getWithDeepPopulate('homepage');
export const getGlobalApi = () => apiService.getWithDeepPopulate('global');
export const getHeaderApi = () => apiService.getWithDeepPopulate('header');
export const getFooterApi = () => apiService.getWithDeepPopulate('footer');

// Page content APIs
export const getAboutusApi = (params = null) => 
  params ? apiService.get('about-us', params) : apiService.getWithDeepPopulate('about-us');

export const getContactApi = () => apiService.getWithDeepPopulate('contact');
export const getInvestorApi = () => apiService.getWithDeepPopulate('investor');
export const getPrivacyApi = () => apiService.getWithDeepPopulate('privacy-policy');

// Module APIs
export const getCareerModuleApi = () => apiService.getWithDeepPopulate('career-module');
export const getLowerBomeModuleApi = () => apiService.getWithDeepPopulate('lower-bome-module');
export const getOneChipPossibilitiesModuleApi = () => apiService.getWithDeepPopulate('one-chip-possibilities-module');
export const getTechnologyRedefinedModuleApi = () => apiService.getWithDeepPopulate('technology-redefined-module');
export const getPowerZeroApi = () => apiService.getWithDeepPopulate('the-power-of-zero-module');

// Project landing APIs
export const getProjectLandingApi = () => apiService.getWithDeepPopulate('turnkey-project-landing');
export const getBatterylessRemoteApi = () => apiService.getWithDeepPopulate('batteryless-remote');
export const getSmartRemoteLandingApi = () => apiService.getWithDeepPopulate('turnkey-smart-remote');
export const getShelfLabelApi = () => apiService.getWithDeepPopulate('shelf-label');
export const getSmartHubApi = () => apiService.getWithDeepPopulate('smart-hub');

// Product APIs
export const getProductApi = () => apiService.getWithDeepPopulate('product');
export const getProductLandingApi = () => apiService.getWithDeepPopulate('product-landing');
export const getOnioZeroApi = () => apiService.getWithDeepPopulate('onio-zero');

// Newsletter and search
export const getNewsletterApi = () => apiService.getWithDeepPopulate('newsletter');
export const getSearchApi = () => apiService.getWithDeepPopulate('search');
export const getEnergyEmulatorLandingApi = () => apiService.getWithDeepPopulate('interactive-energy-tool');

// Popular search (Next.js API route, not Strapi)
export const getPopularSearchApi = (params = null) => {
  const url = '/api/popular-search/get-keyword';
  return axios.get(url, { params });
};

// ================================
// COMPLEX ENDPOINT WRAPPERS (custom logic)
// ================================

// Blog APIs (complex populate and serialization)
export const getBlogApi = (params = null) => apiService.getBlog(params);
export const getBlogLandingApi = (params = null) => 
  params ? apiService.get('blog-landing', params) : apiService.getWithDeepPopulate('blog-landing');
export const getBlogCategoriesApi = (params = null) => apiService.getCategories(params);
export const getBlogDetailApi = (slug) => apiService.getBlogDetail(slug);

// News/Article APIs (similar to blog pattern)
export const getNewsApi = (params = null) => {
  const enhancedParams = {
    ...params,
    populate: params?.populate || ['thumbnail', 'feature_image', 'categories', 'writer']
  };
  return apiService.get('news', enhancedParams, { serialize: true });
};

export const getNewsDetailApi = (slug) => {
  return apiService.get('news/slug', slug, {
    populate: [
      'feature_image', 'seo', 'seo.share_image', 'categories',
      'writer', 'writer.avatar', 'writer.social', 'thumbnail'
    ]
  });
};

// Career APIs with parameters
export const getCareersToStrapiApi = (params = null) => 
  apiService.get('careers', params, { serialize: true });

export const getCareerLandingApi = (params = null) => 
  params ? apiService.get('career-landing', params) : apiService.getWithDeepPopulate('career-landing');

export const getWorkLocationsApi = (params = null) => 
  apiService.get('work-locations', params, { serialize: true });

// Writer API
export const getWritersApi = (params = null) => 
  apiService.get('writers', params, { serialize: true });

// ================================
// POST METHODS
// ================================

export const postContactApi = (data = null) => 
  apiService.post('contact-form-submissions', { data });

export const postNewsletterApi = (data = null) => 
  apiService.post('newsletter-submissions', { data });

export const postCareerApplicationApi = (data = null) => 
  apiService.post('career-applications', { data });

// ================================
// BACKWARD COMPATIBILITY EXPORTS
// ================================

// Re-export the service for direct use
export { apiService };

// Export common patterns as utilities
export const getWithPopulate = (endpoint, populate = 'deep') => 
  apiService.get(endpoint, { populate });

export const getWithParams = (endpoint, params) => 
  apiService.get(endpoint, params, { serialize: true });

export const postFormData = (endpoint, formData) => 
  apiService.post(endpoint, { data: formData });