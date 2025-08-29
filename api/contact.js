import axios from "axios";
import Config from "../config/index";
const urls = {
  postContact: `/api/contact-form-submissions`,
  getContact: `${Config.DOMAIN_API}/contact-o-ni-o-module?populate=deep`,
};

export const postContactApi = (data = null) => {
  return axios.post(urls.postContact, data);
};
export const getContactApi = () => {
  return axios.get(urls.getContact);
};
