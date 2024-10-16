import { useState } from "react";
import Fancybox from "../../common/Fancybox";
import SidebarInfo from "../listing-details-sidebar/SidebarInfo";

const largeThumb: string[] = ["1", "2", "3"];

interface DataType {
   big_carousel: string[];
   small_carousel: string[];
}

const gallery_data: DataType = {
   big_carousel: [
      "/assets/images/listing/img_52.jpg",
      "/assets/images/listing/img_53.jpg",
      "/assets/images/listing/img_54.jpg",
      "/assets/images/listing/img_55.jpg",
      "/assets/images/listing/img_56.jpg"],
   small_carousel: [
      "/assets/images/listing/img_43_s.jpg",
      "/assets/images/listing/img_44_s.jpg",
      "/assets/images/listing/img_45_s.jpg",
      "/assets/images/listing/img_46_s.jpg",
      "/assets/images/listing/img_47_s.jpg"],
}

const { big_carousel, small_carousel } = gallery_data;

const MediaGallery = () => {

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % big_carousel.length);
   };

   const handlePrev = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + big_carousel.length) % big_carousel.length);
   };

   return (
      <div className="media-gallery bg-white shadow4 p-40 border-20 mt-80 lg-mt-50 mb-60">
         <div id="media_slider" className="carousel slide row style-two">
            <div className="col-12">
               <div className="position-relative z-1 overflow-hidden border-20">
                  <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                     Sell all 37 Photos
                     <Fancybox
                        options={{
                           Carousel: {
                              infinite: true,
                           },
                        }}
                     >
                        {largeThumb.map((thumb: any, index: any) => (
                           <a key={index} className="d-block" data-fancybox="img3" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                        ))}
                     </Fancybox>
                  </div>
                  <div className="theme-sidebar-one d-none d-xl-block">
                     <div className="agent-info bg-white border-20 p-30">
                        <SidebarInfo />
                     </div>
                  </div>
                  <div className="tab-content carousel-inner" id="myTabContent">
                     {big_carousel.map((carousel, index) => (
                        <div key={index} className={`carousel-item tab-pane fade ${index === currentImageIndex ? 'show active' : ''}`} id={`item${index}`}>
                           <img src={carousel} alt="" className="border-20 w-100" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="position-relative mt-25 xs-mt-10">
                  <div className="carousel-indicators d-flex justify-content-between justify-content-xl-start position-relative w-100 h-100">
                     {small_carousel.map((carousel, index) => (
                        <button key={index} onClick={() => setCurrentImageIndex(index)} className={`nav-link ${index === currentImageIndex ? 'active' : ''}`} type="button">
                           <img src={carousel} alt="" className="border-10 w-100" />
                        </button>
                     ))}
                  </div>
                  <div className="carousel-arrow d-none d-xl-flex">
                     <button className="carousel-control-prev" onClick={handlePrev}>
                        <i className="bi bi-chevron-left"></i>
                        <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" onClick={handleNext}>
                        <i className="bi bi-chevron-right"></i>
                        <span className="visually-hidden">Next</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MediaGallery
