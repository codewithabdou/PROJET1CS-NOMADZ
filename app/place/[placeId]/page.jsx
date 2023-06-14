"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

import { Rate } from "antd";

const PlaceInfos = () => {
  return (
    <div className="bg-white grid-flow-row grid grid-cols-1 lg:grid-cols-2 mt-20 min-h-screen">
      <div className="col-span-1 p-5 lg:p-10 ">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="felx flex-col items-start ">
            <h2 className="font-bold text-xl lg:text-2xl">La grande mosquée</h2>
            <div className="gap-x-3 flex flex-center">
              <Rate allowHalf defaultValue={4.6} />
              <p className="font-semibold">4.6</p>
              <MdFavoriteBorder size={30} className="text-[#FA7436]" />
            </div>
          </div>
          <div>
            <button
              type="button"
              className=" font-semibold rounded-sm bg-gradient-to-r from-[#FA7436] to-[#FFB951] py-1.5 px-6 shadow-inner shadow-[rgba(0,0,0,0.25)] text-white transition-all hover:-translate-y-1 hover:translate-x-1 text-center text-sm font-inter flex items-center justify-center"
            >
              Visiter
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
          <div className="flex items-center gap-3 justify-between rounded-2xl py-1.5 px-4 max-w-fit bg-[#D9D9D9]">
            <FaMapMarkerAlt className="text-[#FA7436]" />
            <p className="text-xs text-[#222222]">Mohammedia ,Alger</p>
          </div>
          <div className="flex items-center gap-3 justify-between rounded-2xl py-1.5 px-4 max-w-fit bg-[#D9D9D9]">
            <FaMapMarkerAlt className="text-[#FA7436]" />
            <p className="text-xs text-[#222222]">Mohammedia ,Alger</p>
          </div>
          <div className="flex items-center gap-3 justify-between rounded-2xl py-1.5 px-4 max-w-fit bg-[#D9D9D9]">
            <FaMapMarkerAlt className="text-[#FA7436]" />
            <p className="text-xs text-[#222222]">Mohammedia ,Alger</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="indent-5 text-sm text-[#222222] leading-relaxed ">
            Une mosquée située à Alger, en Algérie. La mosquée est achevée en
            avril 2019. Elle est la plus grande mosquée d'Afrique et la
            troisième plus grande mosquée du monde. La Grande Mosquée d'Alger
            est dotée d'une salle de prière d'une superficie de 20 000 m24,
            pouvant accueillir 120 000 fidèles. La nef centrale de cette salle
            est entourée de colonnades, à l'est se trouve le mihrab, réalisé en
            marbre blanc, la salle est surmontée d'une coupole d'un diamètre de
            50 mètres, culminant à une hauteur de 70 mètres. Le minaret est le
            plus haut minaret du monde, d'une hauteur de 265 mètres avec une
            plateforme d'observation au sommet pour que les visiteurs profitent
            de la vue panoramique sur la baie d'Alger.
          </p>
          <div>
            <div className="flex mt-4 gap-4 flex-center">
              <p className="bg-[#FA7436] h-fit w-8 rounded-full p-2 text-sm text-white">
                LY
              </p>
              <input
                type="text"
                className="py-4 px-6 border w-[80%] border-gray-500 rounded-2xl"
                placeholder="Ajouter votre commentaire ..."
              />
              <BiSend className="text-[#FA7436] h-8 w-8" />
            </div>
            <div>
              {[0, 1].map((comment) => (
                <div className="flex mt-4 gap-4 flex-center" key={comment}>
                  <p className="bg-[#FA7436] h-fit w-8 rounded-full p-2 text-sm text-white">
                    LY
                  </p>
                  <div className="bg-[#D9D9D9] h-fit w-[80%] rounded-2xl p-4 text-sm text-[#222222]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis magni doloremque, sit necessitatibus et illo id
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 h-[33rem] p-5 lg:p-10">
        <Swiper
          allowTouchMove={true}
          effect="fade"
          navigation={true}
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Navigation, EffectFade, Pagination]}
        >
          <SwiperSlide>
            <img src="/assets/images/pic1.svg" alt="img1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/assets/images/pic2.svg" alt="img2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/pic3.jpg" alt="img3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PlaceInfos;
