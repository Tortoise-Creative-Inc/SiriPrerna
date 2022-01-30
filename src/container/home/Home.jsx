import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import s from "./home.module.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import bg from "../../assets/home/sec1/bg.svg";
import bg2 from "../../assets/home/sec1/bg2.svg";
import bgc from "../../assets/home/sec1/bgc.svg";
import bgc2 from "../../assets/home/sec1/bgc2.svg";
import loc from "../../assets/home/loc.svg";
import { sec2, kidsclg, founders,sec5_1, sec5_2,mobslides } from "./constants";
import { Collage } from "../../component/home/Collage";
import { Pins } from "../../component/home/Pins";
import { Descslides, Slides } from "../../component/home/Slides";

export const Home = ({ ismobile }) => {
  return (
    <div className={s.cnt}>
      <section className={s.sec1}>
        <div id={s.heading}>
          {ismobile ? (
            <h1>We are an <span>orphanage</span> striving to<br /> shape young minds for<br />excellence.</h1>
          ) : (
            <h1>We are an <span>orphanage</span><br />striving to shape young <br /> minds for excellence.</h1>
          )}
        </div>

        <div className={s.sec1_img} style={{ backgroundImage: `url(${ismobile ? bgc2 : bgc})` }}>
          <LazyLoadImage src={ismobile ? bg2 : bg} alt="" />
        </div>

        {!ismobile && (<p><LazyLoadImage src={loc} alt="" /> Hyderabad, Telangana, India</p>)}

       </section>

      <section className={s.sec2}>
        {sec2.map((e) => (
          <div key={e.key}>
            <span>
              <LazyLoadImage
                src={ismobile ? (e.icon2 ? e.icon2 : e.icon) : e.icon}
                alt=""
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
          db={kidsclg}
          title="Meet our kids"
          desc={true}
          to="/Ourkids"
        />
      </section>

     <Pins ismobile={ismobile} e={sec5_1}/>

     <Collage
        ismobile={ismobile}
        mobsetting=" 1fr 1fr"
        founder={true}
        db={founders}
        title="Meet Our Founders"
        desc={false}
        to=""
      />

      <section className={s.sec4}>
        <div className={s.head}>
          <h2>What are people saying...</h2>
        </div>
        {!ismobile &&(
          <Descslides slides={mobslides}/>
        )}
          <Slides slides={mobslides}/>
      </section>
      
      
    <Pins ismobile={ismobile} e={sec5_2} show={true}/>
    </div>
  );
};

