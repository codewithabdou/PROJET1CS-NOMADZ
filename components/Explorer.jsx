import { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import Search from "./Search";
import getSites from "@Api/getSites";
import { Audio } from "react-loader-spinner";

const PlacesList = ({ sites, isFetchingSites }) => {
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
    <>
      {sites.length !== 0 ? (
        <div className="grid grid-cols-1 items-center md:px-24 px-10 pt-8 mb-8 md:gap-x-14 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sites.map((place) => (
            <div key={place.id} className="flex-center">
              <PlaceCard place={place} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-center bg-[#FEFCFB] h-full w-full">No sites .</div>
      )}
    </>
  );
};

const Explorer = () => {
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
  return (
    <div
      id="explorer"
      className="min-h-screen relative bg-[#FEFCFB] pt-8 xl:px-10 xl:pt-20"
    >
      <img
        src="/assets/images/airplanes.svg"
        className="absolute w-full top-0 left-0 z-10"
      />
      <h1 className="lg:text-4xl text-2xl font-extrabold text-center mb-4 text-[#222222]">
        Que <span className="text-[#FA7436]">visiterons</span> -nous Aujourd'hui
      </h1>
      <Search setSites={setSites} setIsFetchingSites={setIsFetchingSites} />
      <PlacesList sites={sites} isFetchingSites={isFetchingSites} />
    </div>
  );
};

export default Explorer;
