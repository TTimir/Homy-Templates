import { useState, useEffect } from "react";
import CommonBanner from "../listing-details-common/CommonBanner";
import MediaGallery from "./MediaGallery";
import PropertyOverview from "./PropertyOverview";
import VideoTour from "./VideoTour";
import FloorPlan from "./FloorPlan";
import NearbyList from "./NearbyList";
import SimilarProperty from "./SimilarProperty";
import ProPertyScore from "../listing-details-3/ProPertyScore";
import MortgageCalculator from "./MortgageCalculator";
import Location from "./Location";
import ReviewArea from "./ReviewArea";
import ReviewFormArea from "./ReviewFormArea";
import Sidebar from "../listing-details-1/Sidebar";
import property_feature_list from "../../../data/inner-data/PropertyFeatureListData";

const ammenities_data: string[] = [
  "A/C & Heating", "Garages", "Garden", "Disabled Access", "Swimming Pool", "Parking", "Wifi", "Pet Friendly", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"
];

const ListingDetailsFiveArea = () => {
  const [openSections, setOpenSections] = useState<number[]>([1]); // Initialize with the first section open

  const handleAccordionClick = (index: number) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter((item) => item !== index)
        : [...prevOpenSections, index]
    );
  };

  useEffect(() => {
    // Ensure the first accordion item is always open
    if (!openSections.includes(1)) {
      setOpenSections([1, ...openSections]);
    }
  }, [openSections]);

  return (
    <div className="listing-details-one theme-details-one mt-130 lg-mt-100 pb-150 xl-pb-120">
      <MediaGallery />
      <div className="container">
        <CommonBanner style_3={true} />
        <div className="property-feature-list position-relative z-2 mt-65 mb-75">
          <div className="dark-bg ps-3 ps-md-5 pe-3 pt-30 pb-30">
            <PropertyOverview />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8">
            <div className="accordion-style-two full-accordion">
              <div className="accordion" id="accordionTwo">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${openSections.includes(1) ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => handleAccordionClick(1)}
                    >
                      Overview
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${openSections.includes(1) ? "show" : ""}`}
                  >
                    <div className="accordion-body">
                      <p className="fs-20 lh-lg m0">
                        Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations &amp; reputation. They can actually generate value and create opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${openSections.includes(2) ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => handleAccordionClick(2)}
                    >
                      Property Features
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${openSections.includes(2) ? "show" : ""}`}
                  >
                    <div className="accordion-body">
                      <p className="fs-20 lh-lg">
                        Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
                      </p>
                      <h5 className="pt-30 pb-25">Property Details</h5>
                      {property_feature_list.slice(0, 1).map((item) => (
                        <div key={item.id} className="feature-list-two">
                          <ul className="style-none d-flex flex-wrap justify-content-between">
                            {item.feature_list.map((list, i) => (
                              <li key={i}>
                                <span>{list.title} </span> <span className="fw-500 color-dark">{list.count}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${openSections.includes(3) ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => handleAccordionClick(3)}
                    >
                      Amenities
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${openSections.includes(3) ? "show" : ""}`}
                  >
                    <div className="accordion-body">
                      <p className="fs-20 lh-lg pb-25">
                        Risk management & compliance, when approached strategically, have the potential
                      </p>
                      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
                        {ammenities_data.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <VideoTour
                  isOpen={openSections.includes(4)}
                  handleAccordionClick={() => handleAccordionClick(4)}
                />
                {/* Repeat the same pattern for the other components */}
                <FloorPlan
                  isOpen={openSections.includes(5)}
                  handleAccordionClick={() => handleAccordionClick(5)}
                />
                <NearbyList
                  isOpen={openSections.includes(6)}
                  handleAccordionClick={() => handleAccordionClick(6)}
                />
                <SimilarProperty
                  isOpen={openSections.includes(7)}
                  handleAccordionClick={() => handleAccordionClick(7)}
                />
                <ProPertyScore
                  isOpen={openSections.includes(8)}
                  handleAccordionClick={() => handleAccordionClick(8)}
                />
                <MortgageCalculator
                  isOpen={openSections.includes(9)}
                  handleAccordionClick={() => handleAccordionClick(9)}
                />
                <Location
                  isOpen={openSections.includes(10)}
                  handleAccordionClick={() => handleAccordionClick(10)}
                />
                <ReviewArea
                  isOpen={openSections.includes(11)}
                  handleAccordionClick={() => handleAccordionClick(11)}
                />
                <ReviewFormArea
                  isOpen={openSections.includes(12)}
                  handleAccordionClick={() => handleAccordionClick(12)}
                />
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsFiveArea;
