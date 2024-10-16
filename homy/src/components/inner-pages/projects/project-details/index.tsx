import FooterFour from "../../../../layouts/footers/FooterFour";
import HeaderFour from "../../../../layouts/headers/HeaderFour";
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree";
import FancyBanner from "../project-one/FancyBanner";
import ProjectDetailsArea from "./ProjectDetailsArea"

const ProjectDetails = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Single Projects" link="pricing_01" link_title="Project" sub_title="Vintage City" style={false} />
         <ProjectDetailsArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ProjectDetails;
