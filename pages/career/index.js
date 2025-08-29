import {
    getCareerModuleApi,
    getCareerLandingApi,
    getWorkLocationsApi,
    getCareersToStrapiApi,
} from "../../api";
import CareerPage from "../../components/career";
import ClientRedis from '../../redis/index'
import KeyCache from '../../constant/cache';

function Career(props) {
    return <CareerPage {...props} />;
}

export const getServerSideProps = async () => {
    let dataProps = {};
    const dataCache = await ClientRedis.get(KeyCache.careerLanding)
    if (dataCache) {
        dataProps = JSON.parse(dataCache);
        return {
            props: dataProps
        };
    }

    const [careers, careerModule, careerLanding, workLocations] =
        await Promise.all([
            getCareersToStrapiApi({
                sort:["publishedAt:DESC"],
            }),
            getCareerModuleApi(),
            getCareerLandingApi(),
            getWorkLocationsApi({
                _sort: "publishedAt:DESC",
            }),
        ]);

    dataProps = {
        careersData: careers.data.data,
        careerModuleData: careerModule.data.data,
        careerLandingData: careerLanding.data.data,
        workLocationsData: workLocations.data.data,
    }

    ClientRedis.set(KeyCache.careerLanding,JSON.stringify(dataProps))

    return {
        props: dataProps
    };
};
export default Career;
