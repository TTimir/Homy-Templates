interface DataType {
   id: number;
   page: string;
   thumb: string;
   title: string;
   desc: string;
}

const agent_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: "/assets/images/agent/img_01.jpg",
      title: "Mark Filo",
      desc: "CEO & Founder",
   },
   {
      id: 2,
      page: "home_1",
      thumb: "/assets/images/agent/img_02.jpg",
      title: "Chris Matial",
      desc: "Retailer",
   },
   {
      id: 3,
      page: "home_1",
      thumb: "/assets/images/agent/img_03.jpg",
      title: "Jubayer Al Hasan",
      desc: "Marketing Expert",
   },
   {
      id: 4,
      page: "home_1",
      thumb: "/assets/images/agent/img_04.jpg",
      title: "Jannatul Ferdaus",
      desc: "Broker",
   },
   {
      id: 5,
      page: "home_1",
      thumb: "/assets/images/agent/img_05.jpg",
      title: "Chris Matial",
      desc: "Broker",
   },
]

export default agent_data;