
interface DataType {
   id: number;
   title: string;
   features: {
      sqft: number;
      bed: number;
      bath: number;
   };
   thumb: string;
}[];

const floor_plan_data: DataType[] = [
   {
      id: 1,
      title: "1st Floor",
      features: { sqft: 1370, bed: 3, bath: 2 },
      thumb: "/assets/images/listing/floor_3.jpg",
   },
   {
      id: 2,
      title: "2nd Floor",
      features: { sqft: 1145, bed: 2, bath: 2 },
      thumb: "/assets/images/listing/floor_3.jpg",
   },
   {
      id: 3,
      title: "3rd Floor",
      features: { sqft: 1245, bed: 2, bath: 3 },
      thumb: "/assets/images/listing/floor_3.jpg",
   },
]

const PropertyFloorPlans = () => {

   return (
      <>
         {floor_plan_data.map((item) => (
            <div key={item.id} className="accordion-item">
               <h2 className="accordion-header">
                  <button className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`} type="button"
                     data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true"
                     aria-controls={`collapse${item.id}`}>
                     <div className="d-flex justify-content-between w-100">
                        <span className="fw-500 color-dark">1st Floor</span>
                        <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                           <li>
                              <img src="/assets/images/icon/icon_56.svg" alt="" className="lazy-img icon" />
                              <span><span className="fw-500">{item.features.sqft}</span> sqft</span>
                           </li>
                           <li>
                              <img src="/assets/images/icon/icon_48.svg" alt="" className="lazy-img icon" />
                              <span><span className="fw-500">0{item.features.bed}</span> bed</span>
                           </li>
                           <li>
                              <img src="/assets/images/icon/icon_57.svg" alt="" className="lazy-img icon" />
                              <span><span className="fw-500">0{item.features.bath}</span> bath</span>
                           </li>
                        </ul>
                     </div>
                  </button>
               </h2>
               <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`}
                  data-bs-parent="#accordionTwo">
                  <div className="accordion-body">
                     <img src={item.thumb} alt="" className="w-100 border-10" />
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}

export default PropertyFloorPlans
