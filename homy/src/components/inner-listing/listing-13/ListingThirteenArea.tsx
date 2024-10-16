import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import UseShortedProperty from '../../../hooks/useShortedProperty';
import { Link } from 'react-router-dom';
import NiceSelect from '../../../ui/NiceSelect';
import DropdownSix from '../../search-dropdown/inner-dropdown/DropdownSix';
import PropertyCarousel from '../../homes/home-two/PropertyCarousel';

const select_type: string[] = ["All", "Apartments", "Villa", "Mortgage", "Loft", "Home", "Flat", "Building", "Office", "Factory", "Industry"];

const ListingThirteenArea = () => {

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
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => {
      resetFilters();
   };

   const [selectedType, setSelectedType] = useState("All");

   const handleTypeClick = (type: string) => {
      setSelectedType(type);
   };

   return (
      <div className="property-listing-seven pt-120 lg-pt-100">
         <div className="listing-type-filter">
            <div className="wrapper">
               <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
                  <li>Select Type:</li>
                  {select_type.map((select, i) => (
                     <li key={i}>
                        <Link
                           to="#"
                           className={selectedType === select ? "active" : ""}
                           onClick={() => handleTypeClick(select)}
                        >
                           {select}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="wrapper">
            <div className="row gx-0">
               <div className="col-xxl-9 col-lg-8">
                  <div className="ps-3 pe-3 ps-md-4 pe-md-4 ps-xxl-5 pe-xxl-5 pt-50 pb-200 xl-pb-120 md-pb-80">
                     <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
                        <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span
                           className="color-dark fw-500">{sortedProperties.length}</span> results</div>
                        <div className="d-flex align-items-center xs-mt-20">
                           <div className="short-filter d-flex align-items-center">
                              <div className="fs-16 me-2">Short by:</div>
                              <NiceSelect
                                 className="nice-select rounded-0"
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
                           <Link to="#" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To List View"><i className="fa-regular fa-bars"></i></Link>
                        </div>
                     </div>

                     <div className="row gx-xxl-5">
                        {currentItems.map((item: any) => (
                           <div key={item.id} className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50">
                              <div className="listing-card-one style-two shadow-none h-100 w-100">
                                 <div className="img-gallery">
                                    <div className="prperty-carousel-slider position-relative overflow-hidden">
                                       <div className="tag fw-500">{item.tag}</div>
                                       <Link to="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                                       <PropertyCarousel item={item} />
                                    </div>
                                 </div>
                                 <div className="property-info pt-20">
                                    <Link to="#" className="title tran3s">{item.title}</Link>
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
                                       <strong className="price fw-500 color-dark">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {item.price_text && <>/ <sub>m</sub></>}</strong>
                                       <Link to="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="pt-5">
                        <ReactPaginate
                           breakLabel="..."
                           nextLabel={<i className="fa-regular fa-chevron-right"></i>}
                           onPageChange={handlePageClick}
                           pageRangeDisplayed={pageCount}
                           pageCount={pageCount}
                           previousLabel={<i className="fa-regular fa-chevron-left"></i>}
                           renderOnZeroPageCount={null}
                           className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
                        />
                     </div>
                  </div>
               </div>

               <div className="col-xxl-3 col-lg-4 order-lg-first">
                  <div className="advance-search-panel h-100 border-end">
                     <div className="main-bg grey-bg h-100">
                        <DropdownSix
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

export default ListingThirteenArea
