import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import BlogOneMain from '../components/blogs/blog-one'

const BlogOne = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog One Homy'} />
         <BlogOneMain />
      </Wrapper>
   );
};

export default BlogOne;