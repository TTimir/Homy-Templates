import NavMenu from "./Menu/NavMenu"
import UseSticky from "../../hooks/UseSticky"
import LoginModal from "../../modals/LoginModal"
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./Menu/MobileMenu";

const HeaderOne = ({ style }: any) => {

   const [loginModal, setLoginModal] = useState<boolean>(false);
   const [isActive, setIsActive] = useState<boolean>(false);
   const { sticky } = UseSticky();

   return (
      <>
         <header className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${sticky ? "fixed" : ""}`}>
            {!style && <div className="alert-wrapper text-center">
               <p className="fs-16 m0 text-white">The <Link to="/listing_01" className="fw-500">flash sale</Link> go on. The offer will end in — <span>This Sunday</span></p>
            </div>}
            <div className="inner-content gap-one">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="logo order-lg-0">
                        <Link to="/" className="d-flex align-items-center">
                           <img src="/assets/images/logo/logo_01.svg" alt="" />
                        </Link>
                     </div>
                     <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           <li>
                              <a onClick={() => setLoginModal(true)} data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one"><i className="fa-regular fa-lock"></i> <span>Login</span></a>
                           </li>
                           <li className="d-none d-md-inline-block ms-3">
                              <Link to="/dashboard/add-property" className="btn-two" target="_blank"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></Link>
                           </li>
                        </ul>
                     </div>
                     <nav className="navbar navbar-expand-lg p0 order-lg-2">
                        <button
                           onClick={() => setIsActive(!isActive)}
                           className={`navbar-toggler d-block d-lg-none ${isActive ? "hide-toggle" : ""}`}
                           type="button">
                           <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </header>
         <MobileMenu isActive={isActive} />
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default HeaderOne
