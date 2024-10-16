import { Link } from "react-router-dom"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-eight mt-160 xl-mt-100 mb-120 xl-mb-100 lg-mb-80">
         <div className="container container-large">
            <div className="bg-wrapper border-30 bg-pink-two overflow-hidden position-relative z-1">
               <div className="row align-items-end">
                  <div className="col-xl-6 col-lg-7 col-md-7">
                     <div className="pb-80 lg-pb-40">
                        <h3>Start your Journey as <span className="fw-normal fst-italic">A Retailer.</span></h3>
                        <div className="d-inline-flex flex-wrap align-items-center position-relative mt-15">
                           <Link to="/agent" className="btn-eight mt-10 me-4"><span>Become an Agent</span></Link>
                           <Link to="/contact" className="btn-two rounded-0 border-0 mt-10"><span>Contact us</span></Link>
                           <img src="/assets/images/shape/shape_51.svg" alt="" className="lazy-img shapes shape_02" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 col-md-5 text-center text-md-end">
                     <div className="media-wrapper position-relative z-1 d-inline-block">
                        <img src="/assets/images/media/img_44.png" alt="" className="lazy-img" />
                        <img src="/assets/images/shape/shape_50.svg" alt="" className="lazy-img shapes shape_01" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBanner
