import React from "react";
import styles from "./Footer.module.css";
import { Link, useNavigate } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Accordionbtn from "../accordionbtn/Accordionbtn";
import clsx from "clsx";
import { CONTACT_US, ICONS, NAVLINKS } from "../../utility/constants.js";
import Map from "../../assets/footer/map.svg";
import Logo from "../../assets/footer/Logo_white.svg";
import LogoWhite from "../../utility/LogoWhite";

const Column = ({ istablet, ismobile, date }) => {
  return (
    <>
      <div
        className={clsx(styles.footer_col_1, {
          [styles.mob]: istablet || ismobile,
        })}
      >
        <h3
          className={clsx(styles.footer_col_heading, {
            [styles.mob]: istablet || ismobile,
          })}
        >
          Address
        </h3>
        <a
          className={clsx(styles.Link_address, {
            [styles.mob]: istablet || ismobile,
          })}
          href="https://goo.gl/maps/FPcHhJ94Sa55HCpt6"
        >
          <img
            className={clsx(styles.img_loc, {
              [styles.mob]: istablet || ismobile,
            })}
            src={Map}
            alt="_img"
          />
          <p className={clsx(styles.p, { [styles.mob]: istablet || ismobile })}>
            Prerna Children's home,
            <br /> Gopi Gopal Deva Nilayam,
            <br /> Dwarakamayi Colony,
            <br />
            Behind IDPL Colony, Bowenpally,
            <br /> Balanagar Mandal,
            <br /> Hyderabad City, Telangana State, <br />
            India. 500037
          </p>
        </a>
        {ismobile ? (
          <></>
        ) : (
          <div className={styles.copyright}>
            <div className={styles.h}>
              <CopyrightIcon id={styles.copy} />
              <pre className={styles.pre}>
                2019-{date.getFullYear()} Prerna Children’s Home. All rights
                reserved.
              </pre>
            </div>
          </div>
        )}
      </div>
      <div
        className={clsx(styles.footer_col_2, {
          [styles.mob]: istablet || ismobile,
        })}
      >
        <h3
          className={clsx(styles.footer_col_heading, {
            [styles.mob]: istablet || ismobile,
          })}
        >
          Contact Us
        </h3>
        {CONTACT_US.map((e) => (
          <li
            key={e.id}
            className={clsx(styles.contact_li, {
              [styles.mob]: istablet || ismobile,
            })}
          >
            <a
              className={clsx(styles.Links, {
                [styles.mob]: istablet || ismobile,
              })}
              href={e.to}
              // target="_blank"
            >
              {e.Icon}
              <p
                className={clsx(styles.list_items, {
                  [styles.mob]: istablet || ismobile,
                })}
              >
                {e.content}
              </p>
            </a>
          </li>
        ))}
      </div>
    </>
  );
};

const ColumnTab = ({ istablet, ismobile, date }) => {
  return (
    <div className={styles.col_mob}>
      <Accordionbtn
        index={0}
        className={styles.accord}
        Label="Address"
        Text={
          <p className={clsx(styles.p, { [styles.mob]: istablet || ismobile })}>
            Prerna Children's home, Gopi Gopal Deva Nilayam, Dwarakamayi Colony,
            Behind IDPL Colony, Bowenpally, Balanagar Mandal, Hyderabad City,
            Telangana State, India. 500037
          </p>
        }
        Img1={Map}
        to="https://goo.gl/maps/FPcHhJ94Sa55HCpt6"
      />
      <Accordionbtn
        index={1}
        className={styles.accord}
        Label="Contact Us"
        Text={
          <p className={clsx(styles.p, { [styles.mob]: istablet || ismobile })}>
            {CONTACT_US[0].content}
          </p>
        }
        Text2={
          <p className={clsx(styles.p, { [styles.mob]: istablet || ismobile })}>
            {CONTACT_US[1].content}
          </p>
        }
        Text3={
          <p className={clsx(styles.p, { [styles.mob]: istablet || ismobile })}>
            {CONTACT_US[2].content}
          </p>
        }
        to1={CONTACT_US[0].to}
        to2={CONTACT_US[1].to}
        to3={CONTACT_US[2].to}
        Icon1={CONTACT_US[0].Icon}
        Icon2={CONTACT_US[1].Icon}
        Icon3={CONTACT_US[2].Icon}
      />
      <div className={`${styles.copyright} ${istablet && styles.tab}`}>
        <div className={styles.h}>
          <CopyrightIcon id={styles.copy} />
          <pre className={styles.pre}>
            2019-{date.getFullYear()} Prerna Children’s Home. All rights
            reserved.
          </pre>
        </div>
      </div>
    </div>
  );
};
const Footer = ({ istablet, ismobile }) => {
  var date = new Date();
  const navigate=useNavigate();
  return (
    <>
      <div
        className={clsx(styles.footer, { [styles.mob]: istablet || ismobile })}
      >
        <div
          className={clsx(styles.footer_col_info, {
            [styles.mob]: istablet || ismobile,
          })}
        >
          <div className={styles.Logo}>
            <LogoWhite
              className={styles.Logo_img}
              onClick={() => navigate("/")}
            />
          </div>
          <div
            className={clsx(styles.footer_col_info_Main, {
              [styles.mob]: istablet || ismobile,
            })}
          >
            <h2
              className={clsx(styles.heading, {
                [styles.mob]: istablet || ismobile,
              })}
            >
              <Link to="/" className={styles.linkheading}>
                Prerna Children’s Home
              </Link>
            </h2>
            <div
              className={clsx(styles.nav, {
                [styles.mob]: istablet || ismobile,
              })}
            >
              <ul
                className={clsx(styles.ul, {
                  [styles.mob]: istablet || ismobile,
                })}
              >
                {NAVLINKS.map((e) => (
                  <li className={styles.li} key={e.title}>
                    {e.title !== "Donate" ? (
                      <Link className={styles.Link} to={e.to} alt="_img">
                        <h4
                          className={clsx(styles.Title, {
                            [styles.mob]: istablet || ismobile,
                          })}
                        >
                          {e.title}
                        </h4>
                      </Link>
                    ) : (
                      <a className={styles.Link} href={e.to} alt="_img">
                        <h4
                          className={clsx(styles.Title, {
                            [styles.mob]: istablet || ismobile,
                          })}
                        >
                          {e.title}
                        </h4>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={clsx(styles.logos, {
                [styles.mob]: istablet || ismobile,
              })}
            >
              {ICONS.map((x, index) => (
                <a
                  key={index}
                  className={styles.Link_logo}
                  target="_blank"
                  href={x.to}
                >
                  <img
                    className={clsx(styles.img, {
                      [styles.mob]: istablet || ismobile,
                    })}
                    src={x.Icon}
                    alt={x.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        {istablet ? (
          <ColumnTab istablet={istablet} ismobile={ismobile} date={date} />
        ) : (
          <Column istablet={istablet} ismobile={ismobile} date={date} />
        )}

        {ismobile && (
          <div className={styles.copyright_m}>
            <div className={styles.one}>
              <CopyrightIcon id={styles.copy} />
              <p className={styles.prem}>2019-{date.getFullYear()}</p>
            </div>
            <p className={styles.prem}> Prerna Children’s Home.</p>
            <p className={styles.prem}> All rights reserved.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
