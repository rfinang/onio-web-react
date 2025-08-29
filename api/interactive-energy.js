import axios from "axios";
import Config from "../config/index";

const urls = {
    getEnergyEmulatorLanding: `${Config.DOMAIN_API}/interactive-energy-tool?populate=deep`,
    getProductPage: `${Config.DOMAIN_API}/products?populate=deep`,
};

export const getEnergyEmulatorLandingApi = () => {
    return axios.get(urls.getEnergyEmulatorLanding);
};
