import React, { useEffect, useState } from "react";
import Logo from "../../assets/footer/Logo_white.svg";
import styles from "./Footer.module.css";
import { ICONS, NAVLINKS } from "../../utility/Constants.js";
import Map from "../../assets/footer/map.svg";
import { Link } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import clsx from "clsx";
import Accordionbtn from "../accordionbtn/Accordionbtn";

const CONTACT = [
  {
    id: 1,
    title: "Phone No.",
    content: "+91 94419 22022",
    Icon: <LocalPhoneIcon id={styles.Phone} />,
    to: "tel:9441922022",
    delay: ".18",
  },
  {
    id: 2,
    title: "WhatsApp No.",
    content: "+91 94419 22022",
    Icon: <WhatsAppIcon id={styles.Whatsapp} />,
    to: "https://wa.me/9441922022",
    delay: ".20",
  },
  {
    id: 3,
    title: "Mail",
    content: "siri.nonprofit@gmail.com ",
    Icon: <MailOutlineIcon id={styles.Mail} />,
    delay: ".22",
    to: "mailto:siri.nonprofit@gmail.com",
  },
];
const Column = () => {
  return (
    <>
      <div className={styles.footer_col_1}>
        <h3 className={styles.footer_col_heading}>Address</h3>
        <img className={styles.img_m} src={Map} alt="" />
        <p className={styles.p}>
          Prerna Children's home, Gopi Gopal Deva Nilayam, Dwarakamayi Colony,
          Behind IDPL Colony, Bowenpally, Balanagar Mandal, Hyderabad City,
          Telangana State, India. 500037
        </p>
      </div>
      <div className={styles.footer_col_2}>
        <h3 className={styles.footer_col_heading}>Contact Us</h3>
        {CONTACT.map(
          (e) =>
            e.id !== 1 && (
              <li key={e.id} className={styles.li}>
                <a className={styles.Link} href={e.to}>
                  {e.Icon}
                  <p className={styles.list_items}>{e.content}</p>
                </a>
              </li>
            )
        )}
      </div>
      <div className={styles.copyright}>
        <CopyrightIcon id={styles.copy} />{" "}
        <pre className={styles.pre}>
          2019-2021 Prerna Children’s Home. All rights reserved.
        </pre>
      </div>
    </>
  );
};

const Column_tab = ({tab}) => {
  return (
    <div className={styles.col_mob}>
      <Accordionbtn
        className={styles.accord}
        Label="Address"
        Text={
          <p className={clsx(styles.p, { [styles.mob]: tab })}>
            {" "}
            Prerna Children's home, Gopi Gopal Deva Nilayam, Dwarakamayi Colony,
            Behind IDPL Colony, Bowenpally, Balanagar Mandal, Hyderabad City,
            Telangana State, India. 500037
          </p>
        }
        Img1={Map}
      />
      <Accordionbtn
        className={styles.accord}
        Label="Contact Us"
        Text={
          <p className={clsx(styles.p, { [styles.mob]: tab })}>
            {" "}
            +91 94419 22022
          </p>
        }
        Text2={
          <p className={clsx(styles.p, { [styles.mob]: tab })}>
            {" "}
            siri.nonprofit@gmail.com
          </p>
        }
        to="https://wa.me/9441922022"
        to2="mailto:siri.nonprofit@gmail.com"
        Icon1={<WhatsAppIcon id={styles.Whatsapp} />}
        Icon2={<MailOutlineIcon id={styles.Mail} />}
      />
    </div>
  );
};

const Footer = () => {
  const [tab, setTab] = useState(false);
  const Tablet = () => {
    if (window.innerWidth <= 1200) setTab(true);
    else if (window.innerWidth > 1200) setTab(false);
  };
  useEffect(() => {
    Tablet();
    window.addEventListener("resize", Tablet);
    return () => {
      window.removeEventListener("resize", Tablet);
    };
  }, [tab]);
  console.log(tab);

  return (
    <>
      <div className={clsx(styles.footer, { [styles.mob]: tab })}>
        <div className={clsx(styles.footer_col_info, { [styles.mob]: tab })}>
          <div className={styles.Logo}>
            <Link className={styles.Logolink} to="/Home">
              <img id={styles.Logo_img} src={Logo} alt="Logo" />{" "}
            </Link>
          </div>
          <div
            className={clsx(styles.footer_col_info_Main, { [styles.mob]: tab })}
          >
            <h2 className={clsx(styles.heading, { [styles.mob]: tab })}>
              Prerna Children’s Home
            </h2>
            <div className={clsx(styles.nav, { [styles.mob]: tab })}>
              <ul className={clsx(styles.ul, { [styles.mob]: tab })}>
                {NAVLINKS.map((e) => (
                  <li className={styles.li} key={e.title}>
                    <Link className={styles.Link} to={e.to} alt="">
                      <h4 className={clsx(styles.Title, { [styles.mob]: tab })}>
                        {e.title}
                      </h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={clsx(styles.logos, { [styles.mob]: tab })}>
              {ICONS.map((x, index) => (
                <Link key={index} className={styles.Link_logo} to={x.to}>
                  <img
                    className={clsx(styles.img, { [styles.mob]: tab })}
                    src={x.Icon}
                    alt={x.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {tab ? <Column_tab /> : <Column />}
      </div>
    </>
  );
};

export default Footer;
