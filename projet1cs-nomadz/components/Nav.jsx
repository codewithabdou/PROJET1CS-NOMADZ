"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const user = false;

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between bg-gradient-to-b from-gray-800 to-transparent h-16 w-full lg:px-20 px-10 py-6">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">NomaDz</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden ">
        {user ? (
          <div className="flex flex-center gap-3 md:gap-5">
            <Link href="/map">
              <p className="dropdown_link cursor-pointer">Map</p>
            </Link>
            <Link href="/visite">
              <p className="dropdown_link cursor-pointer">Visite</p>
            </Link>
            <button type="button" className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/profile.png"
                width={37}
                height={37}
                className="rounded-full cursor-pointer"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <div className="flex flex-center gap-3 md:gap-5">
            <Link href="/map">
              <p className="dropdown_link cursor-pointer">Map</p>
            </Link>
            <Link href="/visite">
              <p className="dropdown_link cursor-pointer">Visite</p>
            </Link>
            <button type="button" className="outline_btn">
              Sign in
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {user ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.png"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link href="/profile">
                  <p
                    className="dropdown_link cursor-pointer"
                    onClick={() => {
                      setToggleDropdown(false);
                    }}
                  >
                    Profile
                  </p>
                </Link>
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
                  }}
                  className="mt-5 w-full outline_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                SignIn();
              }}
              className="outline_btn"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
