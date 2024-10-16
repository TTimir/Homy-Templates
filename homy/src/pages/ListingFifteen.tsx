import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingFifteenMain from '../components/inner-listing/listing-15';

const ListingFifteen = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Fifteen Homy'} />
         <ListingFifteenMain />
      </Wrapper>
   );
};

export default ListingFifteen;