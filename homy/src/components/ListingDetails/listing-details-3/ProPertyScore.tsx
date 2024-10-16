interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: JSX.Element;
}[];

const score_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/images/icon/icon_52.svg",
      title: "Transit Score",
      desc: (<><span className="color-dark">63</span>/100 (Moderate Distance Walkable)</>),
   },
   {
      id: 2,
      icon: "/assets/images/icon/icon_53.svg",
      title: "School Score",
      desc: (<><span className="color-dark">70</span>/100 (Short Distance Walkable)</>),
   },
   {
      id: 3,
      icon: "/assets/images/icon/icon_54.svg",
      title: "Medical Score",
      desc: (<><span className="color-dark">77</span>/100 (Short Distance Walkable)</>),
   },
   {
      id: 4,
      icon: "/assets/images/icon/icon_55.svg",
      title: "Shopping Mall Score",
      desc: (<><span className="color-dark">42</span>/100 (Long Distance Walkable)</>),
   },
];

const ProPertyScore = ({ isOpen, handleAccordionClick }: any) => {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button
               className={`accordion-button ${isOpen ? "" : "collapsed"}`}
               type="button"
               onClick={handleAccordionClick}>
               Walk Score
            </button>
         </h2>
         <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
            <div className="accordion-body">
               <div className="property-score">
                  <p className="fs-20 lh-lg pb-30">Risk management and compliance, when approached strategically, have the potential</p>
                  <div className="row">
                     {score_data.map((item) => (
                        <div key={item.id} className="col-md-6">
                           <div className="block d-flex align-items-center mb-50 sm-mb-30">
                              <img src={item.icon} alt="" className="lazy-img icon" />
                              <div className="text">
                                 <h6>{item.title}</h6>
                                 <p className="fs-16 m0">{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProPertyScore
