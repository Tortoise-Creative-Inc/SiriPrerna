import React from "react";
import { INDIVIDUALS, CORPORATES } from "../../container/Engage/constant";
import v1 from "../../assets/Engage/Vector (1).svg";
import s from "../../container/Engage/Engage.module.scss";
import Fade from "react-reveal/Fade";
import {  ICONS } from "../../utility/Constants";
import styles from "../../component/footer/Footer.module.css";
import whatsapp from "../../assets/header/WhatsApp.svg";
import mail from "../../assets/header/email.svg";
import phone from "../../assets/header/phone.svg";

export const Cards = ({ type }) => {
  return (
    <div className={s.grid}>
      {type === "individuals" &&
        INDIVIDUALS.map((props) => <Donate key={props.head} {...props} />)}
      {type === "corporates" &&
        CORPORATES.map((props) => <Donate key={props.head} {...props} />)}
    </div>
  );
};
function Donate({ head, desc, head2, rs, img, don, to }) {
  const CONTACT = [
    {
      id: 1,
      title: "Mail",
      content: "siri.nonprofit@gmail.com ",
      Icon: mail,
      delay: ".22",
      to: "mailto:siri.nonprofit@gmail.com",
    },
    {
      id: 2,
      title: "Phone No.",
      content: "+91 94419 22022",
      Icon: phone,
      to: "tel:9441922022",
      delay: ".18",
    },
    {
      id: 3,
      title: "WhatsApp No.",
      content: "+91 94419 22022",
      Icon: whatsapp,
      to: "https://wa.me/919441922022",
      delay: ".20",
    },
  ];
  return (
    <Fade>
      <div>
        <div className={s.donate}>
          <img className={s.mainimg} src={img} alt="" />
          <div className={s.desc_don}>
            <h6>{head}</h6>
            {head2 && <h6>{head2}</h6>}
            <p className="">{desc}</p>
            {rs && <p>{rs} </p>}
          </div>
        </div>
        {don ? (
          <a href={to} style={{ textDecoration: "none" }}>
            <button className={s.d_btn} type="button">
              Donate
              <img src={v1} alt="" />
            </button>
          </a>
        ):(
          <div className={s.l_btn}>
          {CONTACT.map((e) => (
              <a key={e.id} className={styles.Link_logo} href={e.to}>
                <img
                  className={styles.img}
                  src={e.Icon}
                  alt={e.title}
                />
              </a>
            ))}
          </div>
        )}
       
      </div>
    </Fade>
  );
}
