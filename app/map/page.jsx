"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";
import { useEffect, useState } from "react";

const Map = () => {
  const Token = process.env.NEXT_PUBLIC_APP_TOKEN;
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

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

  const [viewport, setViewport] = useState({
    latitude: position.latitude,
    longitude: position.longitude,
    zoom: 10,
  });

  return (
    <div className="absolute flex-center top-0 left-0 w-full z-10 h-screen ">
      <ReactMapGL
        {...viewport}
        mapStyle={"mapbox://styles/mapbox/streets-v9"}
        mapboxAccessToken={Token}
        width="100%"
        height="100%"
        transitionDuration="200"
        onMove={(viewport) => setViewport(viewport)}
        boxZoom={true}
      >
        <Marker
          color="black"
          latitude={position.latitude}
          longitude={position.longitude}
        />
      </ReactMapGL>
    </div>
  );
};

export default Map;
