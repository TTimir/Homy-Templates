import ReactPaginate from "react-paginate"
import UseShortedProperty from "../../../hooks/useShortedProperty"
import NiceSelect from "../../../ui/NiceSelect"
import { Link } from "react-router-dom"
import DropdownOne from "../../search-dropdown/inner-dropdown/DropdownOne"
import PropertyCarousel from "../../homes/home-two/PropertyCarousel"

const ListingOneArea = () => {

   const itemsPerPage = 8;
   const page = "listing_1";

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
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => {
      resetFilters();
   };

   return (
      <div className="property-listing-six bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120">
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-8">
                  <div className="ps-xxl-5">
                     <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
                        <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span
                           className="color-dark fw-500">{sortedProperties.length}</span> results</div>
                        <div className="d-flex align-items-center xs-mt-20">
                           <div className="short-filter d-flex align-items-center">
                              <div className="fs-16 me-2">Short by:</div>
                              <NiceSelect
                                 className="nice-select"
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
                           <Link to="/listing_02" className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                              data-bs-toggle="tooltip" title="Switch To List View">
                              <i className="fa-regular fa-bars"></i>
                           </Link>
                        </div>
                     </div>

                     <div className="row gx-xxl-5">
                        {currentItems.map((item: any) => (
                           <div key={item.id} className="col-md-6 d-flex mb-50">
                              <div className="listing-card-one border-25 h-100 w-100">
                                 <div className="img-gallery p-15">
                                    <div className="prperty-carousel-slider position-relative border-25 overflow-hidden">
                                       <div className={`tag border-25 ${item.tag_bg}`}>{item.tag}</div>
                                       <Link to="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                                       <PropertyCarousel item={item} />
                                    </div>
                                 </div>

                                 <div className="property-info p-25">
                                    <Link to="/listing_details_01" className="title tran3s">{item.title}</Link>
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
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<img src="/assets/images/icon/icon_46.svg" alt="" className="ms-2" />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={pageCount}
                        pageCount={pageCount}
                        previousLabel={<img src="/assets/images/icon/icon_46.svg" alt="" className="ms-2" />}
                        renderOnZeroPageCount={null}
                        className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
                     />
                  </div>
               </div>

               <div className="col-lg-4 order-lg-first">
                  <div className="advance-search-panel dot-bg md-mt-80">
                     <div className="main-bg">
                        <DropdownOne
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
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListingOneArea
