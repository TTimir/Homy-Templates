import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ListingTwoMain from '../components/inner-listing/listing-01';

const ListingTwo = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Listing Two Homy'} />
      <ListingTwoMain />
    </Wrapper>
  );
};

export default ListingTwo;