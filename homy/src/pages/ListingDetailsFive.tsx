import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingDetailsFiveMain from '../components/ListingDetails/listing-details-5';

const ListingDetailsFive = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Details Five Homy'} />
         <ListingDetailsFiveMain />
      </Wrapper>
   );
};

export default ListingDetailsFive;