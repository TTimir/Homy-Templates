interface DataType {
   id: number;
   page: string;
   thumb: string;
   category: string;
   title?: string;
   date?: string;
   desc?: string;
   tag?: string;
   fancybox?: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      page: "project_1",
      thumb: "/assets/images/project/img_01.jpg",
      category: "house flat"
   },
   {
      id: 2,
      page: "project_1",
      thumb: "/assets/images/project/img_02.jpg",
      category: "villa"
   },
   {
      id: 3,
      page: "project_1",
      thumb: "/assets/images/project/img_03.jpg",
      category: "apartments"
   },
   {
      id: 4,
      page: "project_1",
      thumb: "/assets/images/project/img_04.jpg",
      category: "villa"
   },
   {
      id: 5,
      page: "project_1",
      thumb: "/assets/images/project/img_05.jpg",
      category: "house"
   },
   {
      id: 6,
      page: "project_1",
      thumb: "/assets/images/project/img_06.jpg",
      category: "apartments flat"
   },
   {
      id: 7,
      page: "project_1",
      thumb: "/assets/images/project/img_07.jpg",
      category: "villa"
   },
   {
      id: 8,
      page: "project_1",
      thumb: "/assets/images/project/img_08.jpg",
      category: "apartments"
   },
   {
      id: 9,
      page: "project_1",
      thumb: "/assets/images/project/img_09.jpg",
      category: "house flat"
   },

   // project_2

   {
      id: 1,
      page: "project_2",
      thumb: "/assets/images/project/img_10.jpg",
      category: "house flat"
   },
   {
      id: 2,
      page: "project_2",
      thumb: "/assets/images/project/img_11.jpg",
      category: "villa"
   },
   {
      id: 3,
      page: "project_2",
      thumb: "/assets/images/project/img_12.jpg",
      category: "apartments"
   },
   {
      id: 4,
      page: "project_2",
      thumb: "/assets/images/project/img_13.jpg",
      category: "villa"
   },
   {
      id: 5,
      page: "project_2",
      thumb: "/assets/images/project/img_14.jpg",
      category: "house"
   },
   {
      id: 6,
      page: "project_2",
      thumb: "/assets/images/project/img_15.jpg",
      category: "apartments flat"
   },

   // project_3

   {
      id: 1,
      page: "project_3",
      thumb: "/assets/images/project/img_16.jpg",
      category: "house flat",
      title: "Blue Duplex Villa",
      date: "13 Sep, 23",
      tag: "VILLA",
      fancybox: "16",
   },
   {
      id: 2,
      page: "project_3",
      thumb: "/assets/images/project/img_17.jpg",
      category: "villa",
      title: "1320sft Modern Flat",
      date: "15 Sep, 23",
      tag: "FLAT",
      fancybox: "17",
   },
   {
      id: 3,
      page: "project_3",
      thumb: "/assets/images/project/img_18.jpg",
      category: "apartments",
      title: "Galaxy Sky Touch",
      date: "17 Sep, 23",
      tag: "APARTMENTS",
      fancybox: "18",
   },
   {
      id: 4,
      page: "project_3",
      thumb: "/assets/images/project/img_19.jpg",
      category: "villa",
      title: "Apartments Vintage City",
      date: "19 Sep, 23",
      tag: "HOUSE",
      fancybox: "19",
   },
   {
      id: 5,
      page: "project_3",
      thumb: "/assets/images/project/img_20.jpg",
      category: "house",
      title: "2-Stored House",
      date: "21 Sep, 23",
      tag: "FLAT",
      fancybox: "20",
   },
   {
      id: 6,
      page: "project_3",
      thumb: "/assets/images/project/img_21.jpg",
      category: "apartments flat",
      title: "Swimming Pool Villa",
      date: "23 Sep, 23",
      tag: "VILLA",
      fancybox: "21",
   },

   // project_4

   {
      id: 1,
      page: "project_4",
      thumb: "/assets/images/project/img_22.jpg",
      fancybox: "22",
      category: "house",
      title: "Apartments On Vintage City.",
      desc: "Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 2,
      page: "project_4",
      thumb: "/assets/images/project/img_23.jpg",
      fancybox: "23",
      category: "villa",
      title: "Galaxy Touch Sky Villa.",
      desc: "Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 3,
      page: "project_4",
      thumb: "/assets/images/project/img_24.jpg",
      category: "apartments",
      fancybox: "24",
      title: "2370sft Modern Apartments.",
      desc: "Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 4,
      page: "project_4",
      thumb: "/assets/images/project/img_25.jpg",
      category: "flat",
      fancybox: "25",
      title: "2 Store Tiny Duplex House.",
      desc: "Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 5,
      page: "project_4",
      thumb: "/assets/images/project/img_26.jpg",
      category: "house",
      fancybox: "26",
      title: "Swimming Pool Duplex Villa.",
      desc: "Your leading real estate advocate, transforming houses into dreams. Trust",
   },
]

export default project_data;