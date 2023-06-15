import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const PlaceCard = () => {
  const placeId = 1;
  return (
    <Link className="w-full" href={`/place/${placeId}`}>
      <div className="bg-white relative border w-full h-80 rounded-lg  ">
        <img
          className="h-full absolute top-0 z-10 left-0 w-full rounded-lg object-cover"
          src="/assets/images/pic1.svg"
          alt="place_pic"
        />
        <div className="bg-[rgba(255,255,255,0.6)] pt-4 pl-4 absolute rounded-t-lg z-20 bottom-0 left-0 w-full h-20">
          <h3 className="font-bold text-lg">Notre Dame d'afrique</h3>
          <div className="flex pl-4 items-center gap-x-1">
            <FaMapMarkerAlt className="text-[#FA7436]" />
            <p>Alger</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
