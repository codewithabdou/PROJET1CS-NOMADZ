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
      <div className="flex bg-white z-50 border-gray-300 shadow-md shadow-gray-300 border rounded-xl items-center justify-evenly h-16 w-[70%]">
        <input
          type="text"
          placeholder="Rechercher ..."
          className="z-50 pl-4 focus:outline-none focus:border-[#eaad89] text-sm placeholder:text-sm placeholder:text-[#E4D4CB] h-8 w-[30%] border-[#E4D4CB] border rounded-2xl"
        />
        <Select
          onChange={handleChangeType}
          placeholder="Type"
          bordered={false}
          className="z-50 h-8 w-[20%] border-[#E4D4CB] border rounded-2xl"
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
          className="z-50 h-8 w-[20%] border-[#E4D4CB] border rounded-2xl"
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
        <div className="bg-[#FA7436] flex-center h-8 w-8 rounded-xl">
          <MdSearch
            size={20}
            className="z-50 text-white bg-[#FA7436] "
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
