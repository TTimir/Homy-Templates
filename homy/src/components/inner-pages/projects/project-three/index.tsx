import ProjectArea from "./ProjectArea"
import FancyBanner from "../project-one/FancyBanner"
import HeaderFour from "../../../../layouts/headers/HeaderFour";
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree";
import FooterFour from "../../../../layouts/footers/FooterFour";
import FancyBannerCommon from "../../../common/FancyBanner";

const ProjectThree = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Our Projects" link="#" link_title="Pages" sub_title="Projects" style={false} />
         <ProjectArea />
         <FancyBanner />
         <FancyBannerCommon />
         <FooterFour />
      </>
   )
}

export default ProjectThree;
