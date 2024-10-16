import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";
import LoginModal from "../../modals/LoginModal";
import HeaderSearchbar from "./Menu/HeaderSearchbar";
import NavMenu from "./Menu/NavMenu";
import MobileMenu from "./Menu/MobileMenu";

const HeaderFour = () => {

   const [loginModal, setLoginModal] = useState<boolean>(false);
   const { sticky } = UseSticky();
   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header className={`theme-main-menu menu-overlay menu-style-six sticky-menu ${sticky ? "fixed" : ""}`}>
            <div className="inner-content gap-two">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center">
                     <div className="logo order-lg-0">
                        <Link to="/" className="d-flex align-items-center">
                           <img src="/assets/images/logo/logo_06.svg" alt="" />
                        </Link>
                     </div>

                     <div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           <li className="d-none d-md-inline-block me-4">
                              <Link to="/dashboard/add-property" className="btn-ten rounded-0" target="_blank"><span>Add Listing</span> <i className="bi bi-arrow-up-right"></i></Link>
                           </li>
                           <li>
                              <a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal" className="login-btn-two rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="fa-regular fa-lock"></i></a>
                           </li>
                           <li>
                              <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-btn-one rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="bi bi-search"></i></a>
                           </li>
                        </ul>
                     </div>

                     <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                        <button
                           onClick={() => setIsActive(!isActive)}
                           className={`navbar-toggler d-block d-lg-none ${isActive ? "hide-toggle" : ""}`}
                           type="button">
                           <span></span>
                        </button>
                        <div className="collapse navbar-collapse ms-xl-5" id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </header>

         <MobileMenu isActive={isActive} />
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderFour
