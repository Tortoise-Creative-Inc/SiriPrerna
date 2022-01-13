import person from "../../assets/home/person.png";
import calendar from "../../assets/home/calendar.svg";
import plant from "../../assets/home/plant.svg";
import group from "../../assets/home/group.svg";
import dem from "../../assets/home/a2_images/a2dem.png";
import dem2 from "../../assets/home/a2_images/dem2.png";
import dem3 from "../../assets/home/a2_images/dem3.png";
import dem4 from "../../assets/home/a2_images/dem4.png";
import p1 from "../../assets/home/a3_images/p1.png";
import p2 from "../../assets/home/a3_images/p2.png";
import p3 from "../../assets/home/a3_images/p3.png";
import p4 from "../../assets/home/a3_images/p4.png";
import a0p1 from "../../assets/home/a0_images/p1.png";
import a0p2 from "../../assets/home/a0_images/p2.png";
import a0p3 from "../../assets/home/a0_images/p3.png";
import a0p4 from "../../assets/home/a0_images/p4.png";

export const a1 = [
  {
    icon: person,
    no: "30",
    desc: "Kids under our shelter",
  },

  {
    icon: calendar,
    no: "2019",
    desc: "Established in June at Balanagar, Hyd, India",
  },
  {
    icon: plant,
    no: "100+",
    desc: "Plants planted by our kids",
  },
  {
    icon: group,
    no: "3640",
    desc: "Visitors so far",
  },
];

export const homepins = [
  {
    key: 1,
    kid: true,
    link: "/ourkids",
    kids: [
      {
        key: 1,
        name: "kidname yr old",
        img: a0p1,
      },
      {
        key: 2,
        name: "kidname yr old",
        img: a0p2,
      },
      {
        key: 3,
        name: "kidname yr old", 
        img: a0p3,
      },
      {
        key: 4,
        name: "kidname yr old",
        img: a0p4,
        class: "desktop"
      },
    ],
  },
  {
    key: 2,
    pins: true,
    pin: [
      {
        key: 1,
        title: "Why is Prerna different ?",
        tp: "",
        img: dem,
        desc: "Prerna aims to provide children with the best care and facilities they deserve.",
        link: "/whyus",
      },
      {
        key: 2,
        class:"desktop",
        img: dem4,
        desc: "Prerna aims to provide children with the best care and facilities they deserve.",
        link: "/whyus",
        desklink:"desklink"
      },
    ],
  },

  {
    key: 3,
    founder: true,
    founders: [
      {
        key: 1,
        name: "A.Prasad Raju",
        position: "Chairman and Managing Trustee M.A. Dist Judge (Retd)",
        img: p1,
      },
      {
        key: 2,
        name: "Prof. B. Indira",
        position: "Co-Chairman and Doctor  H.O.D. at Kurnool Medical College",
        img: p2,
      },
      {
        key: 3,
        name: "A.Vamsee Krishna",
        position:
          "Co-Manager  IIT Kharagpur alumnus CEO - HappilyEver Matrimony",
        img: p3,
      },
      {
        key: 4,
        name: "Prashanth Akki",
        position: "Co-Manager BITS-PILANI alumnus",
        img: p4,
      },
    ],
  },

  {
    key: 4,
    review: true,
    reviews: [
      {
        key: 1,
        content:
          "This home is uniquely positioned as a place for orphan boys to be nurturned with global thoughts.",
        author:
          "- Mr. Jayaramulu L, http://jayaramulu.com Diplomat UN vissionary",
      },
      {
        key: 2,
        content: "lorem ipsum dolor sit amet, consectetur adip",
        author: "temp",
      },
    ],
  },
  {
    key: 5,
    pins: true,
    pin: [
      {
        key: 1,
        title: "Get Involved With Us!",
        tp: "Individuals and families ",
        img: dem2,
        ddesc: "Individuals and families can help the children by spending time with them, tutoring them and donating goods and money.",
        link: "/engage",
      },
      {
        key: 2,
        title: "",
        tp: "Corporates",
        img: dem3,
        ddesc: "Companies can help children by enrolling in CSR programs, matching funds, donating IT equipment, etc.",
        desklink:"desklink",
        link: "/engage",
      },
    ],
  },
];
