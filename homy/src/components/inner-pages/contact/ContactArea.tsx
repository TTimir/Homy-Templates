import { Link } from "react-router-dom";
import ContactForm from "../../forms/ContactForm";

interface DataType {
   id: number;
   class_name?: string;
   title: string;
   address_1: string;
   address_2?: string;
}

const address_data: DataType[] = [
   {
      id: 1,
      title: "We’r always happy to help.",
      address_1: "ask@homy.com"
   },
   {
      id: 2,
      class_name: "skew-line",
      title: "Our hotline number",
      address_1: "+757 699 4478,",
      address_2: "+991 377 9731",
   },
   {
      id: 3,
      title: "Live chat",
      address_1: "www.homylivechat.com"
   },
]

const ContactArea = () => {
   return (
      <div className="contact-us border-top mt-130 xl-mt-100 pt-80 lg-pt-60">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-xl-8 col-lg-10 m-auto">
                  <div className="title-one text-center">
                     <h3>Questions? Feel Free to Reach Out Via Message.</h3>
                  </div>
               </div>
            </div>
         </div>

         <div className="address-banner mt-60 lg-mt-40">
            <div className="container">
               <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
                  {address_data.map((item) => (
                     <div key={item.id} className={`block position-relative ${item.class_name} z-1 mt-25`}>
                        <div className="d-xl-flex align-items-center">
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                              <img src="/assets/images/icon/icon_39.svg" alt="" className="lazy-img" /></div>
                           <div className="text">
                              <p className="fs-22">{item.title}</p>
                              <Link to="#" className="tran3s">{item.address_1}</Link>
                              {item.address_2 && <> {" "} <Link to="#" className="tran3s">{item.address_2}</Link></>}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-pink mt-150 xl-mt-120 md-mt-80">
            <div className="row">
               <div className="col-xl-7 col-lg-6">
                  <div className="form-style-one">
                     <ContactForm />
                  </div>
               </div>
               <div className="col-xl-5 col-lg-6 d-flex order-lg-first">
                  <div className="contact-map-banner w-100">
                     <div className="gmap_canvas h-100 w-100">
                        <iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
