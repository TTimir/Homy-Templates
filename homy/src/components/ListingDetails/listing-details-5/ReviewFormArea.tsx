import LoginModal from "../../../modals/LoginModal";
import AgencyFormOne from "../../forms/AgencyFormOne"
import { useState } from "react"

const ReviewFormArea = ({ isOpen, handleAccordionClick }: any) => {

   const [loginModal, setLoginModal] = useState<boolean>(false);

   return (
      <>
         <div className="accordion-item">
            <h2 className="accordion-header">
               <button
                  className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                  type="button"
                  onClick={handleAccordionClick}>
                  Leave A Reply
               </button>
            </h2>
            <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
               <div className="accordion-body">
                  <div className="review-form">
                     <p className="fs-20 lh-lg pb-15"><a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal" className="color-dark fw-500 text-decoration-underline">Sign in</a> to post your comment or signup if you don&apos;t have any account.</p>
                     <AgencyFormOne />
                  </div>
               </div>
            </div>
         </div>
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default ReviewFormArea
