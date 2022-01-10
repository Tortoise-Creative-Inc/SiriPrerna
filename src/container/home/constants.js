import person from "../../assets/home/person.png";
import calendar from "../../assets/home/calendar.svg";
import plant from "../../assets/home/plant.svg";
import group from "../../assets/home/group.svg";
import dem from "../../assets/home/a2_images/a2dem.png";
import dem2 from "../../assets/home/a2_images/dem2.png";
import dem3 from "../../assets/home/a2_images/dem3.png";
import p1 from "../../assets/home/a3_images/p1.png";
import p2 from "../../assets/home/a3_images/p2.png";
import p3 from "../../assets/home/a3_images/p3.png";
import p4 from "../../assets/home/a3_images/p4.png";

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
    pins: true,
    title: "Meet Our Kids",
    tp: "",
    img: dem,
    desc: "",
    link: "t",
  },
  {
    key: 2,
    pins: true,
    title: "Why is Prerna different ?",
    tp: "",
    img: dem,
    desc: "Prerna aims to provide children with the best care and facilities they deserve.",
    link: "g",
  },
  {
    key: 3,
    founder: true,
    founders: [
      {
        key: 1,
        name: "A.Prasad Raju",
        position:
          "Chairman and Managing Trustee M.A. Dist Judge (Retd)",
        img: p1,
      },
      {
        key: 2,
        name: "Prof. B. Indira",
        position:
          "Co-Chairman and Doctor  H.O.D. at Kurnool Medical College",
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
    pins: true,
    title: "Get Involved With Us!",
    tp: "Individuals and families ",
    img: dem2,
    desc: "",
    link: "h",
  },
  {
    key: 5,
    pins: true,
    title: "",
    tp: "Corporates",
    img: dem3,
    desc: "",
    link: "hg",
  },
];
