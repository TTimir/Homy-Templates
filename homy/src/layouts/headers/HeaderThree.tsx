import NavMenu from "./Menu/NavMenu"
import { useState } from "react"
import Offcanvas from "./Menu/Offcanvas"
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";
import LoginModal from "../../modals/LoginModal";
import MobileMenu from "./Menu/MobileMenu";

const HeaderThree = () => {

   const [loginModal, setLoginModal] = useState<boolean>(false);
   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header className={`theme-main-menu menu-overlay menu-style-five sticky-menu ${sticky ? "fixed" : ""}`}>
            <div className="inner-content gap-one">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center">
                     <div className="logo order-lg-0">
                        <Link to="/" className="d-flex align-items-center">
                           <img src="/assets/images/logo/logo_06.svg" alt="" />
                        </Link>
                     </div>

                     <div className="right-widget ms-auto me-3 me-lg-0 order-lg-4">
                        <ul className="d-flex align-items-center style-none">
                           <li className="d-flex align-items-center login-btn-one">
                              <i className="fa-regular fa-lock"></i><a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s">Login <span className="d-none d-sm-inline-block">/ Sign up</span></a>
                           </li>
                           <li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                              <Link to="/dashboard/add-property" className="btn-five md rounded-0" target="_blank"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></Link>
                           </li>
                           <li className="d-none d-xl-block"><button onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="sidenavbtn rounded-circle tran3s" type="button"><i className="fa-sharp fa-light fa-bars-filter"></i></button></li>
                        </ul>
                     </div>

                     <div className="order-lg-2 d-none d-xxl-block">
                        <p className="m0 email-text ps-5 pe-5">Our Email <Link to="#" className="tran3s fw-500 ms-2">askhomy@demo.com</Link></p>
                     </div>

                     <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-3">
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
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default HeaderThree
