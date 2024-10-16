import Slider from 'react-slick';

const CommonPropertyFloorPlan = ({ style }: any) => {

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
      <div className={`property-floor-plan ${style ? "bottom-line-dark pb-40 mb-60" : "mb-50"}`}>
         <h4 className="mb-40">Floor Plans</h4>
         <div className={` p-30 ${style ? "bg-dot" : "bg-white shadow4 border-20"}`}>
            <div id="floor-plan" className="carousel slide">
               <Slider {...settings} className="carousel-inner">
                  <div className="carousel-item active">
                     <img src="/assets/images/listing/floor_1.jpg" alt="" className="w-100" />
                  </div>
                  <div className="carousel-item">
                     <img src="/assets/images/listing/floor_2.jpg" alt="" className="w-100" />
                  </div>
                  <div className="carousel-item">
                     <img src="/assets/images/listing/floor_1.jpg" alt="" className="w-100" />
                  </div>
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default CommonPropertyFloorPlan;
