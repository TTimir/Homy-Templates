import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import AboutUsOneMain from '../components/inner-pages/about-us/about-us-one';

const AboutUsOne = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'About Us One Homy'} />
         <AboutUsOneMain />
      </Wrapper>
   );
};

export default AboutUsOne;