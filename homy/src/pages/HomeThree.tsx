import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeThreeMain from '../components/homes/home-three';

const HomeThree = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Three Homy'} />
      <HomeThreeMain />
    </Wrapper>
  );
};

export default HomeThree;