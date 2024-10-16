
import { Link } from "react-router-dom"
import property_data from "../../../data/home-data/PropertyData"
import PropertyCarousel from "../home-two/PropertyCarousel"

const PropertyOne = ({ style_1, style_2 }: any) => {
   return (
      <div className="property-listing-five mt-170 xl-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one mb-25 lg-mb-10">
                  {style_2 ? <h3><span>New<img src="/assets/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span> Listings</h3> :
                     <h3>{style_1 ? "Popular Listings" : "New Listings"}</h3>}
                  <p className="fs-22">Explore latest and featured properties for sale, rent & mortgage.</p>
               </div>

               <div className="row gx-xxl-5">
                  {property_data.filter((items) => items.page === "home_2").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40">
                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                           <div className="img-gallery">
                              <div className="prperty-carousel-slider position-relative overflow-hidden">
                                 <div className="tag fw-500">{item.tag}</div>
                                 <PropertyCarousel item={item} />
                              </div>
                           </div>
                           <div className="property-info pt-20">
                              <Link to="/listing_details_03" className="title tran3s">{item.title}</Link>
                              <div className="address">{item.address}</div>
                              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                 {item.property_info.map((info, index) => (
                                    <li key={index} className="d-flex align-items-center">
                                       <img src={info.icon} alt="" className="lazy-img icon me-2" />
                                       <span className="fs-16">{info.total_feature} {info.feature}</span>
                                    </li>
                                 ))}
                              </ul>
                              <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                 <strong className="price fw-500 color-dark">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                 <Link to="/listing_details_03" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link to="/listing_08" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PropertyOne
