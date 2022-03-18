import React from "react";
import { INDIVIDUALS, CORPORATES } from "../../container/Engage/constant";
import v1 from "../../assets/Engage/Vector (1).svg";
import s from "../../container/Engage/Engage.module.scss";
import Fade from "react-reveal/Fade";
import {  ICONS } from "../../utility/Constants";
import styles from "../../component/footer/Footer.module.css";

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
          {ICONS.map((x, index) => (
              <a key={index} className={styles.Link_logo} href={x.to}>
                <img
                  style={{filter:"invert(1)"}}
                  className={styles.img}
                  src={x.Icon}
                  alt={x.alt}
                />
              </a>
            ))}
          </div>
        )}
       
      </div>
    </Fade>
  );
}
