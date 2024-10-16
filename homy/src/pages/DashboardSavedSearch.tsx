import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import DashboardSavedSearchMain from '../components/dashboard/saved-search'

const DashboardSavedSearch = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Dashboard Saved Search  Homy'} />
         <DashboardSavedSearchMain />
      </Wrapper>
   );
};

export default DashboardSavedSearch;