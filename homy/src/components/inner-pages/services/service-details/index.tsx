import FooterFour from "../../../../layouts/footers/FooterFour";
import HeaderOne from "../../../../layouts/headers/HeaderOne";
import FancyBanner from "../../../common/FancyBanner";
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne";
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Service Details" link="#" link_title="Service" sub_title="Buy Home" style={true} />
         <ServiceDetailsArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ServiceDetails;
