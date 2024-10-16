import FaqOne from "../../common/faq/FaqOne"

const FancyBannerOne = () => {

   return (
      <div className="fancy-banner-four position-relative z-1 mt-180 xl-mt-150 lg-mt-120">
         <div className="container">
            <div className="bg-line position-relative z-1 pt-110 xl-pt-80 pb-140 xl-pb-100">
               <div className="row">
                  <div className="col-xl-8 col-lg-9 ms-auto">
                     <div className="ps-xxl-5">
                        <div className="title-one mb-50 lg-mb-30">
                           <h2 className="font-garamond fs-xl">Best homes, perfect Match for you.</h2>
                        </div>
                        <div className="row">
                           <div className="col-lg-4">
                              <img src="/assets/images/shape/shape_19.svg" alt="" className="lazy-img ms-auto d-none d-lg-block me-auto mt-20" />
                           </div>
                           <div className="col-lg-8">
                              <p className="fs-24 color-dark">We’ve more than 745,000 apartments & home for sell, rent & mortgage.</p>
                              <div className="accordion accordion-style-one mt-60" id="accordionOne">
                                 <FaqOne />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <img src="/assets/images/assets/ils_04.png" alt="" className="lazy-img shapes illustration" />
         <img src="/assets/images/assets/screen_02.jpg" alt="" className="lazy-img shapes screen_01" />
      </div>
   )
}

export default FancyBannerOne
