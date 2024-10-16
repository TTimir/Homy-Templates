import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeOneMain from '../components/homes/home-one';

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Homy'} />
      <HomeOneMain />
    </Wrapper>
  );
};

export default Home;