interface DataType {
   id: number;
   icon: string;
   title: string;
}[];

const property_overview_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/images/icon/icon_47.svg",
      title: "Sqft . 3,720",
   },
   {
      id: 2,
      icon: "/assets/images/icon/icon_48.svg",
      title: "Bed . 03",
   },
   {
      id: 3,
      icon: "/assets/images/icon/icon_49.svg",
      title: "Bath . 2",
   },
   {
      id: 4,
      icon: "/assets/images/icon/icon_50.svg",
      title: "Kitchen . 01",
   },
   {
      id: 5,
      icon: "/assets/images/icon/icon_51.svg",
      title: "Type . Apartment",
   },
]

const CommonPropertyOverview = () => {
   return (
      <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
         {property_overview_data.map((item) => (
            <li key={item.id}>
               <img src={item.icon} alt="" className="lazy-img icon" />
               <span className="fs-20 color-dark">{item.title}</span>
            </li>
         ))}
      </ul>
   )
}

export default CommonPropertyOverview
