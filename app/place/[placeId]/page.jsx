"use client";

import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

import { Rate } from "antd";
import Footer from "@components/shared/Footer";
import { useParams } from "next/navigation";
import getSiteDetails from "@Api/getSiteDetails";
import { Audio } from "react-loader-spinner";
import { GiWavyItinerary } from "react-icons/gi";
import { TfiAlarmClock } from "react-icons/tfi";
import addFav from "@Api/addFav";
import removeFav from "@Api/removeFav";
import { useSession } from "next-auth/react";
import addCommentaire from "@Api/addCommentaire";

const PlaceInfos = () => {
  const params = useParams();
  const { data: session } = useSession();

  const [site, setSite] = useState(null);
  const [isFetchingSites, setIsFetchingSites] = useState(true);
  const [isSubmittingCommentaire, setIsSubmittingCommentaire] = useState(false);

  const [favoured, setFavoured] = useState(null);
  const [commentaire, setCommentaire] = useState("");

  const siteStars = 4.6;

  useEffect(() => {
    setIsFetchingSites(true);
    getSiteDetails(params.placeId)
      .then((data) => {
        console.log(data);
        setSite(data);
        setFavoured(data.favoured);
        setIsFetchingSites(false);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log("local " + favoured);
    console.log("bdd " + site?.favoured);
    if (favoured !== site?.favoured && site) {
      if (favoured) {
        addFav(params.placeId).then(() => {
          getSiteDetails(params.placeId)
            .then((data) => {
              setSite(data);
            })
            .catch((e) => console.log(e));
        });
      } else {
        removeFav(params.placeId).then(() => {
          getSiteDetails(params.placeId)
            .then((data) => {
              setSite(data);
            })
            .catch((e) => console.log(e));
        });
      }
    }
  }, [favoured]);

  const submitCommentaire = () => {
    if (isSubmittingCommentaire || !commentaire || !commentaire?.length) return;
    setIsSubmittingCommentaire(true);
    setCommentaire("");
    let data = {
      siteId: site.id,
      stars: parseInt(siteStars.toPrecision(1)),
      comment: commentaire,
    };
    addCommentaire(data)
      .then(() => {
        getSiteDetails(params.placeId)
          .then((data) => {
            console.log(data);
            setSite(data);
            setIsSubmittingCommentaire(false);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  function getInitials(fullName) {
    let names = fullName.split(" ");
    let initials = "";

    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name.length > 0) {
        initials += name[0].toUpperCase();
      }
    }

    return initials;
  }

  if (isFetchingSites)
    return (
      <div className="flex-center pt-20 bg-[#FEFCFB] h-full w-full">
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
      <div className="bg-[#FEFCFB] grid-flow-row grid grid-cols-1 lg:grid-cols-2 pt-20 min-h-screen">
        <div className="col-span-1 p-5 lg:p-10 ">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="felx flex-col items-start ">
              <h2 className="font-bold text-xl lg:text-2xl">{site?.name}</h2>
              <div className="gap-x-3 flex flex-center">
                <Rate allowHalf defaultValue={siteStars} />
                <p className="font-semibold">{siteStars}</p>
                {session?.user &&
                  (favoured ? (
                    <MdFavorite
                      onClick={() => {
                        setFavoured(false);
                      }}
                      size={30}
                      className="text-[#FA7436] hover:text-[rgba(250,116,54,0.5)] hover:scale-110 duration-300 transition-all cursor-pointer"
                    />
                  ) : (
                    <MdFavoriteBorder
                      onClick={() => {
                        setFavoured(true);
                      }}
                      size={30}
                      className="text-[#222222] hover:text-[rgba(250,116,54,1)] hover:scale-110 duration-300 transition-all cursor-pointer"
                    />
                  ))}
              </div>
            </div>
            <div>
              <button
                type="button"
                className=" font-semibold rounded-lg bg-gradient-to-r from-[#FA7436] to-[#FFB951] py-1.5 px-6 shadow-inner shadow-[rgba(0,0,0,0.25)] text-white transition-all hover:-translate-y-1 hover:translate-x-1 text-center text-sm font-inter flex items-center justify-center"
              >
                Visiter
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
            <div className="flex items-center gap-3 justify-between rounded-2xl py-1.5 px-4 max-w-fit bg-[#D9D9D9]">
              <FaMapMarkerAlt className="text-[#FA7436]" />
              <p className="text-xs text-[#222222]">{site?.wilaya}</p>
            </div>
            <div className="flex items-center gap-3 justify-between rounded-2xl py-1.5 px-4 max-w-fit bg-[#D9D9D9]">
              <GiWavyItinerary className="text-[#FA7436]" />
              <p className="text-xs text-[#222222]">Itinéraire</p>
            </div>
            <div className="flex items-center gap-3 justify-between rounded-2xl py-1.5 px-4 max-w-fit bg-[#D9D9D9]">
              <TfiAlarmClock className="text-[#FA7436]" />
              <p className="text-xs text-[#222222]">{site?.accessTime}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="indent-5 text-sm text-[#222222] leading-relaxed ">
              {site.description}
            </p>
            <div>
              {session?.user && (
                <div className=" mt-4 gap-4 flex-center">
                  <p className="bg-[#FA7436] text-center h-fit w-8 rounded-full p-2 text-sm text-white">
                    {getInitials(session?.user?.name)}
                  </p>
                  <input
                    onChange={(e) => {
                      setCommentaire(e.target.value);
                    }}
                    value={commentaire}
                    type="text"
                    className="py-4 px-6 placeholder:text-xs placeholder:md:text-base border w-[80%] border-gray-500 rounded-2xl"
                    placeholder="Ajouter votre commentaire ..."
                  />
                  <BiSend
                    onClick={submitCommentaire}
                    className={` ${
                      !isSubmittingCommentaire
                        ? "cursor-pointer text-[#FA7436]"
                        : "cursor-not-allowed text-gray-400"
                    }  h-8 w-8`}
                  />
                </div>
              )}
              <div>
                {site?.evals?.length ? (
                  site?.evals?.map((evalu) => {
                    return (
                      <div
                        className="flex mt-4 gap-4 flex-center"
                        key={evalu.user.name}
                      >
                        <p className="bg-[#FA7436] h-fit w-8 rounded-full p-2 text-sm text-white">
                          {getInitials(evalu.user.name)}
                        </p>
                        <div className="bg-[#D9D9D9] h-fit w-[80%] rounded-2xl p-4 text-sm text-[#222222]">
                          {evalu.comment}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex-center m-4">Pas de commentaires .</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-[33rem] p-5 lg:p-10">
          <Swiper
            allowTouchMove={true}
            effect="fade"
            navigation={true}
            loop={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Navigation, EffectFade, Pagination]}
          >
            {site?.images?.map((image, index) => {
              return (
                <SwiperSlide>
                  <img src={image} alt="img_site" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlaceInfos;
