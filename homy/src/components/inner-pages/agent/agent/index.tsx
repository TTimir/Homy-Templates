import FooterFour from "../../../../layouts/footers/FooterFour"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import FancyBanner from "../../../common/FancyBanner"
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree"
import AgentArea from "./AgentArea"

const Agent = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Our Agent" link="#" link_title="Pages" sub_title="Agents" style={true} />
         <AgentArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default Agent
