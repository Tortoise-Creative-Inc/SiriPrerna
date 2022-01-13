import React from "react";
import temp from "../../assets/home/a1_images/temp_home_img.png";
import bgc from "../../assets/home/a1_images/Bgc.svg";
import "./home.css";
import { a1, homepins } from "./constants";

export const Home = () => {
  return (
    <div className="home_cnt">
      <div id="atop">
        <h1>
          {" "}
          We are an <span style={{ color: "#FFC046" }}>Orphanage</span> striving
          to <br /> shape young mind for <br /> excellence.
        </h1>
        <div style={{ backgroundImage: `url(${bgc})` }}>
          <img src={temp} alt="" />
        </div>
      </div>
      <div id="a1">
        {a1.map((e) => (
          <div key={e.desc}>
            <span>
              <img src={e.icon} alt="" />
              <h6>{e.no}</h6>
            </span>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
      {homepins.map((e) => (
        <div key={e.key}>
          <HomePins
            pins={e.pins}
            pin={e.pin}
            founder={e.founder}
            founders={e.founders}
            review={e.review}
            reviews={e.reviews}
            kids={e.kids}
            klink={e.link}
            kid={e.kid}
          />
        </div>
      ))}
    </div>
  );
};

const HomePins = ({
  founder,
  founders,
  pins,
  pin,
  review,
  reviews,
  kids,
  kid,
  klink
}) => {
  const overlay = (n) => {
    if (n % 2 === 0)
      return "linear-gradient(180deg, rgba(149, 0, 36, 0.3) 33.85%, rgba(0, 0, 0, 0.87) 100%)";
    else
      return "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 33.85%, rgba(0, 0, 0, 0.87) 100%)";
  };
  return (
    <div>
      {kid && (
        <div id="a3" className="kids">
          <h4>Meet Our Kids</h4>
          <div id="a0">
            {kids.map((e) => (
              <div key={e.key} className={e.class}>
                <img src={e.img} alt="" />
                <div id="overlay" style={{ background: overlay(e.key) }}></div>
                <span >
                  <h5 >{e.name}</h5>
                </span>
              </div>
            ))}
          </div>
          <div className="desklink">
          <a  href={klink}>Know more</a>

          </div>
        </div>
      )}

      {pins && (
        <div id="a2">
          <div id="a2_inner">
            {pin.map((e) => (
              <div id="a2_a" className={e.class} key={e.key}>
                {e.title && <h4>{e.title}</h4>}
                {e.tp && (
                  <p
                    id="top_desc"
                    style={{
                      color: "black",
                      fontSize: "18px",
                      marginBottom: "7px",
                    }}
                  >
                    {e.tp}
                  </p>
                )}
                {e.img && <img src={e.img} alt="" />}
                {e.desc && <p>{e.desc}</p>}
                {e.ddesc && <p className="desktop">{e.ddesc}</p>}
                <div style={{ marginTop: "50px" }} className={e?.desklink}>
                  {e.link && <a href={e.link}>Know more</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {founder && (
        <div id="a3">
          <h4>Meet Our Founders</h4>
          <div id="a3_a">
            {founders.map((e) => (
              <div key={e.key}>
                <img src={e.img} alt="" />
                <div id="overlay" style={{ background: overlay(e.key) }}></div>
                <span>
                  <h5>{e.name}</h5>
                  <p>{e.position}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {review && (
        <div id="a3_b">
          <h4>What people are saying...</h4>
          <div>
            {reviews.map((e) => (
              <span key={e.key}>
                <h6>{e.content}</h6>
                <p>{e.author}</p>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
