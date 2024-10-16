import { Link } from "react-router-dom"
import FaqTwo from "../../common/faq/FaqTwo"

const FAQ = () => {
   return (
      <div className="faq-section-one position-relative z-1 mt-170 xl-mt-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-5">
                  <div className="title-one mb-40 lg-mb-20">
                     <h2 className="font-garamond">Frequently Asked Question</h2>
                     <p className="fs-20 mt-xs pt-20 md-pt-10">Don’t find the answer? We can help you.</p>
                  </div>
                  <Link to="/faq" className="btn-five sm text-uppercase rounded-0">ASK QUESTIONs</Link>
               </div>

               <div className="col-lg-7">
                  <div className="accordion-style-two md-mt-40">
                     <div className="accordion" id="accordionTwo">
                        <FaqTwo />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <img src="/assets/images/shape/shape_29.svg" alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ
