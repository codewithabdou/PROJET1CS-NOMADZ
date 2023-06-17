"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import getSites from "@Api/getSites";
import { useRouter } from "next/navigation";

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
            color="black"
            latitude={site.latitude}
            longitude={site.longitude}
            onClick={() => {
              router.push(`/place/${site.id}`);
            }}
          ></Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
