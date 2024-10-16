import { Link } from 'react-router-dom'

interface ContentType {
   title_1: string;
   title_2: string;
   desc_1: string;
   desc_2: string;
   project_details: {
      count: string;
      icon: string;
      title: string;
      desc: string;
   }[];
}

const content_data: ContentType = {
   title_1: "Apartments on Vintage City.",
   title_2: "Project Details",
   desc_1: "Your leading real estate advocate, transforming houses into dreams. Trust",
   desc_2: "Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home.  745,000 apartments & home for sell, rent & mortgage.",
   project_details: [
      {
         count: "01",
         icon: "/assets/images/icon/icon_43.svg",
         title: "Date",
         desc: "Sunday, 23 July, 2021",
      },
      {
         count: "02",
         icon: "/assets/images/icon/icon_44.svg",
         title: "Client Name",
         desc: "Mariona Adisson, California",
      },
      {
         count: "03",
         icon: "/assets/images/icon/icon_45.svg",
         title: "Project Type",
         desc: "Business Consulting",
      },
   ]
}

const { title_1, title_2, desc_1, desc_2, project_details } = content_data;

const ProjectDetailsArea = () => {
   return (
      <div className="project-details-one mt-150 xl-mt-100 mb-170 xl-mb-100">
         <div className="container">
            <div className="row gx-xxl-5">
               <div className="col-lg-6 order-lg-first">
                  <figure className="image-wrapper">
                     <img src="/assets/images/project/img_27.jpg" alt="" className="lazy-img w-100" />
                  </figure>
                  <figure className="image-wrapper">
                     <img src="/assets/images/project/img_29.jpg" alt="" className="lazy-img w-100" />
                  </figure>
                  <figure className="image-wrapper">
                     <img src="/assets/images/project/img_30.jpg" alt="" className="lazy-img w-100" />
                  </figure>
               </div>

               <div className="col-lg-6">
                  <div className="details-text ps-xxl-5 md-mt-40">
                     <div className="tag fw-500 text-uppercase">Apartments</div>
                     <h3>{title_1}</h3>
                     <p className="fs-24 pt-45 xl-pt-30 pb-45 xl-pb-30">{desc_1}</p>
                     <h4 className="mb-40">{title_2}</h4>
                     <div className="project-info-outline">
                        <div className="main-bg">
                           <ul className="style-none">
                              {project_details.map((item, index) => (
                                 <li key={index} className="position-relative z-1">
                                    <div className="num fw-light">{item.count}</div>
                                    <img src={item.icon} alt="" className="lazy-img icon" />
                                    <strong>{item.title}</strong>
                                    <span>{item.desc}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <p className="fs-20 pt-50 pb-35">{desc_2}</p>
                     <ul className="style-none d-flex align-items-center social-icon">
                        <li>Share :</li>
                        <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link to="#"><i className="bi bi-twitter-x"></i></Link></li>
                        <li><Link to="#"><i className="bi bi-instagram"></i></Link></li>
                     </ul>

                     <div className="page-pagination mt-45 pt-50">
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="d-flex align-items-center page-title position-relative">
                              <img src="/assets/images/project/img_28.jpg" alt="" className="lazy-img img" />
                              <div className="ps-4">
                                 <span>Next PROJECT</span>
                                 <h5 className="m0">1,320 sqft Modern Flat</h5>
                              </div>
                           </div>
                           <Link to="#" className="btn-four rounded-circle inverse"><i className="bi bi-arrow-right"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectDetailsArea
