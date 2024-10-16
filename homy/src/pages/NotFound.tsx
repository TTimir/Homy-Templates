import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import NotFoundMain from '../components/inner-pages/error'

const NotFound = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'404 || Homy'} />
         <NotFoundMain />
      </Wrapper>
   );
};

export default NotFound;