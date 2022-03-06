import React, { useRef } from "react";
import styles from "./WhyUs3.module.css";
import PageTop from "../../../component/Whyus/PageTop/PageTop";
import Three from "../../../assets/WhyUs/3.webp";
import Building_vector from "../../../assets/WhyUs/Building-vector.svg";
import { PAGE3 } from "../Constants";
import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInViewport } from "react-in-viewport";

const WhyUs3 = ({ isMOBILE }) => {
  const view = useRef();
  const { inViewport } = useInViewport(
    view,
    {},
    {},
    {
      onEnterViewport: () => view.current.slickPlay(),
      onLeaveViewport: () => view.current.slickPause(),
    }
  );
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    lazyload:'progressive',
    vertical: false,
    pauseOnHover: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };
  return (
    <div className={styles.main}>
      <PageTop
        Icon={Three}
        ISMobile={isMOBILE}
        Vector={Building_vector}
        Heading1="Prerna aims to provide children with the best"
        Heading2="care and facilities they deserve."
        Heading_mob="High-quality facilities"
        className={styles.head}
      />
      <Slider className={clsx(styles.slider)} {...settings} ref={view} >
        {PAGE3.map((e) => (
          <div className={styles.Items} key={e.id}>
            <div className={styles.items_head}>
              <img className={styles.img} src={e.img} alt="" />
            </div>
            <div className={styles.items_body}>
              <h3 className={styles.title}>{e.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhyUs3;
