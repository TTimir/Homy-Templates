import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FancyBanner from "../../common/FancyBanner";
import ListingElevenArea from "./ListingElevenArea"

const ListingEleven = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingElevenArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingEleven;
