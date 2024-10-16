import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import CompareMain from '../components/inner-pages/compare';

const Compare = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Compare Homy'} />
         <CompareMain />
      </Wrapper>
   );
};

export default Compare;