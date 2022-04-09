import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/header/Logo.svg";
import pencil from "../../assets/header/pencil.svg";
import whatsapp from "../../assets/header/WhatsApp.svg";
import mail from "../../assets/header/email.svg";
import phone from "../../assets/header/phone.svg";
import Home from "../../assets/header/icons/Home.svg";
import Engage from "../../assets/header/icons/Engage.svg";
import Kids from "../../assets/header/icons/Kids.svg";
import Why from "../../assets/header/icons/Why.svg";
import Donate from "../../assets/header/icons/Donate.svg";
import {  ICONS } from "../../utility/Constants";
import styles from "../../component/footer/Footer.module.css";
import "./header.css";
import NavMobile from "./NavMobile/NavMobile";
import {Link} from "react-router-dom"


export const Header = ({ ismobile }) => {
  const Navigate = useNavigate();

  
const CONTACT = [
  {
    id: 1,
    title: "Phone No.",
    content: "+91 94419 22022",
    Icon: phone,
    to: "tel:9441922022",
    delay: ".18",
  },
  {
    id: 2,
    title: "WhatsApp No.",
    content: "+91 94419 22022",
    Icon: whatsapp,
    to: "https://wa.me/919441922022",
    delay: ".20",
  },
  {
    id: 3,
    title: "Mail",
    content: "siri.nonprofit@gmail.com ",
    Icon: mail,
    delay: ".22",
    to: "mailto:siri.nonprofit@gmail.com",
  },
];

  const nav = [
    {
      title: "Home",
      to: "/",
      delay: ".10",
      icon: Home,
    },
    {
      title: "Why us",
      to: "/whyus",
      delay: ".12",
      icon: Why,
    },
    {
      title: "Our Kids",
      to: "/ourkids",
      delay: ".14",
      icon: Kids,
    },
    {
      title: "Engage",
      to: "/engage",
      delay: ".16",
      icon: Engage,
    },
    {
      title: "Donate",
      to: "/donate",
      delay: ".18",
      ignore: true,
      icon: Donate,
    },
  ];
  return (
    <div className="headermob_cnt">
      <div className="hmbl">
        <NavMobile items={nav} />
        <div className="hlogo" onClick={() => Navigate("/")}>
          <img src={Logo} alt="" />
          <span>
            <p>Prerna</p>
            <p>Children's</p>
            <p>Home</p>
          </span>
        </div>
      </div>
      <div className="hm">
        <ul>{nav.map((e) => Navoptions(e))}</ul>
      </div>
      <div className="hmbr">
        <Link to="/donate">
          {" "}
          <button>DONATE</button>
        </Link>
        {!ismobile && (
            <div className="hlinks">

          {CONTACT.map((e) => (
              <a key={e.id} className={styles.Link_logo} href={e.to}>
                <img
                  className="hlimg"
                  src={e.Icon}
                  alt={e.title}
                />
              </a>
            ))}
            <span> </span>
          {ICONS.map((x, index) => (
              <a key={index} className={styles.Link_logo} href={x.to}>
                <img
                  style={{filter:"invert(1)"}}
                  className="hlimg"
                  src={x.Icon}
                  alt={x.alt}
                />
              </a>
            ))}
          </div>

        )}
      </div>
    </div>
  );
};

const Navoptions = (e) => {
  const isActive = useLocation();
  return (
    <div  key={e.title} className="nav_links">
   {!e.ignore && <li>
      <NavLink to={e.to}>{e.title}</NavLink>
      {isActive.pathname.split('/')[1] === e.to.split('/')[1] && <img src={pencil} alt="" />}
    </li>}
    </div>
  );
};
