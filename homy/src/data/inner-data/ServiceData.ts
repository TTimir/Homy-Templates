interface DataType {
   id: number;
   page: string;
   icon: string;
   title: string;
   desc: string;
   btn: string;
}[]

const service_data: DataType[] = [
   {
      id: 1,
      page: "service_1",
      icon: "/assets/images/icon/icon_69.svg",
      title: "Buy a home",
      btn: "Buy Home",
      desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   },
   {
      id: 2,
      page: "service_1",
      icon: "/assets/images/icon/icon_70.svg",
      title: "Rent a Home",
      btn: "Rent Home",
      desc: "Discover a rental you'll love on homy, thanks to 35+ filters.",
   },
   {
      id: 3,
      page: "service_1",
      icon: "/assets/images/icon/icon_71.svg",
      title: "Sell Home",
      btn: "Sell Home",
      desc: "List, sell, thrive – with our top-notch real estate agency.",
   },
   {
      id: 4,
      page: "service_1",
      icon: "/assets/images/icon/icon_69.svg",
      title: "Mortgage",
      btn: "Buy Home",
      desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   },
   {
      id: 5,
      page: "service_1",
      icon: "/assets/images/icon/icon_70.svg",
      title: "Consulting",
      btn: "Rent Home",
      desc: "Discover a rental you'll love on homy, thanks to 35+ filters.",
   },
   {
      id: 6,
      page: "service_1",
      icon: "/assets/images/icon/icon_71.svg",
      title: "Property Managements",
      btn: "Sell Home",
      desc: "List, sell, thrive – with our top-notch real estate agency.",
   },

]

export default service_data;