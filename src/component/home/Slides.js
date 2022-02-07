import React from "react";
import { Carousel } from "react-responsive-carousel";
import s from "../../container/home/home.module.css";

export const Slides =({slides})=>{
    return(
    <div id={s.tr}>
    <Carousel
    autoPlay={true}
    swipeable={false}
    infiniteLoop={true}
    interval={2000}
    stopOnHover={true}
    showStatus={false}
    showThumbs={false}        
  >
  {slides.map((e)=>(
    <div className={s.slider} key={e.key}>
      <h5>
       {e.heading}
      </h5>
      <p>
       {e.author}
      </p>
    </div>
      ))}
  </Carousel>
    </div>)
  }

export const Descslides = ({slides}) => {
    return(
      <div id={s.dr}>
              {slides.map((e)=>(
                <aside key={e.key} style={{ margin: `${e.margin}`, zIndex: `${e.key}` }}>
                <h5 style={{ width: `${e.width}`}}>
                  {e.heading}
                 </h5>
                <p>{e.author}</p>
              </aside>
                ))}
             
            </div>
    )
  }