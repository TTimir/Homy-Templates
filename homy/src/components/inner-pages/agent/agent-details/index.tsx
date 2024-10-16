import AgencyDetailsArea from "../../agency/agency-details/AgencyDetailsArea"
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import FooterFour from "../../../../layouts/footers/FooterFour"
import FancyBanner from "../../../common/FancyBanner"

const AgentDetails = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Agent Details" link="agent" link_title="Agent" sub_title="Mathews Firlo" style={false} />
         <AgencyDetailsArea style={true} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default AgentDetails
