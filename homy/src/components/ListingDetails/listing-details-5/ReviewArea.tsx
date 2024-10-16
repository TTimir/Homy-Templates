import NiceSelect from "../../../ui/NiceSelect";
import Review from "../../inner-pages/agency/agency-details/Review";

const ReviewArea = ({ isOpen, handleAccordionClick }: any) => {

    const selectHandler = () => { };
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                    type="button"
                    onClick={handleAccordionClick}>
                    Review about Glenridge
                </button>
            </h2>
            <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
                <div className="accordion-body">
                    <div className="review-panel-one">
                        <div className="position-relative z-1">
                            <div className="d-flex justify-content-sm-end">
                                <NiceSelect className="nice-select rounded-0"
                                    options={[
                                        { value: "01", text: "Newest" },
                                        { value: "02", text: "Best Seller" },
                                        { value: "03", text: "Best Match" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                            </div>
                            <Review />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewArea;
