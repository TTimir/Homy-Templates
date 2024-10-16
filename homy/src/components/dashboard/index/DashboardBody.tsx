import RecentMessage from "./RecentMessage"
import DashboardChart from "./DashboardChart"
import DashboardHeaderTwo from "../../../layouts/headers/dashboard/DashboardHeaderTwo";
import NiceSelect from "../../../ui/NiceSelect";

interface DataType {
   id: number;
   icon: string;
   title: string;
   value: string;
   class_name?: string;
}

const dashboard_card_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/images/dashboard/icon/icon_12.svg",
      title: "All Properties",
      value: "1.7k+",
      class_name: "skew-none",
   },
   {
      id: 2,
      icon: "/assets/images/dashboard/icon/icon_13.svg",
      title: "Total Pending",
      value: "03",
   },
   {
      id: 3,
      icon: "/assets/images/dashboard/icon/icon_14.svg",
      title: "Total Views",
      value: "4.8k",
   },
   {
      id: 4,
      icon: "/assets/images/dashboard/icon/icon_15.svg",
      title: "Total Favourites",
      value: "07",
   },
]

const DashboardBody = () => {

   const selectHandler = () => { };

   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Dashboard" />

            <h2 className="main-title d-block d-lg-none">Dashboard</h2>
            <div className="bg-white border-20">
               <div className="row">
                  {dashboard_card_data.map((item) => (
                     <div key={item.id} className="col-lg-3 col-6">
                        <div className={`dash-card-one bg-white border-30 position-relative mb-15 ${item.class_name}`}>
                           <div className="d-sm-flex align-items-center justify-content-between">
                              <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1"><img src={item.icon} alt="" className="lazy-img" /></div>
                              <div className="order-sm-0">
                                 <span>{item.title}</span>
                                 <div className="value fw-500">{item.value}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="row gx-xxl-5 d-flex pt-15 lg-pt-10">
               <div className="col-xl-7 col-lg-6 d-flex flex-column">
                  <div className="user-activity-chart bg-white border-20 mt-30 h-100">
                     <div className="d-flex align-items-center justify-content-between plr">
                        <h5 className="dash-title-two">Property View</h5>
                        <div className="short-filter d-flex align-items-center">
                           <div className="fs-16 me-2">Short by:</div>
                           <NiceSelect className="nice-select fw-normal"
                              options={[
                                 { value: "1", text: "Weekly" },
                                 { value: "2", text: "Daily" },
                                 { value: "3", text: "Monthly" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name=""
                              placeholder="" />
                        </div>
                     </div>
                     <div className="plr mt-50">
                        <div className="chart-wrapper">
                           <DashboardChart />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-xl-5 col-lg-6 d-flex">
                  <div className="recent-job-tab bg-white border-20 mt-30 plr w-100">
                     <h5 className="dash-title-two">Recent Message</h5>
                     <RecentMessage />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DashboardBody
