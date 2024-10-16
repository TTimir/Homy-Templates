import { Link } from "react-router-dom"

const FancyBannerTwo = () => {
   return (
      <div className="fancy-banner-five position-relative z-1 pt-90 lg-pt-70 pb-110 lg-pb-70 mt-170 xl-mt-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 m-auto text-center">
                  <div className="title-one mb-40 lg-mb-20">
                     <h2 className="font-garamond fs-xl text-white">Any Inquiry? Feel free To contact Us.</h2>
                  </div>
                  <Link to="/contact" className="btn-nine text-uppercase"><span>SEND MESSAGE</span></Link>
               </div>
            </div>
         </div>
         <img src="/assets/images/shape/shape_30.svg" alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default FancyBannerTwo
