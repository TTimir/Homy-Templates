import FeedbackOne from "../../common/FeedbackOne"

const Feedback = () => {
   return (
      <div className="feedback-section-five mt-200 xl-mt-150 lg-mt-120">
         <div className="container container-large">
            <div className="bg-pink-two bg-wrapper position-relative z-1 pt-60 lg-pt-40 pb-45 md-pb-30">
               <div className="content-wrapper">
                  <div className="icon d-flex align-items-center justify-content-center rounded-circle mb-35"><img src="/assets/images/icon/icon_38.svg" alt="" className="lazy-img" /></div>

                  <FeedbackOne />
               </div>
               <div className="rating-wrapper">
                  <img src="/assets/images/assets/rating_02.png" alt="" className="lazy-img" />
                  <p className="m0 pt-10"><span className="fw-500 color-dark">13k rating</span> (4.7 Rating)</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Feedback
