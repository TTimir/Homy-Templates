import { Link } from "react-router-dom"
import category_data from "../../../data/home-data/CategoryData"

const Category = () => {
   return (
      <div className="category-section-one dark-bg pt-130 pb-110 xl-pb-80">
         <div className="container container-large">
            <div className="position-relative z-1">
               <h4 className="mb-50 xl-mb-30 text-center text-md-start text-white">Popular Categories.</h4>
               <div className="wrapper">
                  <ul className="d-flex flex-wrap justify-content-center justify-content-xxl-between style-none">
                     {category_data.filter((items) => items.page === "home_3").map((item) => (
                        <li key={item.id}>
                           <Link to="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                              <img src={item.icon ? item.icon : ""} alt="" className="lazy-img" />
                              <span>{item.text}</span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="section-btn text-center sm-mt-40">
                  <Link to="/listing_01" className="btn-eleven white-vr"><span>See all categories</span> <i className="bi bi-chevron-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Category
