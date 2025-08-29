
import EnergyEmulatorLanding from "../../components/energy-emulator/EnergyEmulatorLanding";
import ClientRedis from "../../redis";
import KeyCache from "../../constant/cache";
import {getEnergyEmulatorLandingApi} from "../../api/interactive-energy";
import {getNewsletterApi} from "../../api";

function EnergyEmulator(props) {
    return <EnergyEmulatorLanding {...props} />;
}

export const getServerSideProps = async () => {
    let dataProps = {};
    const dataCache = await ClientRedis.get(KeyCache.energyEmulator)
    if (1==-1) {
        console.log("get from cache", dataCache)
        dataProps = JSON.parse(dataCache);
    } else {
        const [energyEmulatorLanding, newsletterSection] = await Promise.all([
            getEnergyEmulatorLandingApi(),
            getNewsletterApi(),
        ]);


        dataProps = {
            energyEmulatorLandingData: energyEmulatorLanding.data.data,
            newsletterSectionData: newsletterSection.data.data,
        }

        console.log(dataProps);

        ClientRedis.set(KeyCache.energyEmulator, JSON.stringify(dataProps))
    }


    return {
        props: {
            ...dataProps,
        }
    };
};

export default EnergyEmulator;