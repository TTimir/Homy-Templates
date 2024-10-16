import { Link } from "react-router-dom"
import CardStyleTwo from "../../common/CardStyleTwo"
import Count from "../../common/Count"

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-eight position-relative z-1 mt-170 xl-mt-140 lg-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row align-items-xl-end">
                  <div className="col-xl-7 col-lg-6">
                     <div className="pe-xl-5 me-xxl-3">
                        <div className="title-one pe-xl-5">
                           <h2 className="font-garamond">Explore & Find your <em>Dream</em> home <span className="star-shape"><img src="/assets/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
                        </div>

                        <div className="row gx-xl-4 align-items-end">
                           <div className="col-7">
                              <div className="media-block position-relative z-1">
                                 <img src="/assets/images/media/img_29.jpg" alt="" className="lazy-img main-img w-100" />
                                 <img src="/assets/images/assets/screen_03.jpg" alt="" className="lazy-img shapes screen_01" />
                                 <img src="/assets/images/shape/shape_40.svg" alt="" className="lazy-img shapes shape_01" />
                              </div>
                           </div>
                           <div className="col-5">
                              <div className="media-block position-relative z-1">
                                 <img src="/assets/images/media/img_30.jpg" alt="" className="lazy-img main-img w-100" />
                                 <img src="/assets/images/assets/screen_04.png" alt="" className="lazy-img shapes screen_02" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-5 col-lg-6">
                     <div className="block-two ps-xxl-5 md-mt-100">
                        <div className="bg-wrapper">
                           <p className="fs-24 fst-italic pe-xl-5">“Your premier partner in real estate. Transforming properties into dreams. Let us guide you home with expertise.”</p>
                           <div className="counter-wrapper pb-40 mt-45 lg-mt-20 mb-60 lg-mb-20">
                              <div className="row">
                                 <div className="col-6">
                                    <div className="counter-block-one mt-20">
                                       <div className="main-count fw-500 color-dark">$<span className="counter"><Count number={7} /></span>bil+</div>
                                       <span>Project Handover</span>
                                    </div>
                                 </div>
                                 <div className="col-6">
                                    <div className="counter-block-one mt-20">
                                       <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.9} /></span>mil+</div>
                                       <span>Happy Customers</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <ul className="list-style-one fs-22 color-dark style-none">
                              <li>Loan &amp; low Interest facility</li>
                              <li>100k+ Property Listing  added & updated</li>
                              <li>Expert agent consultation</li>
                           </ul>
                           <div className="mt-70 lg-mt-50">
                              <Link to="/about_us_02" className="btn-five md"><span>Learn More</span> <i className="bi bi-arrow-up-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <CardStyleTwo />
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
