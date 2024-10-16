import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import DashboardAddPropertyMain from '../components/dashboard/add-property'

const DashboardAddProperty = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Dashboard Add Property  Homy'} />
         <DashboardAddPropertyMain />
      </Wrapper>
   );
};

export default DashboardAddProperty;