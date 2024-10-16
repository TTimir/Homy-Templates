import { Link } from "react-router-dom"
import footer_data from "../../data/home-data/FooterData"

const FooterFour = () => {
   return (
      <div className="footer-four position-relative z-1">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xxl-3 col-lg-4 mb-60">
                     <div className="footer-intro">
                        <div className="logo mb-20">
                           <Link to="/">
                              <img src="/assets/images/logo/logo_06.svg" alt="" />
                           </Link>
                        </div>
                        <p className="mb-30 xs-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, United States</p>
                        <Link to="#" className="email tran3s mb-60 md-mb-30">homyreal@demo.com</Link>
                        <ul className="style-none d-flex align-items-center social-icon">
                           <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                           <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                           <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>

                  {footer_data.filter((items) => items.page === "home_5").map((item) => (
                     <div key={item.id} className={`col-sm-4 mb-30 ${item.widget_class}`}>
                        <div className={`footer-nav ${item.widget_class2}`}>
                           <h5 className="footer-title">{item.widget_title}</h5>
                           <ul className="footer-nav-link style-none">
                              {item.footer_link.map((li, i) => (
                                 <li key={i}><Link to={li.link}>{li.link_title}</Link></li>))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bottom-footer">
               <p className="m0 text-center fs-16">Copyright @2024 Homy inc.</p>
            </div>
         </div>
         <img src="/assets/images/assets/ils_06.svg" alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default FooterFour
