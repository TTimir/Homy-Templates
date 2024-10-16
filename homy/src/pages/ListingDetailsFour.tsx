import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingDetailsFourMain from '../components/ListingDetails/listing-details-4';

const ListingDetailsFour = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Details Four Homy'} />
         <ListingDetailsFourMain />
      </Wrapper>
   );
};

export default ListingDetailsFour;