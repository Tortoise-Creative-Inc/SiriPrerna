import React from "react";
import styles from "./WhyUs1.module.css";
import One from "../../../assets/WhyUs/1.png";
import { PAGE1 } from "../Constants";
import PageTop from "../../../component/Whyus/PageTop/PageTop";

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
        className={styles.head}
      />
      <div className={styles.body}>
        {PAGE1.map((e) => (
          <div className={styles.item} key={e.id}>
            <div className={styles.item_head}>
              <img className={styles.img} src={e.img} alt="" />
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
