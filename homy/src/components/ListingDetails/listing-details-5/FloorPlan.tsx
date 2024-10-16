import Slider from 'react-slick';

const FloorPlan = ({ isOpen, handleAccordionClick }: any) => {

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
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button className={`accordion-button ${isOpen ? "" : "collapsed"}`}
               type="button"
               onClick={handleAccordionClick}
            >
               Floor Plans
            </button>
         </h2>
         <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
            <div className="accordion-body">
               <div className="property-floor-plan">
                  <div className="wrapper">
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
            </div>
         </div>
      </div>
   )
}

export default FloorPlan
