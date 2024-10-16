import Slider from "react-slick"

const brand_data = [
   "/assets/images/logo/p_logo_07.png",
   "/assets/images/logo/p_logo_08.png",
   "/assets/images/logo/p_logo_09.png",
   "/assets/images/logo/p_logo_10.png",
   "/assets/images/logo/p_logo_11.png",
   "/assets/images/logo/p_logo_12.png",
]

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 5,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3500,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 4
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 2
         }
      }
   ]
}

const BrandThree = () => {
   return (
      <Slider {...setting} className="partner-logo-two">
         {brand_data.map((brand, i) => (
            <div key={i} className="item"><img src={brand} alt="" /></div>
         ))}
      </Slider>
   )
}

export default BrandThree;
