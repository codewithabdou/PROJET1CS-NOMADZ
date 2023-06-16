import React from "react";

const HomeSec = () => {
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="cursor-default h-full z-20 gap-8 flex-col w-auto flex-center">
      <h1 className="text-center z-20 head_text text-white">
        Algérie le continent ! <br />
        <span className=" orange_gradient">Allons l'explorez</span>
      </h1>
      <p className="text-center z-20  w-[80%] md:w-[50%] text-white">
        Découvrez l'Algérie, une destination incontournable qui allie richesse
        historique, paysages spectaculaires et hospitalité chaleureuse. Des
        cités ancestrales du Sahara aux côtes méditerranéennes préservées,
        l'Algérie offre une diversité unique à explorer!
      </p>
      <button
        onClick={() => scrollToDiv("explorer")}
        type="button"
        className=" z-20 font-semibold rounded-lg bg-gradient-to-r from-[#FA7436] to-[#FFB951] py-1.5 px-8 shadow-inner shadow-[rgba(0,0,0,0.25)] text-white transition-all hover:-translate-y-1 hover:translate-x-1 text-center text-sm font-inter flex items-center justify-center"
      >
        Explorez
      </button>
    </div>
  );
};

export default HomeSec;
