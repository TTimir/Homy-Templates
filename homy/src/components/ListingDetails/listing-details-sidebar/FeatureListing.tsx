import { Link } from "react-router-dom";
import Fancybox from "../../common/Fancybox";
import Slider from 'react-slick';

const largeThumb: string[] = ["1", "2", "3"];

interface DataType {
   id: number;
   thumb: string;
   class_name?: string;
   large_thumb: string[];
   tag: string;
   price: number;
   address: string;
}[];

const feature_listing_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/images/listing/img_13.jpg",
      class_name: "active",
      large_thumb: [
         "/assets/images/listing/img_large_01.jpg",
         "/assets/images/listing/img_large_02.jpg",
         "/assets/images/listing/img_large_03.jpg"],
      tag: "FOR RENT",
      price: 123710,
      address: "120 Elgin St. Celina, Delaware",
   },
   {
      id: 2,
      thumb: "/assets/images/listing/img_14.jpg",
      large_thumb: [
         "/assets/images/listing/img_large_01.jpg",
         "/assets/images/listing/img_large_02.jpg",
         "/assets/images/listing/img_large_03.jpg"],
      tag: "FOR RENT",
      price: 211536,
      address: "120 Elgin St. Celina, Delaware",
   },
   {
      id: 3,
      thumb: "/assets/images/listing/img_15.jpg",
      large_thumb: [
         "/assets/images/listing/img_large_01.jpg",
         "/assets/images/listing/img_large_02.jpg",
         "/assets/images/listing/img_large_03.jpg"],
      tag: "FOR RENT",
      price: 305958,
      address: "120 Elgin St. Celina, Delaware",
   },
]

const FeatureListing = () => {

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
   };

   return (
      <div className="feature-listing bg-white border-20 p-30">
         <h5 className="mb-40">Featured Listing</h5>
         <div id="F-listing" className="carousel slide">
            <Slider {...settings} className="carousel-inner">
               {feature_listing_data.map((item) => (
                  <div key={item.id} className={`carousel-item ${item.class_name}`}>
                     <div className="listing-card-one style-three border-10">
                        <div className="img-gallery">
                           <div className="position-relative border-10 overflow-hidden">
                              <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
                              <Link to="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                              <img src={item.thumb} className="w-100 border-10" alt="..." />
                              <div className="img-slider-btn">
                                 03 <i className="fa-regular fa-image"></i>
                                 <Fancybox
                                    options={{
                                       Carousel: {
                                          infinite: true,
                                       },
                                    }}
                                 >
                                    {largeThumb.map((thumb: any, index: any) => (
                                       <a key={index} className="d-block" data-fancybox="img5" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                                    ))}
                                 </Fancybox>
                              </div>
                           </div>
                        </div>
                        <div className="property-info mt-15">
                           <div className="d-flex justify-content-between align-items-end">
                              <div>
                                 <strong className="price fw-500 color-dark">${item.price}</strong>
                                 <div className="address m0 pt-5">{item.address} </div>
                              </div>
                              <Link to="/listing_details_03" className="btn-four rounded-circle">
                                 <i className="bi bi-arrow-up-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default FeatureListing;
