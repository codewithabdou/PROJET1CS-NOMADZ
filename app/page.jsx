"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSec from "@components/HomepageComponents/HomeSec";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "@styles/globals.css";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper";
import Footer from "@components/shared/Footer";
import Explorer from "@components/Explorer";
import Navigator from "@components/Navigator";

export default function Home() {
  return (
    <>
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent flex-center top-0 left-0 w-full -z-5 h-screen " />
      <Navigator />
      <HomeSec />
      <div className="absolute flex-center top-0 left-0 w-full -z-10 h-screen ">
        <Swiper
          speed={2000}
          effect="fade"
          navigation={false}
          direction="horizontal"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay, EffectFade]}
        >
          <SwiperSlide>
            <img src="assets/images/pic1.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/pic2.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/pic3.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Explorer />
      <Footer />
    </>
  );
}
