import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const PlaceCard = ({ place }) => {
  return (
    <Link className="w-full" href={`/place/${place.id}`}>
      <div className="bg-white relative border w-full h-80 rounded-lg  ">
        <img
          className="h-full absolute top-0 z-10 left-0 w-full rounded-lg object-cover"
          src={
            place.images.length !== 0
              ? place.images[0]
              : "/assets/images/pic3.jpg"
          }
          alt="place_pic"
        />
        <div className="bg-[rgba(255,255,255,0.6)] pt-4 pl-4 absolute rounded-t-lg z-20 bottom-0 left-0 w-full h-20">
          <h3 className="font-bold text-lg">{place.name}</h3>
          <div className="flex pl-4 items-center gap-x-1">
            <FaMapMarkerAlt className="text-[#FA7436]" />
            <p>{place.wilaya}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
