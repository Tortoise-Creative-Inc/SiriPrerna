import React, { useEffect, useState } from "react";
import bg from "../../assets/home/sec1/bg.svg";
import bg2 from "../../assets/home/sec1/bg2.svg";
import bgc from "../../assets/home/sec1/bgc.svg";
import bgc2 from "../../assets/home/sec1/bgc2.svg";
import loc from "../../assets/home/loc.svg";
import i1 from "../../assets/home/sec5/i1.png";
import i2 from "../../assets/home/sec5/i2.png";
import s from "./home.module.css";
import { sec2, kidsclg, founders,sec5_1, sec5_2 } from "./constants";
import { Link } from "react-router-dom";
// requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = ({ ismobile }) => {
  return (
    <div className={s.cnt}>
      <section className={s.sec1}>
        <div id={s.heading}>
          {ismobile ? (
            <h1>
              We are an <span>Orphanage</span> striving to
              <br />
              shape young minds for
              <br />
              excellence.
            </h1>
          ) : (
            <h1>
              We are an <span>Orphanage</span>
              <br />
              striving to shape young <br /> minds for excellence.
            </h1>
          )}
        </div>
        <div
          className={s.sec1_img}
          style={{ backgroundImage: `url(${ismobile ? bgc2 : bgc})` }}
        >
          <img src={ismobile ? bg2 : bg} alt="" />
        </div>
        {!ismobile && (
          <p>
            <img src={loc} alt="" /> Hyderabad, Telangana, India
          </p>
        )}
      </section>

      <section className={s.sec2}>
        {sec2.map((e) => (
          <div key={e.key}>
            <span>
              <img
                src={ismobile ? (e.icon2 ? e.icon2 : e.icon) : e.icon}
                alt=""
              />{" "}
              {e.text1}
            </span>
            <p>{e.text2}</p>
          </div>
        ))}
      </section>


     {/* <Pins ismobile={ismobile} e={sec5_1}/> */}



      <section className={s.sec3}>
        <Collage
          ismobile={ismobile}
          mobsetting=" 1fr 1fr 1fr"
          kids={true}
          db={kidsclg}
          title="Meet Our Kids"
          desc={true}
          to="/Ourkids"
        />
      </section>

      <section className={s.sec4}>
        <div className={s.head}>
          <h2>What are people saying.....</h2>
        </div>
        {!ismobile &&(
          <div id={s.dr}>
            <aside>
              <h5>
                This home is uniquely positioned as a<br />
                place for orphan boys to be nurturned
                <br />
                with global thoughts.
              </h5>
              <p>
                - Mr. Jayaramulu L,
                <br />
                Diplomat UN vissionary
              </p>
            </aside>
            <aside style={{ margin: "-4.5% 0px 0 20%", zIndex: "1" }}>
              <h5>
                Visit place like this. God resides here <br /> and no where
                else. Amazing. Kids <br /> taken care by wonderful people.
              </h5>
              <p>- Mr. Krishna Rao,<br /> Well-wisher</p>
            </aside>
            <aside style={{ margin: "-4.5% 0px 0 40%", zIndex: "2" }}>
              <h5>
                Lovely kids, Hygienic environment and <br /> friendly staff.
              </h5>
              <p> - Mrs. Ashwini,<br /> Well-wisher</p>
            </aside>
            <aside style={{ margin: "-4.5% 0px 0 60%", zIndex: "3" }}>
              <h5>
                The kids are very talented and <br /> disciplined.
              </h5>
              <p>- Mrs. M. Keerthana,<br /> Well-wisher</p>
            </aside>
          </div>
        )}
        <div id={s.tr}>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        stopOnHover={true}
        showStatus={false}
        showThumbs={false}        
      >
        <div className={s.slider}>
          <h5>
            This home is uniquely positioned as a
            place for orphan boys to be nurturned
            with global thoughts.
          </h5>
          <p>
            - Mr. Jayaramulu L,
            <br />
            Diplomat UN vissionary
          </p>
        </div>
        <div className={s.slider}>
          <h5>
            Visit place like this. God resides here  and no where else.
            Amazing. Kids taken care by wonderful people.
          </h5>
          <p>- Mr. Krishna Rao, Well-wisher</p>
        </div>
        <div className={s.slider}>
          <h5>
            Lovely kids, Hygienic environment and friendly staff.
          </h5>
          <p> - Mrs. Ashwini, Well-wisher</p>
        </div>
        <div className={s.slider}>
          <h5>
            The kids are very talented and disciplined.
          </h5>
          <p>- Mrs. M. Keerthana, Well-wisher</p>
        </div>
      </Carousel>
        </div>
      </section>
      
      <Collage
        ismobile={ismobile}
        mobsetting=" 1fr 1fr"
        founder={true}
        db={founders}
        title="Meet Our Founders"
        desc={false}
        to=""
      />
    <Pins ismobile={ismobile} e={sec5_2} show={true}/>
    </div>
  );
};

const Collage = ({
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
          <div key={e.key}>
            {(e.ignore && ismobile) || (
              <div>
                <img src={e.img} alt="" />
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
            )}
          </div>
        ))}
      </div>
      {ismobile && !founder && (
        <div className={s.clg_mob_footer}>
          <Link to="/ourkids">Know more</Link>
        </div>
      )}
      {!ismobile && (
        <div className={s.deskview} style={{ bottom: founder && "30%" }}>
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

const Pins =({ismobile,e,show})=>{
  return(
    <section className={s.sec5}>
    <div className={s.sec5_head}>
      <h2>{e.heading} {!ismobile&&<br />} {e.heading&&e.heading1}</h2>
      {!ismobile&&<Link to={e.to}>Know more</Link>}
    </div>
    <div className={s.sec5_img}>
      <span>
        {(e.subheading1&&!ismobile)||<h5>{e.subheading1}</h5>}
        <img src={e.img1} alt="" />
        {!ismobile &&<p>{e.desc1}</p>}
        {ismobile && <div> <Link to={e.to}>Know more</Link></div>}
      </span>
      {show&&<span>
        {(e.subheading2&&!ismobile)||<h5>{e.subheading2}</h5>}
        <img src={e.img2} alt="" />
        {!ismobile &&<p>{e.desc2}</p>}
        {ismobile && <div> <Link to={e.to}>Know more</Link></div>}
      </span> }
    </div>


  </section>
  )
}