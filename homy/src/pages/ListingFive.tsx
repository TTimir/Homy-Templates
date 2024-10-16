import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingFiveMain from '../components/inner-listing/listing-05';

const ListingFive = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Five Homy'} />
         <ListingFiveMain />
      </Wrapper>
   );
};

export default ListingFive;