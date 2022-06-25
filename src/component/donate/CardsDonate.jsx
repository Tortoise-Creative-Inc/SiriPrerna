import React from "react";
import v1 from "../../assets/donate/Vector (1).svg";
import s from "./CardsDonate.module.css";
import { motion } from "framer-motion";
import {
  CONTACT_US,
  DONATE_CORPORATES,
  DONATE_INDIVIDUALS,
  ICONS,
} from "../../utility/constants";

const Card = ({ type }) => {
  return (
    <div className={s.grid}>
      {type === "individuals" &&
        DONATE_INDIVIDUALS.map((props) => (
          <Donate key={props.head} {...props} />
        ))}
      {type === "corporates" &&
        DONATE_CORPORATES.map((props) => (
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
          <img className={s.mainimg} src={img} alt="_img" draggable={false} />
          <div className={s.desc_don}>
            <h6>{head}</h6>
            {head2 && <h6>{head2}</h6>}
            <p className="">{desc}</p>
            {rs && <p>{rs} </p>}
          </div>
        </div>
        {don ? (
          <a href={to} className={s.link}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.03, type: "ease", ease: "easeInOut" }}
              className={s.d_btn}
              type="button"
            >
              Donate
              <img src={v1} alt="_img" draggable={false} />
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
export default Card;
