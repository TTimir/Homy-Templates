import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import FancyBanner from "../../common/FancyBanner"
import BreadcrumbThree from "../../common/breadcrumb/BreadcrumbThree"
import BlogTwoArea from "./BlogTwoArea"

const BlogTwo = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Blog List" link="#" link_title="Pages" sub_title="Blog" style={false} />
         <BlogTwoArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default BlogTwo
