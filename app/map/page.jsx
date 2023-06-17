"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import getSites from "@Api/getSites";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
  const Token = process.env.NEXT_PUBLIC_APP_TOKEN;
  const router = useRouter();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [viewport, setViewport] = useState({
    latitude: position.latitude,
    longitude: position.longitude,
    zoom: 10,
  });
  const [sites, setSites] = useState([]);
  const [isFetchingSites, setIsFetchingSites] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [siteHovered, setSiteHovered] = useState(null);

  useEffect(() => {
    setIsFetchingSites(true);
    getSites()
      .then((data) => {
        console.log(data);
        setSites(data);
        setIsFetchingSites(false);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleMouseOver = (site) => {
    setIsHovering(true);
    console.log(site);
    setSiteHovered(site);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setSiteHovered(null);
  };

  function successCallback(position) {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    setViewport({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      zoom: 10,
    });
  }

  function errorCallback(error) {
    console.log("Error occurred while retrieving location:", error.message);
  }

  if (isFetchingSites)
    return (
      <div className="flex-center bg-[#FEFCFB] h-full w-full">
        <Audio
          height="100"
          width="100"
          color="#FA7436"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    );

  return (
    <div className="absolute flex-center top-0 left-0 w-full z-10 h-screen ">
      <ReactMapGL
        {...viewport}
        mapStyle={"mapbox://styles/mapbox/satellite-streets-v9"}
        mapboxAccessToken={Token}
        width="100%"
        height="100%"
        transitionDuration="200"
        onMove={(viewport) => setViewport(viewport)}
        boxZoom={true}
      >
        {sites?.map((site) => (
          <Marker
            key={site.id}
            latitude={site.latitude}
            longitude={site.longitude}
          >
            <FaMapMarkerAlt
              onMouseOver={() => handleMouseOver(site)}
              onMouseOut={handleMouseOut}
              onClick={() => {
                router.push(`/place/${site.id}`);
              }}
              size={30}
              className="text-black mb-4 hover:text-white hover:scale-110 transition-all duration-300"
            />
          </Marker>
        ))}
        {siteHovered && (
          <Popup
            children={
              <div className="bg-white relative border w-40 h-40 rounded-lg  ">
                <img
                  className="h-full absolute top-0 z-10 left-0 rounded-lg object-cover"
                  src={
                    siteHovered.images.length !== 0
                      ? siteHovered.images[0]
                      : "/assets/images/pic3.jpg"
                  }
                  alt="place_pic"
                />
                <div className="bg-[rgba(255,255,255,0.6)] pt-4 pl-4 absolute rounded-t-lg z-20 bottom-0 left-0 w-full ">
                  <h3 className="font-bold text-lg">{siteHovered.name}</h3>
                </div>
              </div>
            }
            className="bg-transparent"
            closeButton={false}
            latitude={siteHovered.latitude}
            longitude={siteHovered.longitude}
          ></Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;
