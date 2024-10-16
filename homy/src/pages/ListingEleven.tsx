import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingElevenMain from '../components/inner-listing/listing-11';

const ListingEleven = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Listing Eleven Homy'} />
         <ListingElevenMain />
      </Wrapper>
   );
};

export default ListingEleven;