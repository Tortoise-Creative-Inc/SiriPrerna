import React, { useEffect, useState } from "react";
import s from "./Donate.module.scss";
import clsx from "clsx";
import Earth from "../../assets/donate/illus.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CONTACT_US } from "../../utility/constants";
import { motion } from "framer-motion";

function Contact({ details, link, Icon }) {
  return (
    <div className={s.contact_details}>
      <a href={link}>
        {Icon}
        <span className={s.span}>{details}</span>
      </a>
    </div>
  );
}
const Donate = ({ ismobile }) => {
  const [individual, setIndividual] = useState(true);
  const path = useLocation();

  function onIndividualClick() {
    if (path.pathname === "/donate/individuals") setIndividual(true);
    else if (path.pathname === "/donate/corporates") setIndividual(false);
  }
  useEffect(() => {
    onIndividualClick();
  }, [individual]);
  
  return (
    <div className={s.container}>
      <div className={s.headertop}>
        <h1 className={s.heading}>Donate</h1>
        {ismobile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, type: "ease", ease: "easeInOut" }}
            viewport={{ once: true }}
            className={s.contact_container_mobile}
          >
            {CONTACT_US.map(
              ({ id, content, Icon, to }) =>
                id > 1 && <Contact details={content} Icon={Icon} link={to} key={id}/>
            )}
          </motion.div>
        )}
        <nav className={s.nav_bar}>
          <Link
            to="/donate/individuals"
            onClick={() => setIndividual(true)}
            className={individual ? clsx(s.subheading, s.active) : s.subheading}
          >
            Individuals
          </Link>
          <Link
            to="/donate/corporates"
            onClick={() => setIndividual(false)}
            className={
              !individual ? clsx(s.subheading, s.active) : s.subheading
            }
          >
            Corporates
          </Link>
        </nav>
      </div>
      <Outlet />
      {!ismobile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, type: "ease", ease: "easeInOut" }}
          viewport={{ once: true }}
          className={s.contact_us}
        >
          <h3>Contact Us</h3>
          <div className={s.contact_container}>
            {CONTACT_US.map(
              ({ id, content, Icon, to }) =>
                id > 1 && <Contact details={content} Icon={Icon} link={to} key={id}/>
            )}
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.65,
          type: "ease",
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className={s.bottom}
      >
        <img src={Earth} alt="_img" draggable={false} />
        <p>
          No matter the kind of contribution, <br />
          we are grateful!
        </p>
      </motion.div>
    </div>
  );
};
export default Donate;
