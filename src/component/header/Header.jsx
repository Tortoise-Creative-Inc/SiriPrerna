import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import pencil from "../../assets/header/pencil.svg";
import { CONTACT_US, ICONS, NAVLINKS } from "../../utility/constants";
import styles from "./Header.module.css";
import NavMobile from "./navMobile/NavMobile";
import { Link } from "react-router-dom";
import LogoRed from "../../utility/LogoRed";
import { motion } from "framer-motion";

export const Header = ({ ismobile }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.nav_bar}`);
    const ind = document.getElementById(`${styles.pencil}`);
    const handleIndicator = (el) => {
      if (ind?.style !== null) {
        ind.style.left = el.offsetLeft - 10 + "px";
        ind.style.width = el.offsetWidth + 20 + "px";
      }
    };
    items.forEach((element, index) => {
      element.addEventListener("pointermove", function (e) {
        handleIndicator(e.target);
      });
      return () => {
        element.removeEventListener("pointermove", function (e) {
          handleIndicator(e.target);
        });
      };
    });
  }, []);

  return (
    <div className={styles.headermob_cnt}>
      <div className={styles.hmbl}>
        <NavMobile />
        <div className={styles.hlogo}>
          <LogoRed className={styles.img} onClick={() => navigate("/")} />
          <motion.span
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            onClick={() => navigate("/")}
          >
            <p>Prerna</p>
            <p>Children's</p>
            <p>Home</p>
          </motion.span>
        </div>
      </div>
      <nav className={styles.div}>
        <ul className={styles.nav_bar}>{NAVLINKS.map((e) => Navoptions(e))}</ul>
        <img id={styles.pencil} src={pencil} alt="_img" draggable={false} />
      </nav>
      <div className={styles.hmbr}>
        <Link to="/donate">
          <motion.button
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.95 }}
          >
            DONATE
          </motion.button>
        </Link>
        {!ismobile && (
          <div className={styles.contact_links}>
            {CONTACT_US.map((e) => (
              <a key={e.id} className={styles.Link_logo} href={e.to}>
                {e.Icon}
              </a>
            ))}
            {ICONS.map((x, index) => (
              <a key={index} className={styles.Link_logo} href={x.to}>
                <img
                  className={styles.icons_img}
                  src={x.Icon}
                  alt={x.alt}
                  draggable={false}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Navoptions = (e) => {
  const isActive = useLocation();
  return (
    !e.ignore && (
      <li
        key={e.title}
        className={`${styles.navmenu} ${
          isActive.pathname.split("/")[1] === e.to.split("/")[1]
            ? styles.active
            : ""
        }`}
      >
        <NavLink to={e.to}>{e.title}</NavLink>
        {isActive.pathname.split("/")[1] === e.to.split("/")[1] && (
          <img src={pencil} alt="_img" draggable={false} />
        )}
      </li>
    )
  );
};
