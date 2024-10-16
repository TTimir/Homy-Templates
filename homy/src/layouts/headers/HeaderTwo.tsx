import NavMenu from "./Menu/NavMenu"
import Offcanvas from "./Menu/Offcanvas"
import HeaderSearchbar from "./Menu/HeaderSearchbar"
import UseSticky from "../../hooks/UseSticky"
import { Link } from "react-router-dom"
import LoginModal from "../../modals/LoginModal"
import { useState } from "react"
import MobileMenu from "./Menu/MobileMenu"

const HeaderTwo = ({ style_1, style_2 }: any) => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [loginModal, setLoginModal] = useState<boolean>(false);
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <div className={`theme-main-menu menu-overlay sticky-menu ${style_2 ? "menu-style-four" : style_1 ? "menu-style-three" : "menu-style-two"} ${sticky ? "fixed" : ""}`}>
            <div className={`inner-content ${style_2 ? "gap-two" : "gap-one"}`}>
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center">
                     <div className="logo order-lg-0">
                        <Link to="/" className="d-flex align-items-center">
                           <img src={style_2 ? "/assets/images/logo/logo_06.svg" : style_1 ? "/assets/images/logo/logo_04.svg" : "/assets/images/logo/logo_02.svg"} alt="" />
                        </Link>
                     </div>

                     <div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           {!style_2 ? (<><li className="d-flex align-items-center login-btn-one">
                              <i className="fa-regular fa-lock"></i>
                              <a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s">
                                 Login <span className="d-none d-sm-inline-block"> {""} / Sign up</span></a>
                           </li>
                              <li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                                 <Link to="dashboard/add-property" className={style_1 ? "btn-ten" : "btn-two rounded-0"} target="_blank">
                                    <span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i>
                                 </Link>
                              </li>
                              <li className="d-none d-xl-block">
                                 <button onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="sidenavbtn rounded-circle tran3s" type="button">
                                    <i className="fa-sharp fa-light fa-bars-filter"></i>
                                 </button>
                              </li></>) : (<>
                                 <li className="d-none d-md-flex align-items-center login-btn-one me-4 me-xxl-5">
                                    <i className="fa-regular fa-phone-volume"></i>
                                    <Link to="tel:+757-699-4478" className="tran3s">+757 699-4478</Link>
                                 </li>
                                 <li>
                                    <a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal" className="login-btn-two rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="fa-regular fa-lock"></i></a>
                                 </li>
                                 <li>
                                    <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-btn-one rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="bi bi-search"></i></a>
                                 </li>
                              </>)}
                        </ul>
                     </div>

                     <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                        <button
                           onClick={() => setIsActive(!isActive)}
                           className={`navbar-toggler d-block d-lg-none ${isActive ? "hide-toggle" : ""}`}
                           type="button">
                           <span></span>
                        </button>
                        <div className={`collapse navbar-collapse ${style_2 ? "ms-xl-5" : ""}`} id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>

         <MobileMenu isActive={isActive} />
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderTwo
