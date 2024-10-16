import { useState } from "react";
import ReactPaginate from 'react-paginate';
import inner_agent_data from "../../../../data/inner-data/AgentData";
import NiceSelect from "../../../../ui/NiceSelect";
import { Link } from "react-router-dom";

const AgentArea = () => {

   const selectHandler = () => { };
   const agent = inner_agent_data;

   const itemsPerPage = 12;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = agent.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(agent.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % agent.length;
      setItemOffset(newOffset);
   };

   return (
      <div className="agent-section-two mt-130 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-50 lg-mb-40">
               <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span
                  className="color-dark fw-500">{inner_agent_data.length}</span> results</div>
               <div className="d-flex align-items-center xs-mt-20">
                  <div className="short-filter d-flex align-items-center">
                     <div className="fs-16 me-2">Short by:</div>
                     <NiceSelect
                        className="nice-select rounded-0"
                        options={[
                           { value: "01", text: "Pupular" },
                           { value: "02", text: "Best Rating" },
                           { value: "03", text: "Price Low" },
                           { value: "04", text: "Price High" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name=""
                        placeholder="" />
                  </div>
               </div>
            </div>

            <div className="row align-items-center">
               {currentItems.map((item) => (
                  <div key={item.id} className="col-xl-3 col-md-4 col-sm-6">
                     <div className="agent-card-two position-relative z-1 mb-50">
                        <div className="media bg-dark position-relative overflow-hidden">
                           <div className="tag bg-white position-absolute text-uppercase">{item.tag}</div>
                           <img src={item.thumb} alt="" className="lazy-img agent-img w-100 tran5s" />
                        </div>
                        <div className="text-center pt-30">
                           <h6 className="name"><Link to="/agent_details" className="stretched-link">{item.title}</Link></h6>
                           <div className="designation">Agent</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="pt-30 xs-pt-10 text-center">
               <ReactPaginate
                  breakLabel="..."
                  nextLabel={<i className="fa-regular fa-chevron-right"></i>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel={<i className="fa-regular fa-chevron-left"></i>}
                  renderOnZeroPageCount={null}
                  className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
               />
            </div>
         </div>
      </div>
   )
}

export default AgentArea
