import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FancyBanner from "../../common/FancyBanner";
import ListingOneArea from "./ListingOneArea"

const ListingOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingOneArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingOne;
