import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import DashboardMessageMain from '../components/dashboard/message'

const DashboardMessage = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Dashboard Message  Homy'} />
         <DashboardMessageMain />
      </Wrapper>
   );
};

export default DashboardMessage;