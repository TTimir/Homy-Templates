import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingDetailsThreeMain from '../components/ListingDetails/listing-details-3';

const ListingDetailsThree = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Details Three Homy'} />
         <ListingDetailsThreeMain />
      </Wrapper>
   );
};

export default ListingDetailsThree;