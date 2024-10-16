import { Link } from "react-router-dom";
import Fancybox from "../../common/Fancybox";

const largeThumb: string[] = ["4", "5", "6"];

interface DataType {
   id: number;
   img: string;
   title: string;
   date: string;
   total_rating: string;
   rating: string[];
   desc: JSX.Element;
   img_slider?: string[]
}[]

const review_data: DataType[] = [
   {
      id: 1,
      img: "/assets/images/media/img_01.jpg",
      title: "Zubayer Al Hasan",
      date: "17 Aug, 23",
      total_rating: "(4.7 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</>),
   },
   {
      id: 2,
      img: "/assets/images/media/img_03.jpg",
      title: "Rashed Kabir",
      date: "13 Aug, 23",
      total_rating: "(4.9 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      img_slider: ["/assets/images/listing/img_48.jpg",
         "/assets/images/listing/img_49.jpg",
         "/assets/images/listing/img_50.jpg"],
      desc: (<>Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</>),
   },
   {
      id: 3,
      img: "/assets/images/media/img_02.jpg",
      title: "17 Aug, 23",
      date: "17 Aug, 23",
      total_rating: "(4.7 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>Lorem ipsum dolor sit amet consectetur. Amet amet id cursus dignissim. Eget vitae amet tempus sit mattis. Semper integer condimentum nunc augue aliquet quam a tincidunt.</>),
   },
   {
      id: 4,
      img: "/assets/images/media/img_01.jpg",
      title: "Zubayer Al Hasan",
      date: "17 Aug, 23",
      total_rating: "(4.7 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</>),
   },
]
const UserReview = () => {

   return (
      <>
         {review_data.map((item) => (
            <div key={item.id} className="review">
               <img src={item.img} alt="" className="rounded-circle avatar" />
               <div className="text">
                  <div className="d-sm-flex justify-content-between">
                     <div>
                        <h6 className="name">{item.title}</h6>
                        <div className="time fs-16">{item.date}</div>
                     </div>
                     <ul className="rating style-none d-flex xs-mt-10">
                        <li><span className="fst-italic me-2">{item.total_rating}</span> </li>
                        {item.rating.map((rating, i) => (
                           <li key={i}><i className={`fa-sharp fa-solid fa-${rating}`}></i></li>
                        ))}
                     </ul>
                  </div>
                  <p className="fs-20 mt-20 mb-30">{item.desc}</p>
                  {item.img_slider && <ul className="style-none d-flex flex-wrap review-gallery pb-30">
                     {item.img_slider?.map((img, index) => (
                        <li key={index}>
                           <a className="d-block"><img src={img} alt="" /></a>
                        </li>
                     ))}
                     <li>
                        <div className="position-relative more-img">
                           <img src="/assets/images/listing/img_50.jpg" alt="" />
                           <span>13+</span>
                           <Fancybox
                              options={{
                                 Carousel: {
                                    infinite: true,
                                 },
                              }}
                           >
                              {largeThumb.map((thumb: any, index: any) => (
                                 <a key={index} className="d-block" data-fancybox="img1" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                              ))}
                           </Fancybox>
                        </div>
                     </li>
                  </ul>}
                  <div className="d-flex review-help-btn">
                     <Link to="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i>
                        <span>Helpful</span></Link>
                     <Link to="#" className="me-5"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i>
                        <span>Flag</span></Link>
                     <Link to="#"><i className="fa-sharp fa-regular fa-reply"></i> <span>Reply</span></Link>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}

export default UserReview
