import BLockFeatureOne from "./BLockFeatureOne"
import BlockFeatureThree from "../service-one/BlockFeatureTwo"
import BLockFeatureTwo from "./BLockFeatureTwo"
import BLockFeatureThree from "./BLockFeatureThree"
import Brand from "../../../homes/home-five/Brand"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import BreadcrumbThree from "../../../common/breadcrumb/BreadcrumbThree"
import FooterFour from "../../../../layouts/footers/FooterFour"
import FancyBanner from "../../../common/FancyBanner"

const ServiceTwo = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Our Services" link="#" link_title="Pages" sub_title="Services" style={false} />
         <BLockFeatureOne />
         <Brand />
         <BLockFeatureThree />
         <BlockFeatureThree style={true} />
         <BLockFeatureTwo />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ServiceTwo
