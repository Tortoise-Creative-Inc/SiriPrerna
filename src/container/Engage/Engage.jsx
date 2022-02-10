import React, { useEffect, useState } from "react";
import s from "./Engage.module.scss";
import d1 from "../../assets/Engage/Vector.svg";
import clsx from "clsx";
import earth from "../../assets/Engage/illus.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Fade from 'react-reveal/Fade';
import { Link, Navigate, Outlet, useLocation} from "react-router-dom";


export const Engage = ({ ismobile}) => {
  const [individual, setIndividual] = useState(true);  
  const path = useLocation()
  
  function onIndividualClick() {
  if(path.pathname === "/engage/individuals")
  setIndividual(true);
  else if(path.pathname === "/engage/corporates")
    setIndividual(false);
    // Navigate('/individual');
  }
  useEffect(() => {
    onIndividualClick();
   }, [individual]);
  console.log(path.pathname);

  return (
    <div className={s.engage}>
      <div className={s.headertop}>
        <h1 className={s.heading}>Get Involved With Us !</h1>
        <div className={s.contact_container_mobile}>
          <Contact
            img={d1}
            details="+91 94419 22022"
            link="https://wa.me/919441922022"
          />
          <Contact
            Icon={MailOutlineIcon}
            details="siri.nonprofit@gmail.com"
            link="mailto:siri.nonprofit@gmail.com"
          />
        </div>

        <div className={s.engage__subheadings}>
          <Link to="/engage/individuals"
            onClick={()=>setIndividual(true)}
            className={
              individual
                ? clsx(s.subheading, s.active_subheading)
                : s.subheading
            }
          >
            Individuals
          </Link>
          
          <Link to="/engage/corporates"
            onClick={()=>setIndividual(false)}
            className={
              !individual
                ? clsx(s.subheading, s.active_subheading)
                : s.subheading
            }
          >
            Corporates
          </Link>
        </div>
      </div>
  
      <Outlet/>

      <div className={s.eng_contact}>
        <h2>Contact Us</h2>
        <div className={s.contact_container}>
          <Contact
            img={d1}
            details="+91 94419 22022"
            link="https://wa.me/919441922022"
          />
          <Contact
            Icon={MailOutlineIcon}
            details="siri.nonprofit@gmail.com"
            link="mailto:siri.nonprofit@gmail.com"
          />
        </div>
      </div>
      <div className={s.bottom_image}>
        <img src={earth} alt="" />
        <div className={s.bottom_text}>
          <h3 className={s.bottom_text1}>
            No matter the kind of contribution, <br />
            we are grateful!
          </h3>
        </div>
      </div>
    </div>
  );
};



function Contact({ img, details, link, Icon }) {
  return (
    <div className={s.contact_details}>
      <a href={link}>
        {img && <img src={img} alt="" />}
        {Icon && <Icon id={s.icon} />}
        <span className={s.span}>{details}</span>
      </a>
    </div>
  );
}
