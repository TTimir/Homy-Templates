import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HeaderFour from '../layouts/headers/HeaderFour';
import BlogDetailsArea from '../components/blogs/blog-details/BlogDetailsArea';
import FancyBanner from '../components/common/FancyBanner';
import FooterFour from '../layouts/footers/FooterFour';
import { useParams } from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';

const DynamicBlogDeatils = () => {

   const { id } = useParams();
   const { blogs } = useBlogs();
   const blog = blogs.find(blog => Number(blog.id) === Number(id));

   return (
      <Wrapper>
         <SEO pageTitle={'Blog Details Homy'} />
         <HeaderFour />
         <BlogDetailsArea blog={blog} />
         <FancyBanner />
         <FooterFour />
      </Wrapper>
   );
};

export default DynamicBlogDeatils;