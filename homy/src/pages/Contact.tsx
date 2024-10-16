import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import PContactMain from '../components/inner-pages/contact'

const Contact = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contact Homy'} />
         <PContactMain />
      </Wrapper>
   );
};

export default Contact;