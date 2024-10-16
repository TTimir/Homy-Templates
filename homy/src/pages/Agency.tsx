import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import AgencyMain from '../components/inner-pages/agency/agency';

const Agency = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Agency Homy'} />
         <AgencyMain />
      </Wrapper>
   );
};

export default Agency;