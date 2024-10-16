import { useState } from "react";
import VideoPopup from "../../../modals/VideoPopup";

const VideoTour = ({ isOpen, handleAccordionClick }: any) => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button
               className={`accordion-button ${isOpen ? "" : "collapsed"}`}
               type="button"
               onClick={handleAccordionClick}
            >
               Video Tour
            </button>
         </h2>
         <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
            <div className="accordion-body">
               <div className="property-video-tour">
                  <div className="position-relative image-bg overflow-hidden z-1">
                     <img src="/assets/images/listing/img_47.jpg" alt="" className="lazy-img w-100" />
                     <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                        className="video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
                        data-fancybox
                     >
                        <i className="fa-thin fa-play"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </div>
   );
};

export default VideoTour;
