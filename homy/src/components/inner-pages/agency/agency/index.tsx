import AgencyArea from "./AgencyArea"
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import FancyBanner from "../../../common/FancyBanner"
import FooterFour from "../../../../layouts/footers/FooterFour"

const Agency = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Agency" link="#" link_title="Pages" sub_title="Agency" style={true} />
         <AgencyArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default Agency
