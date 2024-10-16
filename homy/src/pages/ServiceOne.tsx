import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ServiceOneMain from '../components/inner-pages/services/service-one';

const ServiceOne = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Service One Homy'} />
         <ServiceOneMain />
      </Wrapper>
   );
};

export default ServiceOne;