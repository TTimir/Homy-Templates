import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeTwoMain from '../components/homes/home-two';

const HomeTwo = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Two Homy'} />
      <HomeTwoMain />
    </Wrapper>
  );
};

export default HomeTwo;