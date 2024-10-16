import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import AgentDetailsMain from '../components/inner-pages/agent/agent-details';

const AgentDetails = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Agent Details Homy'} />
         <AgentDetailsMain />
      </Wrapper>
   );
};

export default AgentDetails;