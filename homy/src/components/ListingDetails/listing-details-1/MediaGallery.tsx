import { useState } from "react";
import Fancybox from "../../common/Fancybox";

const largeThumb: string[] = ["1", "2", "3"];

interface DataType {
  big_carousel: string[];
  small_carousel: string[];
}

const gallery_data: DataType = {
  big_carousel: [
    "/assets/images/listing/img_43.jpg",
    "/assets/images/listing/img_44.jpg",
    "/assets/images/listing/img_45.jpg",
    "/assets/images/listing/img_46.jpg"
  ],
  small_carousel: [
    "/assets/images/listing/img_43_s.jpg",
    "/assets/images/listing/img_44_s.jpg",
    "/assets/images/listing/img_45_s.jpg",
    "/assets/images/listing/img_46_s.jpg"
  ],
}

const { big_carousel, small_carousel } = gallery_data;

const MediaGallery = ({ style }: any) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % big_carousel.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + big_carousel.length) % big_carousel.length);
  };

  return (
    <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
      <div id="media_slider" className="carousel slide row">
        <div className="col-lg-10">
          <div className={` bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                Sell all 37 Photos
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: true,
                    },
                  }}
                >
                  {largeThumb.map((thumb: any, index: any) => (
                    <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                  ))}
                </Fancybox>
              </div>

              <div className="tab-content carousel-inner" id="myTabContent">
                {big_carousel.map((carousel, index) => (
                  <div key={index} className={`carousel-item tab-pane fade ${index === currentImageIndex ? 'show active' : ''}`} id={`item${index}`}>
                    <img src={carousel} alt="" className="w-100 border-20" />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" onClick={handleNext}>
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className={`nav nav-tabs carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
            {small_carousel.map((carousel, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)} type="button" className={`nav-link ${index === currentImageIndex ? 'active' : ''}`}>
                <img src={carousel} alt="" className="w-100 border-10" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaGallery
