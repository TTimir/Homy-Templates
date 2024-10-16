import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeFourMain from '../components/homes/home-four';

const HomeFour = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Four Homy'} />
         <HomeFourMain />
      </Wrapper>
   );
};

export default HomeFour;