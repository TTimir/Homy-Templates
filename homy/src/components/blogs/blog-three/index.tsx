import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import BlogThreeArea from "./BlogThreeArea"

const BlogThree = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Blog Full Width" link="#" link_title="Pages" sub_title="Blog" style={true} />
         <BlogThreeArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default BlogThree
