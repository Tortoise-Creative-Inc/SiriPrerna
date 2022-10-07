import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import s from "../../container/home/Home.module.css";


export const Pins =({ismobile,e,show})=>{
    return(
      <section className={s.sec5}>
      <div className={s.sec5_head}>
        <h2>{e.heading} {!ismobile&&<br />} {e.heading1&&e.heading1}</h2>
        {!ismobile&&<Link to={e.to}>Know more</Link>}
      </div>
      <div className={s.sec5_img}>
        <span>
          {(e.subheading1&&!ismobile)||<h5><b>{e.subheading1}</b></h5>}
          <LazyLoadImage src={e.img1} alt="_img" />
          {(!ismobile || !show) &&<p> <b>{e.bh}</b> {e.desc1}</p>}
          {ismobile && <div> <Link to={e.toi?(e.toi):(e.to)}>Know more</Link></div>}
        </span>
        {(show || !ismobile)&&<span>
          {(e.subheading2&&!ismobile)||<h5><b>{e.subheading2}</b></h5>}
          <LazyLoadImage src={e.img2} alt="_img" />
          {!ismobile &&<p><b>{e.bh2}</b> {e.desc2}</p>}
          {ismobile && <div> <Link to={e.toc?(e.toc):(e.to)}>Know more</Link></div>}
        </span> }
      </div>
    </section>
    )
  }