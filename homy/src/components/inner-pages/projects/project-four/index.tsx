import FooterFour from "../../../../layouts/footers/FooterFour";
import HeaderFour from "../../../../layouts/headers/HeaderFour";
import FancyBanner from "../../../common/FancyBanner";
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree";
import ProjectArea from "./ProjectArea"

const ProjectFour = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Our Projects" link="#" link_title="Pages" sub_title="Projects" style={false} />
         <ProjectArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ProjectFour;
