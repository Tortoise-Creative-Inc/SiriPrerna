import React from "react";
import ScrollToTop from "react-scroll-to-top";
import WhyUs1 from "../../component/whyUs/whyUs1/WhyUs1";
import WhyUs2 from "../../component/whyUs/whyUs2/WhyUs2";
import WhyUs3 from "../../component/whyUs/whyUs3/WhyUs3";
import styles from "./WhyUs.module.css";

const WhyUs = ({ ismobile }) => {
  return (
    <div className={styles.whyus_cnt}>
      <ScrollToTop smooth className="scroll" />
      <h1 id={styles.Heading}>Why is Prerna Different?</h1>
      <WhyUs1 isMOBILE={ismobile} />
      <WhyUs2 isMOBILE={ismobile} />
      <WhyUs3 isMOBILE={ismobile} />
    </div>
  );
};

export default WhyUs;
