import HeaderOne from "../../../../layouts/headers/HeaderOne"
import FancyBannerCommon from "../../../common/FancyBanner"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import PricingOneArea from "./PricingOneArea"
import FancyBanner from "../../projects/project-one/FancyBanner"
import FooterFour from "../../../../layouts/footers/FooterFour"

const PricingOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Pricing Plan" link="#" link_title="Pages" sub_title="Pricing" style={true} />
         <PricingOneArea />
         <FancyBanner />
         <FancyBannerCommon style={false} />
         <FooterFour />
      </>
   )
}

export default PricingOne
