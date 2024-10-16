import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FancyBanner from "../../common/FancyBanner";
import ListingFourArea from "./ListingFourArea"

const ListingFour = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingFourArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingFour;
