import Footer from "@components/shared/Footer";
import React from "react";
import { GiPrivateFirstClass } from "react-icons/gi";

const Visite = () => {
  return (
    <div className="bg-[#666380] pt-20">
      <div className="grid grid-cols-1 xl:max-h-screen gap-y-4 md:grid-cols-2">
        <div className="flex flex-col md:pt-10 gap-8 items-center justify-start">
          <h1 className="text-white leading-8 md:px-14 px-10 lg:px-16 text-3xl md:text-5xl lg:text-6xl font-semibold">
            Trouvez Votre Réalité Parfaite à portée de clic
          </h1>
          <p className="text-white text-base md:text-lg md:px-14 px-10 lg:px-32 indent-4 leading-relaxed">
            Choisissez votre immersion préférée et séléctionnez un lieu que vous
            désirez visiter
          </p>
          <button
            type="button"
            className=" font-semibold rounded-lg bg-gradient-to-r from-[#FA7436] to-[#FFB951] py-1.5 px-6 shadow-inner shadow-[rgba(0,0,0,0.25)] text-white transition-all hover:-translate-y-1 hover:translate-x-1 text-center text-sm font-inter flex items-center justify-center"
          >
            Commencer
          </button>
        </div>
        <div className="flex   justify-center items-start">
          <img
            className="h-[80%]   lg:h-[70%] w-auto object-contain"
            src="/assets/images/visite.svg"
            alt="visite"
          />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex justify-center p-10 items-center">
          <div className="bg-[#817F9B]  rounded-md flex flex-col justify-between items-center px-2 h-[22rem] pb-4 pt-8 xl:w-[70%] w-[90%] ">
            <h2 className="text-white font-semibold text-2xl text-center">
              Essayez la <span className="text-[#FA7436]">Visite 360°</span>
            </h2>
            <p className="text-sm indent-4 px-4 text-white">
              Un panorama sans limites, qui vous transportera au cœur de chaque
              lieu, avec une sensation de présence authentique avec une durée de
              temps illimitée, selectionnez un lieu
            </p>
            <div className="flex w-full pr-4 justify-end">
              <button
                type="button"
                className=" font-semibold  rounded-lg bg-gradient-to-r from-[#FA7436] to-[#FFB951] py-1.5 px-4 shadow-inner shadow-[rgba(0,0,0,0.25)] text-white transition-all hover:-translate-y-1 hover:translate-x-1 text-center text-sm font-inter flex items-center justify-center"
              >
                Sélectionner
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-10 items-center">
          <div className="bg-[#817F9B]  rounded-md flex flex-col justify-between items-center px-2 h-[22rem] pb-4 pt-8 xl:w-[70%] w-[90%] ">
            <h2 className="text-white font-semibold text-2xl text-center">
              Essayez la{" "}
              <span className="text-[#FA7436]">Visite Virtuelle</span>
            </h2>
            <p className="text-sm indent-4 px-4 text-white">
              Une réalité qui se mêle à l'imagination En utilisant la réalité
              virtuelle pour créer une expérience interactive et immersive, une
              visite guidée par notre Assitante Virtuelle Ro, la visite va durer
              1h au maximum, Séléctionnez le lieu
            </p>
            <div className="flex w-full pr-4 justify-end">
              <button
                type="button"
                className=" font-semibold  rounded-lg bg-gradient-to-r from-[#FA7436] to-[#FFB951] py-1.5 px-4 shadow-inner shadow-[rgba(0,0,0,0.25)] text-white transition-all hover:-translate-y-1 hover:translate-x-1 text-center text-sm font-inter flex items-center justify-center"
              >
                Sélectionner
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-10 items-center">
          <div className="bg-[#817F9B]  rounded-md flex flex-col justify-between items-center px-2 h-[22rem]  pb-4 pt-8 xl:w-[70%] w-[90%] ">
            <h2 className="text-white font-semibold text-2xl text-center">
              Essayez la{" "}
              <span className="text-[#FA7436]">
                Visite Virtuelle Collective
              </span>
            </h2>
            <p className="text-sm indent-4 px-4 text-white">
              Une Room de personnes pour une visite virtuelle partagée, elle
              sera guidée par notre Assitante Virtuelle Ro, la visite va durer
              1h au maximum, Séléctionnez le lieu et rejoingnez une Room
              existante ou créez-en une et invitez vos amis
            </p>
            <div className="flex w-full pr-4 justify-end">
              <button
                type="button"
                className=" font-semibold  rounded-lg bg-gradient-to-r from-[#FA7436] to-[#FFB951] py-1.5 px-4 shadow-inner shadow-[rgba(0,0,0,0.25)] text-white transition-all hover:-translate-y-1 hover:translate-x-1 text-center text-sm font-inter flex items-center justify-center"
              >
                Sélectionner
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Visite;
