import Slider from "react-slick"

const brand_data = [
   "/assets/images/logo/p_logo_01.png",
   "/assets/images/logo/p_logo_02.png",
   "/assets/images/logo/p_logo_03.png",
   "/assets/images/logo/p_logo_04.png",
   "/assets/images/logo/p_logo_05.png",
   "/assets/images/logo/p_logo_06.png",
]

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 6,
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

const BrandOne = () => {
   return (
      <div className="partner-section-one position-relative z-2">
         <div className="container">
            <p className="text-white fs-24"><span>Join 27,000+</span> companies who’ve reached </p>
         </div>
         <div className="bg-wrapper">
            <div className="container">
               <Slider {...setting} className="partner-logo-one">
                  {brand_data.map((brand, i) => (
                     <div key={i} className="item"><img src={brand} alt="" /></div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default BrandOne
