import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import AgencyDetailsMain from '../components/inner-pages/agency/agency-details';

const AgencyDetails = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Agency Details Homy'} />
         <AgencyDetailsMain />
      </Wrapper>
   );
};

export default AgencyDetails;