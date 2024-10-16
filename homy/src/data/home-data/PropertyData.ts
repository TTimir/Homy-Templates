interface DataType {
   id: number;
   page: string;
   tag: string;
   tag_bg?: string;
   thumb?: string;
   carousel_thumb: {
      id?: string;
      img: string;
      active?: string;
   }[];
   title: string;
   address: string;
   property_info: {
      icon: string;
      feature: string;
      total_feature: number;
   }[];
   price: number;
   price_text?: string;
   carousel?: string;
}[];

const property_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: "/assets/images/listing/img_01.jpg", active: "active" }, { img: "/assets/images/listing/img_02.jpg" }, { img: "/assets/images/listing/img_03.jpg" }],
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1370 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o3 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 3280,
      price_text: "m",
      carousel: "1",
   },
   {
      id: 2,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: "/assets/images/listing/img_02.jpg", active: "active" }, { img: "/assets/images/listing/img_03.jpg" }, { img: "/assets/images/listing/img_01.jpg" }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1270 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o2 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 28100,
      carousel: "2",
   },
   {
      id: 3,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: "/assets/images/listing/img_03.jpg", active: "active" }, { img: "/assets/images/listing/img_02.jpg" }, { img: "/assets/images/listing/img_01.jpg" }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1270 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o2 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 42500,
      carousel: "3",
   },
   {
      id: 4,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: "/assets/images/listing/img_04.jpg", active: "active" }, { img: "/assets/images/listing/img_05.jpg" }, { img: "/assets/images/listing/img_06.jpg" }],
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1370 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o3 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 3280,
      price_text: "m",
      carousel: "4",
   },
   {
      id: 5,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: "/assets/images/listing/img_05.jpg", active: "active" }, { img: "/assets/images/listing/img_04.jpg" }, { img: "/assets/images/listing/img_06.jpg" }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1270 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o2 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 28100,
      carousel: "5",
   },
   {
      id: 6,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: "/assets/images/listing/img_06.jpg", active: "active" }, { img: "/assets/images/listing/img_05.jpg" }, { img: "/assets/images/listing/img_04.jpg" }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1270 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o2 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 42500,
      price_text: "m",
      carousel: "6",
   },

   // home two

   {
      id: 1,
      page: "home_2",
      tag: "FOR RENT",
      carousel_thumb: [{ img: "/assets/images/listing/img_07.jpg", active: "active" }, { img: "/assets/images/listing/img_08.jpg" }, { img: "/assets/images/listing/img_09.jpg" }],
      title: "Blueberry villa.",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1370 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o3 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 34900.00,
      carousel: "1",
   },
   {
      id: 2,
      page: "home_2",
      tag: "FOR SELL",
      carousel_thumb: [{ img: "/assets/images/listing/img_08.jpg", active: "active" }, { img: "/assets/images/listing/img_07.jpg" }, { img: "/assets/images/listing/img_08.jpg" }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1270 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o2 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 28100.00,
      carousel: "2",
   },
   {
      id: 3,
      page: "home_2",
      tag: "FOR SELL",
      carousel_thumb: [{ img: "/assets/images/listing/img_09.jpg", active: "active" }, { img: "/assets/images/listing/img_08.jpg" }, { img: "/assets/images/listing/img_07.jpg" }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1270 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o2 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 42500.00,
      carousel: "3",
   },

   // home_3_property_2

   {
      id: 1,
      page: "home_3_property_2",
      tag: "FOR RENT",
      thumb: "/assets/images/listing/img_13.jpg",
      carousel_thumb: [{ id: "1", img: "/assets/images/listing/img_large_01.jpg" }, { id: "2", img: "/assets/images/listing/img_large_02.jpg" }, { id: "3", img: "/assets/images/listing/img_large_03.jpg" }],
      title: "Blueberry villa.",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1780 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o3 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o2 },],
      price: 34900,
      carousel: "03",
   },
   {
      id: 2,
      page: "home_3_property_2",
      tag: "FOR SELL",
      thumb: "/assets/images/listing/img_14.jpg",
      carousel_thumb: [{ id: "4", img: "/assets/images/listing/img_large_04.jpg" }, { id: "5", img: "/assets/images/listing/img_large_05.jpg" }, { id: "6", img: "/assets/images/listing/img_large_06.jpg" }],
      title: "White House villa",
      address: "California link road, ca, usa",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 2340 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o4 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o3 },],
      price: 28100,
      carousel: "03",
   },
   {
      id: 3,
      page: "home_3_property_2",
      tag: "FOR SELL",
      thumb: "/assets/images/listing/img_15.jpg",
      carousel_thumb: [{ id: "1", img: "/assets/images/listing/img_large_01.jpg" }, { id: "5", img: "/assets/images/listing/img_large_05.jpg" }, { id: "3", img: "/assets/images/listing/img_large_03.jpg" }, { id: "2", img: "/assets/images/listing/img_large_02.jpg" }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 1857 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o3 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o1 },],
      price: 42500,
      carousel: "04",
   },
   {
      id: 4,
      page: "home_3_property_2",
      tag: "FOR SELL",
      thumb: "/assets/images/listing/img_16.jpg",
      carousel_thumb: [{ id: "4", img: "/assets/images/listing/img_large_04.jpg" }, { id: "6", img: "/assets/images/listing/img_large_06.jpg" }, { id: "3", img: "/assets/images/listing/img_large_03.jpg" }, { id: "2", img: "/assets/images/listing/img_large_02.jpg" }],
      title: "South Sun House",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 2450 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o4 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o3 },],
      price: 55500,
      carousel: "04",
   },
   {
      id: 5,
      page: "home_3_property_2",
      tag: "FOR SELL",
      thumb: "/assets/images/listing/img_14.jpg",
      carousel_thumb: [{ id: "4", img: "/assets/images/listing/img_large_04.jpg" }, { id: "5", img: "/assets/images/listing/img_large_05.jpg" }, { id: "6", img: "/assets/images/listing/img_large_06.jpg" }],
      title: "White House villa",
      address: "California link road, ca, usa",
      property_info: [{ icon: "/assets/images/icon/icon_04.svg", feature: "sqft", total_feature: 2340 }, { icon: "/assets/images/icon/icon_05.svg", feature: "bed", total_feature: 0o4 }, { icon: "/assets/images/icon/icon_06.svg", feature: "bath", total_feature: 0o3 },],
      price: 28100,
      carousel: "03",
   },

   // home_5
]

export default property_data;