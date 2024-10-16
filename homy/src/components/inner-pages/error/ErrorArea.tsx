import { Link } from "react-router-dom"

const ErrorArea = () => {
   return (
      <div className="error-section position-relative z-1 bg-pink">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 col-xl-6 col-lg-7 col-md-8 m-auto">
                  <div className="title-one text-center mb-75 lg-mb-20">
                     <h3><span>Oops! <img src="/assets/images/shape/title_shape_02.svg" alt="" className="lazy-img" /></span>It looks like you&apos;re lost.</h3>
                     <p className="fs-20 pb-45">The page you&apos;re looking for isn&apos;t available. Try to search again or use the go to</p>
                     <Link to="/" className="btn-five sm fw-normal text-uppercase">Back to home</Link>
                  </div>
               </div>
            </div>
         </div>
         <img src="/assets/images/assets/ils_08.svg" alt="" className="lazy-img w-100 position-absolute bottom-0 start-0 z-n1" />
      </div>
   )
}

export default ErrorArea
