interface DataType {
   id: number;
   icon: string;
   title: string;
}[];

const property_overview_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/images/icon/icon_62.svg",
      title: "Sqft . 3,720",
   },
   {
      id: 2,
      icon: "/assets/images/icon/icon_63.svg",
      title: "Bed . 03",
   },
   {
      id: 3,
      icon: "/assets/images/icon/icon_64.svg",
      title: "Bath . 2",
   },
   {
      id: 4,
      icon: "/assets/images/icon/icon_65.svg",
      title: "Kitchen . 01",
   },
   {
      id: 5,
      icon: "/assets/images/icon/icon_66.svg",
      title: "Type . Apartment",
   },
]

const PropertyOverview = () => {
   return (
      <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
         {property_overview_data.map((item) => (
            <li key={item.id}>
               <img src={item.icon} alt="" className="lazy-img icon" />
               <span className="fs-20 text-white">{item.title}</span>
            </li>
         ))}
      </ul>
   )
}

export default PropertyOverview
