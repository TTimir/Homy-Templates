import Slider from "react-slick";

interface DataType {
   id: number;
   blockquote: JSX.Element;
   name: string;
   country: string;
   img: string;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      blockquote: (<>Quick solutions coupled with extraordinary <span>performance</span> a recommendation that&apos;s unequivocal.</>),
      name: "Musa Delimuza",
      country: "Miami, USA",
      img: "/assets/images/media/img_01.jpg",
   },
   {
      id: 2,
      blockquote: (<>Found our dream home. Great <span>Business</span> with them. To thank you for excellent service. Will take again sure.</>),
      name: "Alina Cruse",
      country: "Miami, USA",
      img: "/assets/images/media/img_02.jpg",
   },
   {
      id: 3,
      blockquote: (<>Efficient and friendly service, guided us <span>perfectly</span> I am satisfied with our new home.Give a try. Thank you!</>),
      name: "Musa Delimuza",
      country: "Rashed Ka.",
      img: "/assets/images/media/img_03.jpg",
   },
]

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

const Feedback = () => {
   return (
      <div className="feedback-section-seven mt-170 xl-mt-120 md-mt-80">
         <div className="container container-large">
            <div className="position-relative z-1">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="title-one mt-30 md-mb-50 pe-xxl-4">
                        <div className="upper-title">CLIENT Feedback</div>
                        <h3>Rely on Clients, Not Just Our Claims.</h3>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="content-wrapper position-relative z-1 ms-xxl-3">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle mb-35"><img src="/assets/images/icon/icon_38.svg" alt="" className="lazy-img" /></div>
                        <Slider {...setting} className="feedback-slider-one">
                           {feedback_data.map((item) => (
                              <div key={item.id} className="item">
                                 <div className="feedback-block-five">
                                    <blockquote>{item.blockquote}</blockquote>
                                    <div className="d-flex align-items-center justify-content-end ct-info">
                                       <img src={item.img} alt="" className="rounded-circle avatar" />
                                       <div className="ps-3">
                                          <h6 className="fs-20 m0">{item.name}</h6>
                                          <span className="fs-16 opacity-50">{item.country}</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </Slider>
                     </div>
                  </div>
               </div>
               <div className="rating-box">
                  <img src="/assets/images/shape/shape_62.svg" alt="" className="lazy-img" />
                  <div className="rate fw-500">9.3 <br /><span>Rating</span></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Feedback
