interface DataType {
   id: number;
   page: string;
   icon?: string;
   text: string;
   item_bg_img?:string;
}[];

const category_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      icon: "/assets/images/icon/icon_15.svg",
      text: "Shopping Mall",
   },
   {
      id: 2,
      page: "home_3",
      icon: "/assets/images/icon/icon_16.svg",
      text: "Apartments",
   },
   {
      id: 3,
      page: "home_3",
      icon: "/assets/images/icon/icon_17.svg",
      text: "Villa",
   },
   {
      id: 4,
      page: "home_3",
      icon: "/assets/images/icon/icon_18.svg",
      text: "Industry",
   },
   {
      id: 5,
      page: "home_3",
      icon: "/assets/images/icon/icon_19.svg",
      text: "Office",
   },
   {
      id: 6,
      page: "home_3",
      icon: "/assets/images/icon/icon_20.svg",
      text: "Medical",
   },
   {
      id: 7,
      page: "home_3",
      icon: "/assets/images/icon/icon_21.svg",
      text: "House",
   },
   {
      id: 8,
      page: "home_3",
      icon: "/assets/images/icon/icon_22.svg",
      text: "Loft",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      item_bg_img:"category-4-item-1",
      text: "Apartments",
   },
   {
      id: 2,
      page: "home_4",
      item_bg_img:"category-4-item-2",
      text: "House",
   },
   {
      id: 3,
      page: "home_4",
      item_bg_img:"category-4-item-3",
      text: "Lofts",
   },
   {
      id: 4,
      page: "home_4",
      item_bg_img:"category-4-item-4",
      text: "Villa",
   },
]

export default category_data;