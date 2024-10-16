import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FancyBanner from "../../common/FancyBanner";
import ListingTwoArea from "./ListingTwoArea"

const ListingTwo = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingTwoArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingTwo;
