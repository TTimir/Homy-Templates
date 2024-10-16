import BlockFeatureOne from "./BlockFeatureOne"
// import HomeBLockFeatureOne from "../../../components/homes/home-one/BLockFeatureOne"
import BlockFeatureTwo from "./BlockFeatureTwo"
import FancyBanner from "./FancyBanner"
import HomeBLockFeatureOne from "../../../homes/home-one/BLockFeatureOne"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import BLockFeatureTwo from "../../../homes/home-four/BLockFeatureTwo"
import FancyBannerCommon from "../../../common/FancyBanner"
import FooterFour from "../../../../layouts/footers/FooterFour"
import Feedback from "../../../homes/home-one/Feedback"

const ServiceOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Our Services" link="#" link_title="Pages" sub_title="Services" style={false} />
         <BlockFeatureOne />
         <HomeBLockFeatureOne />
         <BlockFeatureTwo style={false} />
         <FancyBanner />
         <Feedback />
         <BLockFeatureTwo style={true} />
         <FancyBannerCommon />
         <FooterFour />
      </>
   )
}

export default ServiceOne;
