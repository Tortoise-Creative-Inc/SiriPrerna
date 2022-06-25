import React, { useState, useEffect } from "react";
import styles from "./Accordion.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";

const Accordionbtn = (props) => {
  const [active, setActive] = useState(false);
  useEffect(() =>{
    var acc = document.getElementsByClassName(styles.body)[props.index];
    if (!acc) return;
    if(active===false) acc.style.height = 0 ;
    else acc.style.height = acc.scrollHeight + "px";
  },[active])
  return (
    <div className={clsx(styles.main, { [styles.active]: active })}>
      <button
        type="button"
        onClick={() => setActive(!active)}
        className={clsx(styles.accordion, props.className, {
          [styles.active]: active
        })}
      >
        <p className={styles.p}>{props.Label}</p>{" "}
        <KeyboardArrowDownIcon
          className={clsx(styles.down, { [styles.active]: active })}
        />
      </button>
      <div className={clsx(styles.body, { [styles.active]: active })}>
        <a className={styles.link} href={props.to1}>
          {props.Img1 ? (
            <img className={styles.img} src={props.Img1} alt="_img" />
          ) : (
            props.Icon1
          )}
          {props.Text}
        </a>
        {props.Text2 && (
          <a className={styles.link} href={props.to2}>
            {props.Img ? (
              <img className={styles.img} src={props.Img2} alt="_img" />
            ) : (
              props.Icon2
            )}
            {props.Text2}
          </a>
        )}
        {props.Text3 && (
          <a className={styles.link} href={props.to3}>
            {props.Img ? (
              <img className={styles.img} src={props.Img3} alt="_img" />
            ) : (
              props.Icon3
            )}
            {props.Text3}
          </a>
        )}
      </div>
    </div>
  );
};

export default Accordionbtn;
