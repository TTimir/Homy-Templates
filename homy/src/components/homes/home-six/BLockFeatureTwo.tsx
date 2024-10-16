import { Link } from "react-router-dom"
import FaqThree from "../../common/faq/FaqThree"
import Count from "../../common/Count"

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-thirteen bg-pink pt-160 xl-pt-120 lg-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-170 xl-mt-120">
         <div className="position-relative z-1">
            <div className="container container-large">
               <div className="row">
                  <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
                     <div className="pb-85 xl-pb-50 position-relative z-1">
                        <div className="title-one mb-55 lg-mb-20">
                           <h3>Find Your <span>Perfect<img src="/assets/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span> Match Easily.</h3>
                        </div>
                        <div className="accordion-style-three">
                           <div className="accordion" id="accordionThree">
                              <FaqThree />
                           </div>
                        </div>
                        <div className="d-inline-flex flex-wrap align-items-center mt-70 xl-mt-50 lg-mt-30">
                           <Link to="/about_us_01" className="btn-five md rounded-0 mt-20 me-5"><span>More Details</span></Link>
                           <Link to="/contact" className="btn-three mt-20"><span>Request a Callback</span> <i className="fa-light fa-arrow-right-long"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="media-gallery">
               <div className="bg" style={{ backgroundImage: `url(/assets/images/media/img_48.jpg)` }}>
                  <div className="card-style-three p0">
                     <div className="bg-wrapper text-center">
                        <h3>0<Count number={7} />+</h3>
                        <p>Years Experience <br />with proud.</p>
                     </div>
                  </div>
                  <img src="/assets/images/assets/screen_09.png" alt="" className="lazy-img screen_01" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
