import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import coder from "../../img/i-coder.png"
import cable from "../../img/projects/cableCo.png"
import Appem from "../../img/projects/Appem.png"
import SCTE from "../../img/projects/SCTE.png"
import tinDog from "../../img/projects/TinDog.png"
import traveling from "../../img/projects/traveling.png"
import newsMonkey from "../../img/projects/newsMonkey.PNG"
import getHubfinder from "../../img/projects/getHubfinder.png"
import gymSite from "../../img/projects/gymSite.png"
import batoor from "../../img/projects/Batoor.PNG"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
       
        <SwiperSlide>
          <img src={cable} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Appem} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SCTE} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traveling} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gymSite} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={getHubfinder} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={batoor} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={tinDog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coder} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={newsMonkey} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
