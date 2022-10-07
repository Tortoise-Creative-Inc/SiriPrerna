import clsx from "clsx";
import React from "react";
import styles from "./PageTop.module.css";

const PageTop = ({ Icon, Heading1,Heading2,Heading3,Heading_mob, className, Vector,ISMobile }) => {
  return (
    <div className={clsx(className, styles.body)}>
      <img src={Icon} alt="" id={styles.img} />
      <div className={styles.Heading_body}>
        {ISMobile? <h2 className={styles.Heading}>{Heading_mob} </h2>:(
          <>
        <h2 className={styles.Heading}>{Heading1}</h2>
        <h2 className={styles.Heading}>{Heading2}</h2>
        <h2 className={styles.Heading}>{Heading3}</h2>
        </>
        )}
      </div>
      {Vector && <img id={styles.vector} src={Vector} alt="" />}
    </div>
  );
};
export default PageTop;
