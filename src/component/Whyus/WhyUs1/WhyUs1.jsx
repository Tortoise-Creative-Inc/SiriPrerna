import React from "react";
import styles from "./WhyUs1.module.css";
import One from "../../../assets/whyUs/1.webp";
import PageTop from "../pageTop/PageTop";
import Bulb from "../../../assets/whyUs/Bulb.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { WHY_US_SECTION1 } from "../../../utility/constants";

const WhyUs1 = ({ isMOBILE }) => {
  return (
    <div className={styles.main}>
      <PageTop
        Icon={One}
        ISMobile={isMOBILE}
        Heading1="Prerna believes in shaping its kids"
        Heading2="to become self-reliant, aware and inspiring"
        Heading3="citizens."
        Heading_mob="Raising self-reliant Kids"
        Vector={Bulb}
        className={styles.head}
      />
      <div className={styles.body}>
        {WHY_US_SECTION1.map((e) => (
          <div className={styles.item} key={e.id}>
            <div className={styles.item_head}>
              <LazyLoadImage className={styles.img} src={e.img} alt="_img" />
            </div>
            <div className={styles.item_body}>
              <h3 className={styles.title}>{e.title}</h3>
              <p className={styles.desc}>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs1;
