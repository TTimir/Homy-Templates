import FooterFour from "../../../../layouts/footers/FooterFour"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import FancyBanner from "../../../common/FancyBanner"
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree"
import PricingTwoArea from "./PricingTwoArea"

const PricingTwo = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Pricing Plan" link="#" link_title="Pages" sub_title="Pricing" style={false} />
         <PricingTwoArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default PricingTwo
