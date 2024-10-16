import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingFourMain from '../components/inner-listing/listing-04';

const ListingFour = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Four Homy'} />
         <ListingFourMain />
      </Wrapper>
   );
};

export default ListingFour;