import { Link } from "react-router-dom"
import feature_data from "../../../../data/home-data/FeatureData"

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-sixteen">
         <div className="bg-pink-two position-relative z-1 pt-140 xl-pt-100 lg-pt-80 pb-150 xl-pb-120 lg-pb-100">
            <div className="container">
               <div className="title-one text-center mb-70 xl-mb-40 lg-mb-20">
                  <h2 className="font-garamond star-shape"><span className="star-shape"><img src="/assets/images/shape/shape_37.svg" alt="" className="lazy-img" /></span> Buy, Rend & Sell</h2>
                  <p className="fs-22 mt-xs color-dark">Over 745K listings of apartments, lots, plots - available today.</p>
               </div>

               <div className="row justify-content-center gx-xxl-5">
                  {feature_data.filter((items) => items.page === "home_1_feature_1").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 mt-30 d-flex">
                        <div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
                           <img src={item.icon ? item.icon : ""} alt="" className="lazy-img icon" />
                           <h5 className="mt-35 mb-20">{item.title}</h5>
                           <p className="fs-22 mb-50">{item.desc}</p>
                           <Link to="/listing_10" className="btn-twelve mt-auto">{item.btn}</Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <img src="/assets/images/shape/shape_71.svg" alt="" className="lazy-img shapes shape_01" />
            <img src="/assets/images/shape/shape_39.svg" alt="" className="lazy-img shapes shape_02" />
         </div>

         <div className="block-feature-fourteen pt-150 xl-pt-120 lg-pt-100 pb-150 xl-pb-120 lg-pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="title-one md-mb-30 pe-xxl-4">
                        <h2 className="font-garamond text-white star-shape">Easily Purchase, Sell, or Lease listings. <span className="star-shape"><img src="/assets/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-lg-6 ms-auto">
                     <p className="text-white fs-24 m0 lh-lg ">Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home</p>
                  </div>
               </div>

               <div className="mt-70 xl-mt-50">
                  <div className="row">
                     {feature_data.filter((items) => items.page === "home_6_feature_1").map((item) => (
                        <div key={item.id} className="col-lg-4">
                           <div className="card-style-eight mt-45">
                              <div className="d-flex align-items-start pe-xxl-5">
                                 <img src={item.icon ? item.icon : ""} alt="" className="lazy-img icon" />
                                 <div className="text">
                                    <h5 className="text-white">{item.title}</h5>
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
