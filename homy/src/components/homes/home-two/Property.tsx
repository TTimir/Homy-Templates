import { Link } from "react-router-dom";
import property_data from "../../../data/home-data/PropertyData";
import PropertyCarousel from "./PropertyCarousel";

const Property = () => {
   return (
      <div className="xl-mt-120 property-listing-two position-relative z-1 mt-150 pb-150 xl-pb-120 lg-pb-80">
         <div className="container">
            <div className="position-relative">
               <div className="title-one mb-25 lg-mb-20">
                  <h2 className="font-garamond">New Listings</h2>
                  <p className="fs-22 mt-xs">Explore latest & featured properties for sale.</p>
               </div>

               <div className="row gx-xxl-5">
                  {property_data.filter((items) => items.page === "home_2").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40">
                        <div className="listing-card-one style-two h-100 w-100 ">
                           <div className="img-gallery">
                              <div className="prperty-carousel-slider position-relative overflow-hidden">
                                 <div className="tag fw-500">{item.tag}</div>
                                 <PropertyCarousel item={item} />
                              </div>
                           </div>
                           <div className="property-info p-25">
                              <Link to="#" className="title tran3s">{item.title}</Link>
                              <div className="address">{item.address}</div>
                              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
                                 {item.property_info.map((info, index) => (
                                    <li key={index} className="d-flex align-items-center">
                                       <img src={info.icon} alt="" className="lazy-img icon me-2" />
                                       <span className="fs-16">{info.total_feature} {info.feature}</span>
                                    </li>
                                 ))}
                              </ul>
                              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                                 <strong className="price fw-500 color-dark">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                 <Link to="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link to="/listing_05" className="btn-eight"><span>Explore All</span> <i
                     className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
         <img src="/assets/images/shape/shape_17.svg" alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default Property;
