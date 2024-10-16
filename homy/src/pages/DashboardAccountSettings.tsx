import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import DashboardAccountSettingsMain from '../components/dashboard/account-settings'

const DashboardAccountSettings = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Dashboard Account Settings  Homy'} />
         <DashboardAccountSettingsMain />
      </Wrapper>
   );
};

export default DashboardAccountSettings;