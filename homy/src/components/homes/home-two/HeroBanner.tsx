import { useState } from "react";
import VideoPopup from "../../../modals/VideoPopup";
import DropdownTwo from "../../search-dropdown/home-dropdown/DropdownTwo";
import { Link } from "react-router-dom";

const HeroBanner = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="hero-banner-two z-1 position-relative">
            <div className="container">
               <div className="position-relative line-bg pt-200 md-pt-150 pb-130 xl-pb-100">
                  <div className="row">
                     <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10">
                        <h1 className="hero-heading font-garamond">Find the right home for your family <span><img src="/assets/images/shape/shape_11.svg" alt="" className="lazy-img icon d-inline-block" /></span></h1>
                        <p className="fs-24 color-dark pt-35 md-pt-30 pb-35 mb-pb-20">We’ve more than 745,000 apartments, place & plot.</p>
                        <div className="d-inline-flex align-items-center flex-wrap">
                           <Link to="/listing_03" className="btn-seven mb-20 me-4 me-xxl5"><span>Explore All listing</span> <i className="bi bi-arrow-up-right"></i></Link>
                           <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-icon tran3s d-flex align-items-center justify-content-center mb-20">
                              <i className="fa-light fa-play"></i>
                              <div className="ps-3 text-start">
                                 <span className="d-block">Watch</span>
                                 <strong className="fs-20 color-dark fw-normal d-block">Intro video</strong>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>

                  <DropdownTwo />
               </div>
            </div>
            <img src="/assets/images/assets/ils_03.png" alt="" className="lazy-img shapes illustration" />
            <img src="/assets/images/shape/shape_12.svg" alt="" className="lazy-img shapes shape_01" />
            <img src="/assets/images/assets/badge_01.svg" alt="" className="lazy-img shapes shape_02" />
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default HeroBanner
