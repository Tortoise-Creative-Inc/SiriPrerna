import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import s from "../../container/home/home.module.css";


export const Collage = ({
    ismobile,
    mobsetting,
    kids,
    founder,
    title,
    desc,
    to,
    db,
  }) => {
    const dfault = "1fr 1fr 1fr 1fr";
    function setting() {
      if (ismobile) {
        if (mobsetting) {
          return mobsetting;
        } else {
          return dfault;
        }
      } else {
        return dfault;
      }
    }
  
    return (
      <div className={s.collage_cnt}>
        {ismobile && (
          <div className={s.clg_mob_header}>
            <h2>{title}</h2>
          </div>
        )}
        <div className={s.collage} style={{ gridTemplateColumns: setting() }}>
          {db.map((e) => (
            (e.ignore && ismobile) || (<div key={e.key}>
                <div>
                  <LazyLoadImage src={e.img} alt="" />
                  <div id={s.overlay}>
                    {!ismobile && kids && (
                      <p id={s.kid}>
                        {e.name}, {e.age}
                      </p>
                    )}
                    {founder && (
                      <div id={s.founder}>
                        <h5>{e.name}</h5>
                        <span>
                          <p>{e.h1}</p>
                          <p>{e.h2}</p>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
            </div>
              )
          ))}
        </div>
        {ismobile && !founder && (
          <div className={s.clg_mob_footer}>
            <Link to="/ourkids">Know more</Link>
          </div>
        )}
        {!ismobile && (
          <div className={s.deskview} style={{ bottom: founder && "30%" ,padding: founder && "0 min(8vw ,54px)"}}>
            <h2>{title}</h2>
            {desc && (
              <p>
                Ajay, Balu, Appu, and 27 more are <br />
                happily living in our care.
              </p>
            )}
            {!founder && <Link to={to}>Know more</Link>}
          </div>
        )}
      </div>
    );
  };