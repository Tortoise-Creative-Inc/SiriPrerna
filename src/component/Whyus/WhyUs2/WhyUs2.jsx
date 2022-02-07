import React from "react";
import PageTop from "../../../component/Whyus/PageTop/PageTop";
import styles from "./WhyUs2.module.css";
import Two from "../../../assets/WhyUs/2.png";
import The_socially from "../../../assets/WhyUs/The_socially.png";
import hand from "../../../assets/WhyUs/hand.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          <LazyLoadImage id={styles.img} src={The_socially} alt="" />
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.title}>
            The Socially Challenged Children’s Act 2021
          </h3>
          <p className={styles.desc}>
            The founder of our organization, Sri Prasad Raju, who served for 35
            years as a district court judge, is committed to aid socially
            deprived children, especially orphans. This commitment has
            manifested into the Socially Challenged Children Act 2021. Shri
            Prasad Raju Garu is the brainchild behind this Act. He envisioned a
            safe and nurturing space for orphan children and thus put forward
            this Bill in <strong>The Telangana Assembly</strong> and worked tirelessly for its
            approval and implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs2;
