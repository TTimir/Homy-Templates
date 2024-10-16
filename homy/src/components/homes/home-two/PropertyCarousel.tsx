import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const PropertyCarousel = ({ item }: any) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
   };

   return (
      <Slider {...settings}>
         {item.carousel_thumb.map((thumb: any, i: any) => (
            <div key={i} className={`carousel-item ${thumb.active ? 'active' : ''}`} data-bs-interval="1000000">
               <Link to="/listing_details_01" className="d-block">
                  <img src={thumb.img} className="w-100" alt="..." />
               </Link>
            </div>
         ))}
      </Slider>
   );
};

export default PropertyCarousel
