import React from "react";
import v1 from "../../assets/engage/Vector (1).svg";
import s from "./CardsEngage.module.css";
import { motion } from "framer-motion";
import {
  CONTACT_US,
  ENGAGE_COORPORATES,
  ENGAGE_INDIVIDUALS,
} from "../../utility/constants";

const CardsEngage = ({ type }) => {
  return (
    <div className={s.grid}>
      {type === "individuals" &&
        ENGAGE_INDIVIDUALS.map((props) => (
          <Donate key={props.head} {...props} />
        ))}
      {type === "corporates" &&
        ENGAGE_COORPORATES.map((props) => (
          <Donate key={props.head} {...props} />
        ))}
    </div>
  );
};
function Donate({ head, desc, head2, rs, img, don, to }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, type: "ease", ease: "easeInOut" }}
      >
        <div className={s.donate}>
          <img className={s.mainimg} src={img} alt="_img" />
          <div className={s.desc_don}>
            <h6>{head}</h6>
            {head2 && <h6>{head2}</h6>}
            <p>{desc}</p>
            {rs && <p>{rs} </p>}
          </div>
        </div>
        {don ? (
          <a href={to} style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.03, type: "ease", ease: "easeInOut" }}
              className={s.d_btn}
              type="button"
            >
              Donate
              <img src={v1} alt="_img" />
            </motion.button>
          </a>
        ) : (
          <div className={s.l_btn}>
            {CONTACT_US.map((e) => (
              <a key={e.id} className={s.Link_logo} href={e.to}>
                {e.Icon}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}

export default CardsEngage;
