import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FancyBanner from "../../common/FancyBanner";
import ListingThreeArea from "./ListingThreeArea"

const ListingSix = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingThreeArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingSix;
