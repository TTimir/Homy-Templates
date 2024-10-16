import ReactPaginate from "react-paginate";
import UseShortedProperty from "../../../hooks/useShortedProperty";
import { Link } from "react-router-dom";
import DropdownThree from "../../search-dropdown/inner-dropdown/DropdownThree";
import NiceSelect from "../../../ui/NiceSelect";
import PropertyCarousel from "../../homes/home-two/PropertyCarousel";

const ListingSevenArea = ({ style }: any) => {

   const itemsPerPage = 9;
   const page = "listing_5";

   const {
      itemOffset,
      sortedProperties,
      currentItems,
      pageCount,
      handlePageClick,
      handleBathroomChange,
      handleBedroomChange,
      handleSearchChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      handleLocationChange,
      handleStatusChange,
      handleTypeChange,
      handlePriceDropChange
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => {
      resetFilters();
   };

   return (
      <div className={`property-listing-six pb-200 xl-pb-120 ${style ? "pt-120 xl-pt-100" : "pt-200 xl-pt-150"}`}>
         <div className="container container-large">
            {!style && <div className="search-wrapper-one layout-one bg position-relative mb-75 md-mb-50">
               <div className="bg-wrapper rounded-0 border-0">
                  <DropdownThree
                     handlePriceDropChange={handlePriceDropChange}
                     handleSearchChange={handleSearchChange}
                     handleBedroomChange={handleBedroomChange}
                     handleBathroomChange={handleBathroomChange}
                     handlePriceChange={handlePriceChange}
                     maxPrice={maxPrice}
                     priceValue={priceValue}
                     handleResetFilter={handleResetFilter}
                     selectedAmenities={selectedAmenities}
                     handleAmenityChange={handleAmenityChange}
                     handleLocationChange={handleLocationChange}
                     handleStatusChange={handleStatusChange}
                  />
               </div>
            </div>}

            <div className={`listing-header-filter d-sm-flex justify-content-between align-items-center lg-mb-30 ${style ? "mb-50" : "mb-40"}`}>
               <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span
                  className="color-dark fw-500">{sortedProperties.length}</span> results</div>
               <div className="d-flex align-items-center xs-mt-20">
                  <div className="short-filter d-flex align-items-center">
                     <div className="fs-16 me-2">Short by:</div>
                     <NiceSelect
                        className={`nice-select rounded-0 `}
                        options={[
                           { value: "newest", text: "Newest" },
                           { value: "best_seller", text: "Best Seller" },
                           { value: "best_match", text: "Best Match" },
                           { value: "price_low", text: "Price Low" },
                           { value: "price_high", text: "Price High" },
                        ]}
                        defaultCurrent={0}
                        onChange={handleTypeChange}
                        name=""
                        placeholder="" />
                  </div>
                  <Link to={`/${style ? "listing_10" : "listing_08"}`} className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To List View"><i className="fa-regular fa-bars"></i></Link>
               </div>
            </div>

            <div className="row gx-xxl-5">
               {currentItems.map((item: any) => (
                  <div key={item.id} className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40">
                     <div className="listing-card-one style-two shadow-none h-100 w-100">
                        <div className="img-gallery">
                           <div className="prperty-carousel-slider position-relative overflow-hidden">
                              <div className={`tag fw-500 ${item.tag_bg}`}>{item.tag}</div>
                              <Link to="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                              <PropertyCarousel item={item} />
                           </div>
                        </div>
                        <div className="property-info pt-20">
                           <Link to="/listing_details_06" className="title tran3s">{item.title}</Link>
                           <div className="address">{item.address}</div>
                           <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                              <li className="d-flex align-items-center">
                                 <img src="/assets/images/icon/icon_32.svg" alt=""
                                    className="lazy-img icon me-2" />
                                 <span className="fs-16"><span className="color-dark">{item.property_info.sqft}</span> sqft</span>
                              </li>
                              <li className="d-flex align-items-center">
                                 <img src="/assets/images/icon/icon_32.svg" alt=""
                                    className="lazy-img icon me-2" />
                                 <span className="fs-16"><span className="color-dark">{item.property_info.bed}</span> bed</span>
                              </li>
                              <li className="d-flex align-items-center">
                                 <img src="/assets/images/icon/icon_32.svg" alt=""
                                    className="lazy-img icon me-2" />
                                 <span className="fs-16"><span className="color-dark">{item.property_info.bath}</span> bath</span>
                              </li>
                           </ul>
                           <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                              <strong className="price fw-500 color-dark">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.price_text && <>/<sub>m</sub></>}</strong>
                              <Link to="/listing_details_06" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
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
               className="pagination-one square d-flex align-items-center justify-content-center style-none pt-30"
            />
         </div>
      </div>
   )
}

export default ListingSevenArea;
