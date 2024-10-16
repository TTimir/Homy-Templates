import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import ListingDetailsOneArea from "./ListingDetailsOneArea"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsOneArea />
      <FancyBanner />
      <FooterFour />
    </>
  )
}

export default ListingDetailsOne
