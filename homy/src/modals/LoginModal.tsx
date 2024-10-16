
import { useState } from "react"
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { Link } from "react-router-dom";

const tab_title: string[] = ["Login", "Signup",];

const LoginModal = ({ loginModal, setLoginModal }: any) => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className={loginModal ? "login-modal-visible" : ""}>
         <div className="modal fade" id="loginModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen modal-dialog-centered">
               <div className="container">
                  <div className="user-data-form modal-content">
                     <button onClick={() => setLoginModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     <div className="form-wrapper m-auto">
                        <ul className="nav nav-tabs w-100">
                           {tab_title.map((tab, index) => (
                              <li key={index} onClick={() => handleTabClick(index)} className="nav-item">
                                 <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                              </li>
                           ))}
                        </ul>
                        <div className="tab-content mt-30">
                           <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}>
                              <div className="text-center mb-20">
                                 <h2>Welcome Back!</h2>
                                 <p className="fs-20 color-dark">Still don&apos;t have an account? <Link to="#">Sign up</Link></p>
                              </div>
                              <LoginForm />
                           </div>

                           <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                              <div className="text-center mb-20">
                                 <h2>Register</h2>
                                 <p className="fs-20 color-dark">Already have an account? <Link to="#">Login</Link></p>
                              </div>
                              <RegisterForm />
                           </div>
                        </div>

                        <div className="d-flex align-items-center mt-30 mb-10">
                           <div className="line"></div>
                           <span className="pe-3 ps-3 fs-6">OR</span>
                           <div className="line"></div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <Link to="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                 <img src="/assets/images/icon/google.png" alt="" />
                                 <span className="ps-3">Signup with Google</span>
                              </Link>
                           </div>
                           <div className="col-sm-6">
                              <Link to="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                 <img src="/assets/images/icon/facebook.png" alt="" />
                                 <span className="ps-3">Signup with Facebook</span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div onClick={() => setLoginModal(false)} className={`offcanvas-backdrop fade ${loginModal ? "show" : ""}`}></div>
      </div>
   )
}

export default LoginModal
