import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import FancyBanner from "../../common/FancyBanner";
import ListingSevenArea from "./ListingSevenArea"

const ListingSeven = () => {
   return (
      <>
         <HeaderFour />
         <ListingSevenArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingSeven;
