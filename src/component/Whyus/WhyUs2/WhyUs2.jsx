import React from "react";
import PageTop from "../pageTop/PageTop";
import styles from "./WhyUs2.module.css";
import Two from "../../../assets/whyUs/2.webp";
import hand from "../../../assets/whyUs/hand.svg";
import { WHY_US_SECTION2_DESCRIPTION, WHY_US_SECTION2_IMG, WHY_US_SECTION2_TITLE } from "../../../utility/constants";

const WhyUs2 = ({ isMOBILE }) => {
  return (
    <div className={styles.main}>
      <PageTop
        Icon={Two}
        ISMobile={isMOBILE}
        Heading1="Prerna works to ensure equal"
        Heading2="opportunites for its children in the outside"
        Heading3="world."
        Heading_mob="Impact outside campus"
        Vector={hand}
        className={styles.head}
      />
      <div className={styles.body}>
        <div className={styles.top}>
          <img id={styles.img} src={WHY_US_SECTION2_IMG} alt="_img" />
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.title}>
            {WHY_US_SECTION2_TITLE}
          </h3>
          {WHY_US_SECTION2_DESCRIPTION}
        </div>
      </div>
    </div>
  );
};

export default WhyUs2;
