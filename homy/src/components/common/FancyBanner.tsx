
import LoginModal from "../../modals/LoginModal"
import { useState } from "react"

const FancyBanner = ({ style }: any) => {

   const [loginModal, setLoginModal] = useState<boolean>(false);

   return (
      <>
         <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
                        <h3 className="text-white m0">Start your <span>Journey{style ? "" : <img src="/assets/images/shape/title_shape_06.svg" alt="" className="lazy-img" />}</span> As a Retailer.</h3>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="form-wrapper me-auto ms-auto me-lg-0">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <input type="email" placeholder="Email address" className={style ? "rounded-0" : ""} />
                           <button className={style ? "rounded-0" : ""}>Get Started</button>
                        </form>
                        <div className="fs-16 mt-10 text-white">Already a Agent? <a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal">Sign in.</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default FancyBanner
