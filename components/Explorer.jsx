import PlaceCard from "./PlaceCard";
import Search from "./Search";

const PlacesList = () => {
  return (
    <div className="grid grid-cols-1 items-center md:px-24 px-10 pt-8 mb-8 md:gap-x-14 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4, 1, 2, 3, 4].map((place, index) => (
        <div key={index} className="flex-center">
          <PlaceCard />
        </div>
      ))}
    </div>
  );
};

const Explorer = () => {
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
      <Search/>
      <PlacesList />
    </div>
  );
};

export default Explorer;
