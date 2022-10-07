import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import s from "./Home.module.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import bg   from "../../assets/home/sec1/bg.svg";
import bg2 from "../../assets/home/sec1/bg2.svg";
import bgc   from "../../assets/home/sec1/bgc.webp";
import bgc2 from "../../assets/home/sec1/bgc2.webp";
import loc from "../../assets/home/loc.svg";
import { Collage } from "../../component/home/Collage";
import { Pins } from "../../component/home/Pins";
import { Descslides, Slides } from "../../component/home/Slides";
import { HOME_FOUNDERS, HOME_KIDSCLG, HOME_MOBSLIDES, HOME_SEC, HOME_SEC5_1, HOME_SEC5_2 } from "../../utility/constants";
import ScrollToTop from "react-scroll-to-top";

const Home = ({ ismobile }) => {
  return (
    <div className={s.cnt}>
       {ismobile && <ScrollToTop smooth className="scroll" />}
      <section className={s.sec1}>
        <div id={s.heading}>
          {ismobile ? (
            <h1>We are an <span>orphanage</span> striving to<br /> shape young minds for<br />excellence.</h1>
          ) : (
            <h1>We are an <span>orphanage</span><br />striving to shape young <br /> minds for excellence.</h1>
          )}
        </div>

        <div className={s.sec1_img} style={{ backgroundImage: `url(${ismobile ? bgc2 : bgc})` }}>
          <img loading="eager" src={ismobile ? bg2 : bg} alt="_img" />
        </div>

        {!ismobile && (<p><a href="https://goo.gl/maps/A9yJBod3gTNvEmVTA"><LazyLoadImage src={loc} alt="_img" /> Hyderabad, Telangana, India</a></p>)}

       </section>

      <section className={s.sec2}>
        {HOME_SEC.map((e) => (
          <div key={e.key}>
            <span>
              <LazyLoadImage
                src={ismobile ? (e.icon2 ? e.icon2 : e.icon) : e.icon}
                alt="_img"
              />{" "}
              <p>{e.text1}</p>
            </span>
            <p>{e.text2}</p>
          </div>
        ))}
      </section>

      <section className={s.sec3}>
        <Collage
          ismobile={ismobile}
          mobsetting=" 1fr 1fr 1fr"
          kids={true}
          db={HOME_KIDSCLG}
          title="Meet our kids"
          desc={true}
          to="ourkids"
        />
      </section>

     <Pins ismobile={ismobile} e={HOME_SEC5_1}/>

     <Collage
        ismobile={ismobile}
        mobsetting=" 1fr 1fr"
        founder={true}
        db={HOME_FOUNDERS}
        title="Meet Our Founders"
        desc={false}
        to=""
      />

      <section className={s.sec4}>
        <div className={s.head}>
          <h2>What people are saying...</h2>
        </div>
        {!ismobile &&(
          <Descslides slides={HOME_MOBSLIDES}/>
        )}
          <Slides slides={HOME_MOBSLIDES}/>
      </section>
      
      
    <Pins ismobile={ismobile} e={HOME_SEC5_2} show={true}/>
    </div>
  );
};

export default Home;

