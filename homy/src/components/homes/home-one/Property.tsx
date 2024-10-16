import { Link } from "react-router-dom";
import property_data from "../../../data/home-data/PropertyData";
import PropertyCarousel from "../home-two/PropertyCarousel";

const Property = () => {
   return (
      <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
         <div className="container">
            <div className="position-relative">
               <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20">
                  <h3>New <span>Listings <img src="/assets/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span></h3>
                  <p className="fs-22 mt-xs">Explore latest & featured properties for sale.</p>
               </div>

               <div className="row gx-xxl-5">
                  {property_data.filter((items) => items.page === "home_1").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40">
                        <div className="listing-card-one border-25 h-100 w-100">
                           <div className="img-gallery p-15">
                              <div className="prperty-carousel-slider position-relative border-25 overflow-hidden">
                                 <div className={`tag border-25 ${item.tag_bg}`}>{item.tag}</div>
                                 <PropertyCarousel item={item} />
                              </div>
                           </div>

                           <div className="property-info p-25">
                              <Link to="/listing_details_01" className="title tran3s">{item.title}</Link>
                              <div className="address">{item.address}</div>
                              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                                 {item.property_info.map((info, index) => (
                                    <li key={index} className="d-flex align-items-center">
                                       <img src={info.icon} alt="" className="lazy-img icon me-2" />
                                       <span className="fs-16">{info.total_feature} {info.feature}</span>
                                    </li>
                                 ))}
                              </ul>
                              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                                 <strong className="price fw-500 color-dark">
                                    ${item.price.toLocaleString(undefined, {
                                       minimumFractionDigits: item.price_text ? 0 : 2,
                                       maximumFractionDigits: 2
                                    })}{item.price_text && <>/<sub>m</sub></>}
                                 </strong>
                                 <Link to="/listing_details_01" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Property;
