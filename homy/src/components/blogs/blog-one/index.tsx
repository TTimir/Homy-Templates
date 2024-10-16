import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import FancyBanner from "../../common/FancyBanner";
import BreadcrumbThree from "../../common/breadcrumb/BreadcrumbThree";
import BlogOneArea from "./BlogOneArea"

const BlogOne = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Blog Grid" link="#" link_title="Pages" sub_title="Blog" style={false} />
         <BlogOneArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default BlogOne;
