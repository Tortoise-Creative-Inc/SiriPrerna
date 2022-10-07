import React from "react";
import s from "./Ourkids.module.css";
import bg1 from "../../assets/ourKids/backgrounds/bg1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import { KIDSDB } from "../../utility/constants";

const Ourkids = () => {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${bg1})` }}>
      <ScrollToTop smooth className="scroll" />
      <div className={s.heading}>
        <h1>Let's meet our kids</h1>
        <p>Our kids are in the 8-14 year age range. </p>
      </div>
      <div className={s.list}>
        {KIDSDB.map((kid) => (
          <Kids
            key={kid.key}
            name={kid.name}
            age={kid.age}
            about={kid.about}
            img={kid.img}
            bg={kid.bg}
          />
        ))}
      </div>
    </div>
  );
};

const Kids = ({ name, age, about, img, bg }) => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  const style1 = {
    backgroundColor: "rgba(255, 255, 255, 0.48)",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:true}}
      transition={{ ease: "easeInOut", duration: 1.05, type: "ease" }}
      className={s.kidprofile}
    >
      <LazyLoadImage src={img} alt="_img" draggable={false} />
      <div style={style}>
        <span className={s.kid_desc} style={bg && style1}>
          <h6>
            {name}, {age}
          </h6>
          <p>{about}</p>
        </span>
      </div>
    </motion.div>
  );
};
export default Ourkids;
