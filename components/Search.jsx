"use client";

import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import getFilteredSites from "@Api/getFilteredSites";

const Search = ({ setSites, setIsFetchingSites }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleChangeTheme = (event) => {
    setSelectedTheme(event);
  };

  const [selectedCat, setSelectedCat] = useState(null);

  const handleChangeCat = (event) => {
    setSelectedCat(event);
  };

  const [selectedWilaya, setSelectedWilaya] = useState(null);

  const handleChangeWilaya = (event) => {
    setSelectedWilaya(event);
  };

  const handleSearch = () => {
    let categorie, wilaya, theme;
    if (selectedCat === null) categorie = "";
    else categorie = selectedCat;
    if (selectedTheme === null) theme = "";
    else theme = selectedTheme;
    if (selectedWilaya === null) wilaya = "";
    else wilaya = selectedWilaya;

    setIsFetchingSites(true);

    getFilteredSites({ categorie, wilaya, theme })
      .then((data) => {
        setSites(data);
        setIsFetchingSites(false);
      })
      .catch((e) => console.log(e));
  };

  // wilayas

  const wilayas = [
    { id: "1", code: "1", nom: "Adrar" },
    { id: "2", code: "2", nom: "Chlef" },
    { id: "3", code: "3", nom: "Laghouat" },
    { id: "4", code: "4", nom: "Oum El Bouaghi" },
    { id: "5", code: "5", nom: "Batna" },
    { id: "6", code: "6", nom: "B\u00e9ja\u00efa" },
    { id: "7", code: "7", nom: "Biskra" },
    { id: "8", code: "8", nom: "B\u00e9char" },
    { id: "9", code: "9", nom: "Blida" },
    { id: "10", code: "10", nom: "Bouira" },
    { id: "11", code: "11", nom: "Tamanrasset" },
    { id: "12", code: "12", nom: "T\u00e9bessa" },
    { id: "13", code: "13", nom: "Tlemcen" },
    { id: "14", code: "14", nom: "Tiaret" },
    { id: "15", code: "15", nom: "Tizi Ouzou" },
    { id: "16", code: "16", nom: "Alger" },
    { id: "17", code: "17", nom: "Djelfa" },
    { id: "18", code: "18", nom: "Jijel" },
    { id: "19", code: "19", nom: "S\u00e9tif" },
    { id: "20", code: "20", nom: "Sa\u00efda" },
    { id: "21", code: "21", nom: "Skikda" },
    { id: "22", code: "22", nom: "Sidi Bel Abb\u00e8s" },
    { id: "23", code: "23", nom: "Annaba" },
    { id: "24", code: "24", nom: "Guelma" },
    { id: "25", code: "25", nom: "Constantine" },
    { id: "26", code: "26", nom: "M\u00e9d\u00e9a" },
    { id: "27", code: "27", nom: "Mostaganem" },
    { id: "28", code: "28", nom: "M'Sila" },
    { id: "29", code: "29", nom: "Mascara" },
    { id: "30", code: "30", nom: "Ouargla" },
    { id: "31", code: "31", nom: "Oran" },
    { id: "32", code: "32", nom: "El Bayadh" },
    { id: "33", code: "33", nom: "Illizi" },
    { id: "34", code: "34", nom: "Bordj Bou Arreridj" },
    { id: "35", code: "35", nom: "Boumerd\u00e8s" },
    { id: "36", code: "36", nom: "El Tarf" },
    { id: "37", code: "37", nom: "Tindouf" },
    { id: "38", code: "38", nom: "Tissemsilt" },
    { id: "39", code: "39", nom: "El Oued" },
    { id: "40", code: "40", nom: "Khenchela" },
    { id: "41", code: "41", nom: "Souk Ahras" },
    { id: "42", code: "42", nom: "Tipaza" },
    { id: "43", code: "43", nom: "Mila" },
    { id: "44", code: "44", nom: "A\u00efn Defla" },
    { id: "45", code: "45", nom: "Na\u00e2ma" },
    { id: "46", code: "46", nom: "A\u00efn T\u00e9mouchent" },
    { id: "47", code: "47", nom: "Gharda\u00efa" },
    { id: "48", code: "48", nom: "Relizane" },
  ];

  return (
    <div className="w-full my-10  flex items-center justify-center ">
      <div className="flex bg-white py-4  z-50 border-gray-300 shadow-lg shadow-gray-300 border rounded-xl items-center justify-evenly lg:w-[70%]  w-[90%]">
        <div className="w-[85%]  gap-y-4  grid grid-cols-1 lg:grid-cols-2">
          <div className="w-[90%] pl-4 flex justify-end ">
            <Select
              onChange={handleChangeWilaya}
              placeholder="Wilaya"
              bordered={false}
              value={selectedWilaya}
              className="z-50 h-8 w-[90%]   bg-white border-[#E4D4CB] border rounded-2xl"
              allowClear
              options={wilayas.map((wilaya) => {
                return { label: wilaya.nom, value: wilaya.nom };
              })}
            />
          </div>
          <div className="flex ml-2 w-[90%] justify-end lg:gap-8 gap-1">
            <Select
              onChange={handleChangeTheme}
              placeholder="Theme"
              bordered={false}
              value={selectedTheme}
              className="z-50 h-8 w-[45%]   bg-white border-[#E4D4CB] border rounded-2xl"
              allowClear
              options={[
                {
                  value: "histoire",
                  label: "histoire",
                },
                {
                  value: "2",
                  label: "2",
                },
                {
                  value: "3",
                  label: "3",
                },
              ]}
            />
            <Select
              bordered={false}
              onChange={handleChangeCat}
              placeholder="Catégorie"
              className="z-50 w-[45%] h-8 ml-4 bg-white border-[#E4D4CB] border rounded-2xl"
              allowClear
              value={selectedCat}
              options={[
                {
                  value: "site",
                  label: "site",
                },
                {
                  value: "2",
                  label: "2",
                },
                {
                  value: "3",
                  label: "3",
                },
              ]}
            />
          </div>
        </div>
        <div className="w-[15%] flex-center ">
          <div
            onClick={() => {
              handleSearch();
            }}
            className="bg-[#FA7436] cursor-pointer flex-center h-8 w-8 rounded-xl"
          >
            <MdSearch size={20} className="z-50 text-white bg-[#FA7436] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
