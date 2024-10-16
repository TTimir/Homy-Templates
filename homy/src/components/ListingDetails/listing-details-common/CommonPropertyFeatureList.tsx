import { useEffect, useState } from "react";
import property_feature_list from "../../../data/inner-data/PropertyFeatureListData";

interface DataType {
   id: number;
   title: string;
   feature_list: {
      title: string;
      count: string;
   }[];
   showAnswer: boolean;
}[];

const CommonPropertyFeatureList = () => {

   const filteredFaqData = property_feature_list;

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const initialFaqData: DataType[] = filteredFaqData.map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (index: number) => {
      setFaqData((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq, i) => ({
            ...faq,
            showAnswer: i === index ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <div className="accordion" id="accordionTwo">
         {faqData.map((item, index) => (
            <div key={item.id} className="accordion-item">
               <h2 className="accordion-header">
                  <button onClick={() => toggleAnswer(index)} className={`accordion-button collapsed`} type="button"
                     data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false"
                     aria-controls={`collapse${item.id}`}>
                     {item.title}
                  </button>
               </h2>
               {item.showAnswer && (
                  <div id={`collapse${item.id}`} className={`accordion-collapse collapse show`}
                     data-bs-parent="#accordionTwo">
                     <div className="accordion-body">
                        <div className="feature-list-two">
                           <ul className="style-none d-flex flex-wrap justify-content-between">
                              {item.feature_list.map((list, i) => (
                                 <li key={i}><span>{list.title} </span> <span className="fw-500 color-dark">{list.count}</span></li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         ))}
      </div>
   )
}

export default CommonPropertyFeatureList;
