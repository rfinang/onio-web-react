import axios from "axios";
import qs from "qs";
import Config from "../config";

/**
 * Unified API Service - Replaces 20+ repetitive API wrapper files
 * 
 * Usage Examples:
 * - Simple: apiService.get('homepage', { populate: 'deep' })
 * - Complex: apiService.get('blogs', { params, serialize: true })
 * - With slug: apiService.get('blogs/slug', slug, { populate: ['categories'] })
 */
class ApiService {
  constructor() {
    this.baseURL = Config.DOMAIN_API || Config.HOST_API;
    this.defaultTimeout = 10000;
  }

  /**
   * Generic GET request with flexible parameter handling
   * @param {string} endpoint - API endpoint (e.g., 'homepage', 'blogs')
   * @param {string|object} slugOrParams - Either a slug string or params object
   * @param {object} options - Additional options
   * @returns {Promise} Axios response promise
   */
  get(endpoint, slugOrParams = null, options = {}) {
    // Handle different parameter patterns
    let url, params, config = { timeout: this.defaultTimeout };

    // Determine if first param is slug or params
    if (typeof slugOrParams === 'string') {
      // Slug pattern: get('blogs/slug', 'my-post', { populate: [...] })
      url = `${this.baseURL}/${endpoint}/${slugOrParams}`;
      params = options.params || options;
    } else {
      // Params pattern: get('blogs', { pagination: {...} })
      url = `${this.baseURL}/${endpoint}`;
      params = slugOrParams;
    }

    // Add query string serialization if needed
    if (params && Object.keys(params).length > 0) {
      if (options.serialize || this.needsQsSerialization(params)) {
        config.params = params;
        config.paramsSerializer = (params) => qs.stringify(params);
      } else {
        config.params = params;
      }
    }

    return axios.get(url, config);
  }

  /**
   * Convenient methods for common Strapi patterns
   */
  
  // Simple populate=deep pattern (most common)
  getWithDeepPopulate(endpoint) {
    return this.get(endpoint, { populate: 'deep' });
  }

  // Blog-style with enhanced populate
  getBlog(params = {}) {
    const enhancedParams = {
      ...params,
      populate: params.populate || ['thumbnail', 'feature_image', 'categories', 'writer']
    };
    return this.get('blogs', enhancedParams, { serialize: true });
  }

  // Blog detail with full populate
  getBlogDetail(slug) {
    return this.get('blogs/slug', slug, {
      populate: [
        'feature_image', 'seo', 'seo.share_image', 'categories',
        'writer', 'writer.avatar', 'writer.social', 'thumbnail', 'mobile_feature_image'
      ]
    });
  }

  // Categories with serialization
  getCategories(params = {}) {
    return this.get('categories', params, { serialize: true });
  }

  /**
   * Determine if params need qs serialization
   * (Arrays, nested objects, etc.)
   */
  needsQsSerialization(params) {
    return Object.values(params).some(value => 
      Array.isArray(value) || 
      (typeof value === 'object' && value !== null)
    );
  }

  /**
   * POST method for form submissions
   */
  post(endpoint, data, options = {}) {
    const url = `${this.baseURL}/${endpoint}`;
    const config = { 
      timeout: this.defaultTimeout,
      ...options 
    };
    return axios.post(url, data, config);
  }

  /**
   * Error handling wrapper
   */
  async safeGet(endpoint, slugOrParams, options = {}) {
    try {
      return await this.get(endpoint, slugOrParams, options);
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error.message);
      throw error;
    }
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export common endpoint functions for backward compatibility
export const getApi = (endpoint, params = null) => 
  params ? apiService.get(endpoint, params) : apiService.getWithDeepPopulate(endpoint);

export const getHomeApi = () => apiService.getWithDeepPopulate('homepage');
export const getGlobalApi = () => apiService.getWithDeepPopulate('global');
export const getHeaderApi = () => apiService.getWithDeepPopulate('header');
export const getFooterApi = () => apiService.getWithDeepPopulate('footer');

export default apiService;