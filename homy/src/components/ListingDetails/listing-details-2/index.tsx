import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import ListingDetailsTwoArea from "./ListingDetailsTwoArea"

const ListingDetailsTwo = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsTwoArea />
      <FancyBanner />
      <FooterFour />
    </>
  )
}

export default ListingDetailsTwo
