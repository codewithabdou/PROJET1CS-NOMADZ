"use client";

import { Select } from "antd";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleChangeType = (event) => {
    setSelectedType(event);
  };

  const [selectedCat, setSelectedCat] = useState("");

  const handleChangeCat = (event) => {
    setSelectedCat(event);
  };

  return (
    <div className="w-full my-10  flex items-center justify-center ">
      <div className="flex bg-white py-4  z-50 border-gray-300 shadow-lg shadow-gray-300 border rounded-xl items-center justify-evenly lg:w-[70%]  w-[90%]">
        <div className="w-[85%]  gap-y-4  grid grid-cols-1 lg:grid-cols-2">
          <div className="w-[90%] pl-4 flex justify-end ">
            <input
              type="text"
              placeholder="Rechercher ..."
              className="z-50 pl-4 w-full  focus:outline-none focus:border-[#eaad89] text-sm placeholder:text-sm placeholder:text-[#E4D4CB] h-8  border-[#E4D4CB] border rounded-2xl"
            />
          </div>
          <div className="flex ml-2 w-[90%] justify-end lg:gap-8 gap-1">
            <Select
              onChange={handleChangeType}
              placeholder="Type"
              bordered={false}
              className="z-50 h-8 w-[45%]   bg-white border-[#E4D4CB] border rounded-2xl"
              allowClear
              options={[
                {
                  value: "1",
                  label: "1",
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
              options={[
                {
                  value: "1",
                  label: "1",
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
          <div className="bg-[#FA7436] flex-center h-8 w-8 rounded-xl">
            <MdSearch size={20} className="z-50 text-white bg-[#FA7436] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
