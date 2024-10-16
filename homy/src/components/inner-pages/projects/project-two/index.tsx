import FancyBanner from "../project-one/FancyBanner";
import FancyBannerCommon from "../../../common/FancyBanner";
import ProjectArea from "./ProjectArea";
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne";
import HeaderOne from "../../../../layouts/headers/HeaderOne";
import FooterFour from "../../../../layouts/footers/FooterFour";

const ProjectOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Our Projects" link="#" link_title="Pages" sub_title="Project" style={true} />
         <ProjectArea />
         <FancyBanner />
         <FancyBannerCommon />
         <FooterFour />
      </>
   )
}

export default ProjectOne;
