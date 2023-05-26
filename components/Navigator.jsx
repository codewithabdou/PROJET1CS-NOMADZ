"use client";

import React, { useState, useEffect } from "react";

const Navigator = () => {
  const [y, setY] = useState(window.scrollY);
  const [inHome, setInHome] = useState(true);

  const handleNavigation = (e) => {
    setY(window.scrollY);
    if (window.scrollY >= 300) {
      setInHome(false);
    } else setInHome(true);
  };
  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div
      className={`fixed hidden  ${
        y <= 1200 ? "xl:flex" : ""
      } -rotate-90 items-center justify-between gap-2 top-1/2 -left-24 z-50`}
    >
      <div
        className={`text-[#FFE4C0] font-semibold py-2 transition-all duration-500 px-4 ${
          inHome ? "bg-transparent" : "bg-[#FA7436]"
        }`}
      >
        Explorer
      </div>
      <div className="h-[2px] w-4 bg-[#FFE4C0]"></div>
      <div
        className={`text-[#FFE4C0] font-semibold py-2 transition-all duration-300 px-4 ${
          !inHome ? "bg-transparent" : "bg-[#FA7436]"
        }`}
      >
        Accueil
      </div>
    </div>
  );
};

export default Navigator;
