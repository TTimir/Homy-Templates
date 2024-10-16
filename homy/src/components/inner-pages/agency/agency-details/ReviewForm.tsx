import AgencyFormOne from "../../../forms/AgencyFormOne";
import LoginModal from "../../../../modals/LoginModal";
import { useState } from "react";

const ReviewForm = () => {

   const [loginModal, setLoginModal] = useState<boolean>(false);

   return (
      <>
         <div className="review-form">
            <h4 className="mb-20">Leave A Reply</h4>
            <p className="fs-20 lh-lg pb-15">
               <a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal"
                  className="color-dark fw-500 text-decoration-underline">Sign in</a> to post your comment or signup if you don&apos;t have any account.
            </p>

            <div className="bg-dot p-30">
               <AgencyFormOne />
            </div>
         </div>

         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default ReviewForm
