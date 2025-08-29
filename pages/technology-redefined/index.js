import { getProjectLandingApi, getTechnologyRedefinedApi } from "../../api";
import ProjectLandingPage from "../../components/project-landing";
import ClientRedis from '../../redis/index'
import KeyCache from '../../constant/cache';

function ProjectLanding(props) {
  return <ProjectLandingPage {...props} />;
}
export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.technologyRedefined)
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
    return {
      props: dataProps
    };
  }

  const [projectLanding, homeProject] = await Promise.all([
    getProjectLandingApi(),
    getTechnologyRedefinedApi(),
  ]);

  dataProps = {
    projectLandingData: projectLanding.data.data,
    homeProjectData: homeProject.data.data,
  };

  ClientRedis.set(KeyCache.technologyRedefined, JSON.stringify(dataProps))

  return {
    props: dataProps
  };
};
export default ProjectLanding;
