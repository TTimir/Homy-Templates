import FooterFour from "../../../../layouts/footers/FooterFour"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import FancyBanner from "../../../common/FancyBanner"
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree"
import AgencyDetailsArea from "./AgencyDetailsArea"

const AgencyDetails = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Agency Details" link="agency" link_title="Agency" sub_title="Rainbow Housing" style={false} />
         <AgencyDetailsArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default AgencyDetails
