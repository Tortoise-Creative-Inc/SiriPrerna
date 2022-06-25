import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./NavMobile.module.scss";
import { CONTACT_US, NAVLINKS } from "../../../utility/constants";
import LogoRed from "../../../utility/LogoRed";
const variantAnimate = {
  open: {
    opacity: 1,
    x: 0,
    display: "flex",
    transition: {
      ease: "easeInOut",
      delay: 0.1,
    },
  },
  closed: {
    opacity: 0,
    x: -50,

    transition: {
      ease: "easeInOut",
    },
    transitionEnd: {
      display: "none",
    },
  },
};
const Navoption = (e, isMobile, closeMobileMenu, Open) => {
  const isActive = useLocation();
  return (
    <motion.li
      initial={false}
      animate={Open ? `open` : `closed`}
      transition={{ delay: e.delay }}
      key={e.title}
      className={styles.li}
    >
      <NavLink
        className={`${styles.Link} ${
          isActive.pathname.split("/")[1] === e.to.split("/")[1]
            ? styles.active
            : ""
        }`}
        to={e.to}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <img
          className={styles.img}
          src={e.icon}
          alt={e.title}
          draggable={false}
        />
        <span className={styles.span}>{e.title}</span>
      </NavLink>
    </motion.li>
  );
};

const Navlinks = ({ isMobile, closeMobileMenu, Open }) => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={false}
        animate={Open ? `open` : `closed`}
        variants={variantAnimate}
        className={styles.HamMenu}
      >
        <ul className={styles.ul}>
          {NAVLINKS.map((e) => Navoption(e, isMobile, closeMobileMenu, Open))}
        </ul>
        <ul className={styles.ulContact}>
          {CONTACT_US.map((x, index) => (
            <motion.li
              initial={`closed`}
              animate={Open ? `open` : `closed`}
              transition={{ delay: x.delay }}
              className={styles.li}
              key={index}
            >
              <a className={styles.Link} href={x.href}>
                {x.Icon}
                <span className={styles.span}>{x.content}</span>
              </a>
            </motion.li>
          ))}
          <Link
            className={styles.logolink}
            to="/"
            onClick={() => isMobile && closeMobileMenu()}
          >
            <LogoRed
              className={styles.logo}
              onClick={() => navigate("/") && isMobile && closeMobileMenu()}
            />
            <motion.span
              initial={false}
              animate={Open ? `open` : `closed`}
              transition={{ delay: 0.35, duration:.35, type: "ease", ease: "easeInOut" }}
              whileTap={{scale: 0.95 }}
              className={styles.spanlogo}
            >
              Prerna Children’s Home
            </motion.span>
          </Link>
        </ul>
      </motion.div>
    </>
  );
};

export default Navlinks;
