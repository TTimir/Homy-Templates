
import Slider from "react-slick";
import BrandOne from "../../common/brand/BrandOne";

interface DataType {
   id: number;
   desc: JSX.Element;
   title: string;
   country: string;
   thumb: string;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      desc: (<>&quot;Excellent service, made my dream home real. <span>highly recommended</span> real estate agency!&quot;</>),
      title: "Musa Delimuza",
      country: "Milan, Italy",
      thumb: "/assets/images/media/img_22.jpg",
   },
   {
      id: 2,
      desc: (<>&quot;Excellent service, made my dream home real. <span>highly recommended</span> real estate agency!&quot;</>),
      title: "Zubayer Hasan",
      country: "Milan, Italy",
      thumb: "/assets/images/media/img_22.jpg",
   },
   {
      id: 3,
      desc: (<>&quot;Excellent service, made my dream home real. <span>highly recommended</span> real estate agency!&quot;</>),
      title: "Rashed Ka",
      country: "Milan, Italy",
      thumb: "/assets/images/media/img_22.jpg",
   },
]

const FeedbackTwo = () => {

   const setting = {
      dots: true,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 300000
   }

   return (
      <div className="feedback-section-three mt-170 xl-mt-150 lg-mt-100">
         <div className="container">
            <div className="bg-line position-relative z-1 pt-200 xl-pt-150 lg-pt-80 pb-180 xl-pb-150">
               <div className="row gx-lg-0">
                  <div className="col-lg-5 col-md-8">
                     <div className="title-one">
                        <div className="upper-title color">CLIENT Feedback</div>
                        <h2 className="font-garamond text-white fs-lg">Don’t Trust us, Trust Our <span className="color">Client.</span></h2>
                     </div>
                  </div>
                  <div className="col-lg-6 ms-auto">
                     <div className="feedback-bg-wrapper md-mt-60 position-relative z-1">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                           <img src="/assets/images/icon/icon_14.svg" alt="" className="lazy-img" />
                        </div>
                        <Slider {...setting} className="feedback-slider-one">
                           {feedback_data.map((item) => (
                              <div key={item.id} className="item">
                                 <div className="feedback-block-three">
                                    <blockquote>{item.desc}</blockquote>
                                    <div className="d-flex justify-content-end align-items-center">
                                       <div className="text-end pe-3 pe-lg-5">
                                          <div className="name fs-22 text-white mb-5">{item.title}</div>
                                          <div className="fs-18 text-white opacity-75">{item.country}</div>
                                       </div>
                                       <img src={item.thumb} alt="" className="avatar" />
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </Slider>

                        <div className="rating-box">
                           <img src="/assets/images/shape/shape_25.svg" alt="" className="lazy-img" />
                           <div className="rate fw-500">9.3 <br /><span>Rating</span></div>
                        </div>
                     </div>
                  </div>
               </div>

               <img src="/assets/images/shape/shape_26.svg" alt="" className="lazy-img shapes shape_01" />
               <img src="/assets/images/shape/shape_27.svg" alt="" className="lazy-img shapes shape_02" />
            </div>
         </div>
         <BrandOne />
      </div>
   )
}

export default FeedbackTwo
