import ReactPaginate from "react-paginate";
import UseShortedProperty from "../../../hooks/useShortedProperty";
import { Link } from "react-router-dom";
import PropertyCarousel from "../../homes/home-two/PropertyCarousel";

const FavouriteArea = () => {

   const itemsPerPage = 9;
   const page = "listing_4";

   const {
      currentItems,
      pageCount,
      handlePageClick,
   } = UseShortedProperty({ itemsPerPage, page });

   return (
      <>
         <div className="row gx-xxl-5">
            {currentItems.map((item: any) => (
               <div key={item.id} className="col-lg-4 col-md-6 d-flex mb-50">
                  <div className="listing-card-one border-25 h-100 w-100 ">
                     <div className="img-gallery p-15">
                        <div className="prperty-carousel-slider position-relative border-25 overflow-hidden">
                           <div className={`tag border-25 ${item.tag_bg}`}>{item.tag}</div>
                           <Link to="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                           <PropertyCarousel item={item} />
                        </div>
                     </div>
                     <div className="property-info p-25">
                        <Link to="/listing_details_03" className="title tran3s">{item.title}</Link>
                        <div className="address">{item.address}</div>
                        <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                           <li className="d-flex align-items-center">
                              <img src="/assets/images/icon/icon_04.svg" alt=""
                                 className="lazy-img icon me-2" />
                              <span className="fs-16">{item.property_info.sqft} sqft</span>
                           </li>
                           <li className="d-flex align-items-center">
                              <img src="/assets/images/icon/icon_05.svg" alt=""
                                 className="lazy-img icon me-2" />
                              <span className="fs-16">{item.property_info.bed} bed</span>
                           </li>
                           <li className="d-flex align-items-center">
                              <img src="/assets/images/icon/icon_06.svg" alt=""
                                 className="lazy-img icon me-2" />
                              <span className="fs-16">{item.property_info.bath} bath</span>
                           </li>
                        </ul>
                        <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                           <strong className="price fw-500 color-dark">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} {item.price_text && <>/ <sub>m</sub></>}</strong>
                           <Link to="/listing_details_03" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <ReactPaginate
            breakLabel="..."
            nextLabel={<img src="/assets/images/icon/icon_46.svg" alt="" className="ms-2" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageCount}
            pageCount={pageCount}
            previousLabel={<img src="/assets/images/icon/icon_46.svg" alt="" className="ms-2" />}
            renderOnZeroPageCount={null}
            className="pagination-one d-flex align-items-center style-none pt-20"
         />
      </>
   )
}

export default FavouriteArea;
