import { useEffect, useRef, useState } from "react";
import project_data from "../../../../data/inner-data/ProjectData";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import Fancybox from "../../../common/Fancybox";

const ProjectArea = () => {

   const isotope = useRef<Isotope | null>(null);
   const [filterKey, setFilterKey] = useState("*");

   useEffect(() => {
      if (typeof window !== "undefined") {
         isotope.current = new Isotope(".isotop-gallery-wrapper", {
            itemSelector: ".isotop-item",
            layoutMode: "fitRows",
         });

         // Cleanup
         return () => {
            isotope.current?.destroy();
         };
      }
   }, []);

   // Handling filter key change
   useEffect(() => {
      if (filterKey === "*") isotope.current?.arrange?.({ filter: "*" });
      else isotope.current?.arrange?.({ filter: `.${filterKey}` });
   }, [filterKey]);

   const [selectedFilter, setSelectedFilter] = useState("*");

   const handleFilterKeyChange = (key: any) => () => {
      setFilterKey(key);
      setSelectedFilter(key);
   };

   return (
      <div className="project-section-one mt-150 xl-mt-100">
         <div className="container">
            <div className="filter-nav-one style-two">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "apartments" ? "is-checked" : ""} onClick={handleFilterKeyChange("apartments")}>Apartments</li>
                  <li className={selectedFilter === "house" ? "is-checked" : ""} onClick={handleFilterKeyChange("house")}>House</li>
                  <li className={selectedFilter === "villa" ? "is-checked" : ""} onClick={handleFilterKeyChange("villa")}>VILLA</li>
                  <li className={selectedFilter === "flat" ? "is-checked" : ""} onClick={handleFilterKeyChange("flat")}>FLAT</li>
               </ul>
            </div>

            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-2column pt-10">
               <div className="grid-sizer"></div>
               {project_data.filter((items) => items.page === "project_3").map((item) => (
                  <div key={item.id} className={`isotop-item ${item.category}`}>
                     <div className="project-block-two mt-80 lg-mt-40">
                        <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                           <div className="tag fw-500 text-uppercase">{item.tag}</div>
                           <Fancybox
                              options={{
                                 Carousel: {
                                    infinite: true,
                                 },
                              }}
                           >
                              <a className="d-block position-relative" data-fancybox="gallery17" data-caption={item.title} href={`/assets/images/project/img_${item.fancybox}.jpg`}>
                                 <img src={item.thumb} alt="" className="w-100 tran5s" />
                              </a>
                           </Fancybox>
                        </figure>
                        <div className="caption">
                           <div className="d-flex justify-content-between align-items-center">
                              <div className="title">
                                 <div className="date position-relative">{item.date}</div>
                                 <Link to="/project_details_01"><h4 className="tran3s">{item.title}</h4></Link>
                              </div>
                              <Link to="/project_details_01" className="btn-thirteen rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ProjectArea
