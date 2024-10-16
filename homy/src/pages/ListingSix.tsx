import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingSixMain from '../components/inner-listing/listing-06';

const ListingSix = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Six Homy'} />
         <ListingSixMain />
      </Wrapper>
   );
};

export default ListingSix;