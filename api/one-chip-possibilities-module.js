import axios from "axios";
import Config from "../config/index";

const urls = {
  getOneChipPossibilities: `${Config.DOMAIN_API}/one-chip-many-possibilities-module?populate=deep`,
};

export const getOneChipPossibilitiesApi = () => {
  return axios.get(urls.getOneChipPossibilities);
};
