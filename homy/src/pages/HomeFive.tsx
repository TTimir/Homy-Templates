import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeFiveMain from '../components/homes/home-five';

const HomeFive = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Five Homy'} />
         <HomeFiveMain />
      </Wrapper>
   );
};

export default HomeFive;