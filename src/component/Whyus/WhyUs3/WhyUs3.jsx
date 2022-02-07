import React from "react";
import styles from "./WhyUs3.module.css";
import PageTop from "../../../component/Whyus/PageTop/PageTop";
import Three from "../../../assets/WhyUs/3.png";
import Building_vector from "../../../assets/WhyUs/Building-vector.svg";
import { PAGE3 } from "../../../container/WhyUs/Constants";
import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const WhyUs3 = ({ isMOBILE }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    autoplay: true,
    vertical: false,
    pauseOnHover: true,
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
      <Slider className={clsx(styles.slider)} {...settings}>
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
