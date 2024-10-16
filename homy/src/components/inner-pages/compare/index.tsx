import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import FancyBanner from "../../common/FancyBanner"
import BreadcrumbThree from "../../common/breadcrumb/BreadcrumbThree"
import CompareArea from "./CompareArea"

const Compare = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Compare" link="#" link_title="Pages" sub_title="Compare" style={false} />
         <CompareArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default Compare
