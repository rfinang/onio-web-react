import InvestorPage from "../components/investors";
import ClientRedis from "../redis/index";
import KeyCache from "../constant/cache";
import {getBlogApi, getContactApi, getInvestorApi, getNewsletterApi, getNewsPostApi} from "../api";

function Investor(props) {
    return <InvestorPage {...props} />;
}

export const getServerSideProps = async () => {

    let cacheProps = {};
    // const dataCache = await ClientRedis.get(KeyCache.investors)
    const dataCache = null;
    if (dataCache) {
        cacheProps = JSON.parse(dataCache);
    } else {
        const [investorsData, newsletterSection] = await Promise.all([
            getInvestorApi(),
            getNewsletterApi(),
        ]);
        cacheProps = {
            investorsData: investorsData.data.data,
            newsletterSectionData: newsletterSection.data.data,
        };
        ClientRedis.set(KeyCache.investors, JSON.stringify(cacheProps))

    }
    const newsData = await getNewsPostApi({
        sort:["publish_date:DESC"],
        pagination:{pageSize:4},
    });

    return {
        props: {
            ...cacheProps,
            newsPostData: newsData.data.data,
        }
    };
};
export default Investor;
