interface DataType {
   id: number;
   page: string;
   item_bg?: string;
   img?: string;
   icon?: string;
   title: string;
   desc?: string;
   tag?: string;
   btn?: string;
   class_name?: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      page: "home_1_feature_1",
      icon: "/assets/images/icon/icon_01.svg",
      title: "Buy a home",
      btn: "Find Home",
      desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   },
   {
      id: 2,
      page: "home_1_feature_1",
      icon: "/assets/images/icon/icon_02.svg",
      title: "RENT A HOME",
      btn: "Rent Home",
      desc: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
   },
   {
      id: 3,
      page: "home_1_feature_1",
      icon: "/assets/images/icon/icon_03.svg",
      title: "SELL PROPERTY",
      btn: "Sell Property",
      desc: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
   },

   // home_1_feature_2

   {
      id: 1,
      page: "home_1_feature_2",
      item_bg: "card-1",
      title: "Kelowna",
      desc: "1,230 Properties",
   },
   {
      id: 2,
      page: "home_1_feature_2",
      item_bg: "card-2",
      title: "California",
      desc: "1190 Properties",
   },
   {
      id: 3,
      page: "home_1_feature_2",
      item_bg: "card-3",
      title: "New York",
      desc: "1710 Properties",
   },
   {
      id: 4,
      page: "home_1_feature_2",
      item_bg: "card-5",
      title: "Miami",
      desc: "670 Properties",
   },
   {
      id: 5,
      page: "home_1_feature_2",
      item_bg: "card-5",
      title: "Dhaka",
      desc: "1670 Properties",
   },

   // home_1_feature_3

   {
      id: 1,
      page: "home_1_feature_3",
      icon: "/assets/images/icon/icon_07.svg",
      title: "Create Account",
      desc: "It’s very easy to open an account and start your journey.",
   },
   {
      id: 2,
      page: "home_1_feature_3",
      class_name: "arrow position-relative",
      icon: "/assets/images/icon/icon_08.svg",
      title: "Find Home",
      desc: "Complete your profile with all the info to get attention of client.",
   },
   {
      id: 3,
      page: "home_1_feature_3",
      icon: "/assets/images/icon/icon_09.svg",
      title: "Quick Process",
      desc: "Apply & get your preferable jobs with all the requirements and get it.",
   },

   // home_two_feature_1

   {
      id: 1,
      page: "home_2_feature_1",
      item_bg: "location-card-1",
      title: "Kelowna",
   },
   {
      id: 2,
      page: "home_2_feature_1",
      item_bg: "location-card-2",
      title: "West Kelowna",
   },
   {
      id: 3,
      page: "home_2_feature_1",
      item_bg: "location-card-3",
      title: "Lake Country",
   },
   {
      id: 4,
      page: "home_2_feature_1",
      item_bg: "location-card-4",
      title: "Vernon",
   },
   {
      id: 5,
      page: "home_2_feature_1",
      item_bg: "location-card-5",
      title: "Peachland",
   },
   {
      id: 6,
      page: "home_2_feature_1",
      item_bg: "location-card-6",
      title: "Penticton",
   },

   // home_two_feature_2

   {
      id: 1,
      page: "home_two_feature_2",
      img: "/assets/images/media/img_19.jpg",
      title: "Explore & buy Home",
      tag: "BUY HOME",
   },
   {
      id: 2,
      page: "home_two_feature_2",
      img: "/assets/images/media/img_20.jpg",
      title: "List & Sell quickly",
      tag: "Sell Now",
   },
   {
      id: 3,
      page: "home_two_feature_2",
      img: "/assets/images/media/img_21.jpg",
      title: "Discover & get Rental",
      tag: "RENT NOW",
   },

   // home_two_feature_3

   {
      id: 1,
      page: "home_two_feature_3",
      icon: "/assets/images/icon/icon_11.svg",
      title: "Property Insurance",
      desc: "Elit esse cillum dolo fugiat nulla tur nos ullamo.",
   },
   {
      id: 2,
      page: "home_two_feature_3",
      icon: "/assets/images/icon/icon_12.svg",
      title: "Easy Payments",
      desc: "quis nostrud exerct ullamo sucirity finibus ne derived.",
   },
   {
      id: 3,
      page: "home_two_feature_3",
      icon: "/assets/images/icon/icon_13.svg",
      title: "Quick Process",
      desc: "Duis aute irure dolor reprehe de Cicero's voluptat velit.",
   },

   // home_3_feature_1

   {
      id: 1,
      page: "home_3_feature_1",
      icon: "/assets/images/icon/icon_23.svg",
      title: "Buy a home",
      btn: "Find Home",
      desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   },
   {
      id: 2,
      page: "home_3_feature_1",
      icon: "/assets/images/icon/icon_24.svg",
      title: "Buy a home",
      btn: "Rent Home",
      desc: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
   },
   {
      id: 3,
      page: "home_3_feature_1",
      icon: "/assets/images/icon/icon_25.svg",
      title: "Buy a home",
      btn: "Sell Property",
      desc: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
   },


   // home_three_feature_2

   {
      id: 1,
      page: "home_three_feature_2",
      icon: "/assets/images/icon/icon_26.svg",
      title: "Property Insurance",
      desc: "Elit esse cillum dolo fugiat nulla tur nos ullamo.",
   },
   {
      id: 2,
      page: "home_three_feature_2",
      icon: "/assets/images/icon/icon_27.svg",
      title: "Easy Payments",
      desc: "quis nostrud exerct ullamo sucirity finibus ne derived.",
   },
   {
      id: 3,
      page: "home_three_feature_2",
      icon: "/assets/images/icon/icon_28.svg",
      title: "Quick Process",
      desc: "Duis aute irure dolor reprehe de Cicero's voluptat velit.",
   },

   // home_4_feature_1

   {
      id: 1,
      page: "home_4_feature_1",
      icon: "/assets/images/icon/icon_35.svg",
      title: "Buy a home",
      btn: "Find Home",
      desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   },
   {
      id: 2,
      page: "home_4_feature_1",
      icon: "/assets/images/icon/icon_36.svg",
      title: "Rent a home",
      btn: "Rent Home",
      desc: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
   },
   {
      id: 3,
      page: "home_4_feature_1",
      icon: "/assets/images/icon/icon_37.svg",
      title: "Sell a home",
      btn: "Sell Property",
      desc: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
   },

   // home_5_feature_1

   {
      id: 1,
      page: "home_5_feature_1",
      item_bg: "home-5-feature-item-1",
      title: "California",
      desc: "1,230 Listing",
   },
   {
      id: 2,
      page: "home_5_feature_1",
      item_bg: "home-5-feature-item-2",
      title: "Miami",
      desc: "1,140 Listing",
   },
   {
      id: 3,
      page: "home_5_feature_1",
      item_bg: "home-5-feature-item-3",
      title: "New York",
      desc: "1,740 Listing",
   },
   {
      id: 4,
      page: "home_5_feature_1",
      item_bg: "home-5-feature-item-4",
      title: "Washington DC",
      desc: "720 Listing",
   },

   // home_6_feature_1

   {
      id: 1,
      page: "home_6_feature_1",
      icon: "/assets/images/icon/icon_40.svg",
      title: "Property Insurance",
      desc: "Elit esse cillum dol fug nulla tur nos ullamo.",
   },
   {
      id: 2,
      page: "home_6_feature_1",
      icon: "/assets/images/icon/icon_41.svg",
      title: "Easy Payments",
      desc: "quis nostrud exerct ulla security finibus ne derived.",
   },
   {
      id: 3,
      page: "home_6_feature_1",
      icon: "/assets/images/icon/icon_42.svg",
      title: "Quick Process",
      desc: "Duis aute irure do reprehe de Cicero's voluptat velit.",
   },
]

export default feature_data;