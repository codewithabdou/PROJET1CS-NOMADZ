import React from "react";
import Link from "next/link";

const HomeSec = () => {
  return (
    <div className="cursor-default h-full gap-8 flex-col w-auto flex-center">
      <h1 className="text-center head_text text-white">
        Algérie le continent ! <br />
        <span className=" orange_gradient">Allons l'explorez</span>
      </h1>
      <p className="text-center font-semibold w-[80%] md:w-[50%] text-white">
        Découvrez l'Algérie, une destination incontournable qui allie richesse
        historique, paysages spectaculaires et hospitalité chaleureuse. Des
        cités ancestrales du Sahara aux côtes méditerranéennes préservées,
        l'Algérie offre une diversité unique à explorer!
      </p>
      <Link href={"/map"}>
        <button
          type="button"
          className=" border font-semibold border-[#FA7436] bg-[#FA7436] py-1.5 px-10 text-white transition-all hover:bg-white hover:-translate-y-1 hover:translate-x-1 hover:text-[#FA7436] text-center text-sm font-inter flex items-center justify-center"
        >
          Explorez
        </button>
      </Link>
    </div>
  );
};

export default HomeSec;
