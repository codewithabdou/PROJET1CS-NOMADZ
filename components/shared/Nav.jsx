"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { MdCircleNotifications } from "react-icons/md";
import LoginModal from "@components/LoginModal";
import SignUpModal from "@components/SignUpModal";

const Nav = () => {
  const [user, setUser] = useState(true);

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [y, setY] = useState(0);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleNavigation = (e) => {
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <nav
      className={`flex-between fixed top-0 z-[9999] ${
        y > 50
          ? "bg-[rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-gray-800 to-transparent"
      }   h-16 w-full lg:px-20 px-10 py-6 `}
    >
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
      <SignUpModal
        setIsLoginModalOpen={setIsLoginModalOpen}
        isSignUpModalOpen={isSignUpModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="object-contain h-14 w-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden ">
        {user ? (
          <div className="flex flex-center gap-3 md:gap-5">
            <Link href="/map">
              <p className="relative text-sm font-inter text-white hover:text-[#FA7436] font-medium transition duration-300 hover:-translate-y-1 after:absolute after:bottom-0 after:bg-white flex-center after:h-[1px] after:transition after:duration-300 after:w-[80%] after:scale-x-0 hover:after:scale-x-100 cursor-pointer">
                Map
              </p>
            </Link>
            <Link href="/visite">
              <p className="relative text-sm font-inter text-white hover:text-[#FA7436] font-medium transition duration-300 hover:-translate-y-1 after:absolute after:bottom-0 after:bg-white flex-center after:h-[1px] after:transition after:duration-300 after:w-[80%] after:scale-x-0 hover:after:scale-x-100 cursor-pointer">
                Visite
              </p>
            </Link>
            <button
              onClick={() => setUser(false)}
              type="button"
              className="outline_btn"
            >
              Se déconneter
            </button>
            <MdCircleNotifications
              size={40}
              className="text-white cursor-pointer  "
            />
          </div>
        ) : (
          <div className="flex flex-center gap-3 md:gap-5">
            <Link href="/map">
              <p className="relative text-sm font-inter text-white hover:text-[#FA7436] font-medium transition duration-300 hover:-translate-y-1 after:absolute after:bottom-0 after:bg-white flex-center after:h-[1px] after:transition after:duration-300 after:w-[80%] after:scale-x-0 hover:after:scale-x-100 cursor-pointer">
                Map
              </p>
            </Link>
            <Link href="/visite">
              <p className="relative text-sm font-inter text-white hover:text-[#FA7436] font-medium transition duration-300 hover:-translate-y-1 after:absolute after:bottom-0 after:bg-white flex-center after:h-[1px] after:transition after:duration-300 after:w-[80%] after:scale-x-0 hover:after:scale-x-100 cursor-pointer">
                Visite
              </p>
            </Link>
            <button
              type="button"
              onClick={() => {
                showLoginModal();
              }}
              className="outline_btn"
            >
              Se connecter
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {user ? (
          <div className="flex">
            {toggleDropdown ? (
              <>
                <GiCancel
                  size={25}
                  className="text-white"
                  onClick={() => setToggleDropdown(false)}
                />
                <div className="dropdown ">
                  <Link href="/map">
                    <p
                      className="dropdown_link cursor-pointer"
                      onClick={() => {
                        setToggleDropdown(false);
                      }}
                    >
                      Map
                    </p>
                  </Link>
                  <Link href="/visite">
                    <p
                      className="dropdown_link cursor-pointer"
                      onClick={() => {
                        setToggleDropdown(false);
                      }}
                    >
                      Visite
                    </p>
                  </Link>
                  <p
                    className="dropdown_link cursor-pointer"
                    onClick={() => {
                      setToggleDropdown(false);
                    }}
                  >
                    Notifications
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setUser(false);
                    }}
                    className="mt-5 w-[90%] black_btn"
                  >
                    Se déconnecter
                  </button>
                </div>
              </>
            ) : (
              <GiHamburgerMenu
                size={25}
                className="text-white"
                onClick={() => setToggleDropdown(true)}
              />
            )}
          </div>
        ) : (
          <>
            <div className="flex">
              {toggleDropdown ? (
                <>
                  <GiCancel
                    size={25}
                    className="text-white"
                    onClick={() => setToggleDropdown(false)}
                  />
                  <div className="dropdown ">
                    <Link href="/map">
                      <p
                        className="dropdown_link cursor-pointer"
                        onClick={() => {
                          setToggleDropdown(false);
                        }}
                      >
                        Map
                      </p>
                    </Link>
                    <Link href="/visite">
                      <p
                        className="dropdown_link cursor-pointer"
                        onClick={() => {
                          setToggleDropdown(false);
                        }}
                      >
                        Visite
                      </p>
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        showLoginModal();
                      }}
                      className="mt-5 w-[80%] black_btn"
                    >
                      Se connecter
                    </button>
                  </div>
                </>
              ) : (
                <GiHamburgerMenu
                  size={25}
                  className="text-white"
                  onClick={() => setToggleDropdown(true)}
                />
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
