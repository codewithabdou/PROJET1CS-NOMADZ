import { GrInstagram, GrFacebook, GrTwitter, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#F4EAE5]">
      <div className=" xl:space-x-10 xl:py-10 py-4 px-6 space-y-4 xl:space-y-0 xl:px-20 flex flex-col xl:flex-row justify-between  ">
        <div className="w-full xl:w-1/2 flex flex-row justify-evenly   ">
          <div className=" flex w-1/2   flex-col items-start gap-y-2 justify-center px-4">
            <img
              src="assets/images/logo.png"
              className="h-14 w-auto object-contain"
              alt=""
            />
            <p className="text-left text-xs text-gray-700 mb-2">
              We believe brand interaction is key in communication. Real
              innovations and a positive.
            </p>
            <div className="flex w-full space-x-4">
              <a href="https://www.instagram.com/abdouuu.h/" target="_blank">
                <GrInstagram className="text-orange-500 hover:-translate-y-[1px] transition-all duration-300 hover:text-orange-800" />
              </a>
              <a href="https://www.facebook.com/abderrahmene.hbch" target="_blank">
                <GrFacebook className="text-orange-500 hover:-translate-y-[1px] transition-all duration-300 hover:text-orange-800" />
              </a>
              <a href="">
                <GrTwitter className="text-orange-500 hover:-translate-y-[1px] transition-all duration-300 hover:text-orange-800" />
              </a>
              <a href="https://www.linkedin.com/in/khaled-abderrahm%C3%A8ne-habouche-82605626b/" target="_blank">
                <GrLinkedin className="text-orange-500 hover:-translate-y-[1px] transition-all duration-300 hover:text-orange-800" />
              </a>
            </div>
          </div>
          <div className="space-y-3   w-1/2 md:pl-16 px-8 pt-4">
            <p className="font-semibold">Get in touch</p>
            <input
              type="email"
              className="bg-gray-100 border-black border-[1px] text-xs xl:w-36 w-32 text-black px-4 py-2"
              placeholder="Your email here ..."
            />
            <button
              type="button"
              className=" border font-normal xl:w-36 w-32 border-[#FA7436] bg-[#FA7436] py-1.5 xl:px-10 px-6 text-white transition-all hover:bg-white hover:-translate-y-1 hover:translate-x-1 hover:text-[#FA7436] text-center text-sm  flex items-center justify-center"
            >
              Get Acces
            </button>
          </div>
        </div>
        <div className=" xl:space-x-4 xl:w-1/2 w-full justify-around flex flex-row">
          <div className="space-y-2 pt-4 ">
            <p className="font-semibold">About Us</p>
            <ul className="space-y-1">
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Feautures</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">FAQ's</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">News</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Pricing</li>
            </ul>
          </div>
          <div className="space-y-2 pt-4">
            <p className="font-semibold">Company</p>
            <ul className="space-y-1">
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Core values</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Partner w/ us</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Blog</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Contact</li>
            </ul>
          </div>
          <div className="space-y-2 pt-4">
            <p className="font-semibold">Support</p>
            <ul className="space-y-1">
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Support centers</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Feddback</li>
              <li className="text-xs text-gray-700 relative after:absolute after:left-0 after:bottom-0 hover:text-black duration-300 after:w-full after:transition-all after:duration-300 after:scale-x-0 after:bg-black after:h-[1px] hover:after:scale-x-100 transition-all cursor-pointer w-fit">Accesibility</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-600 h-[0.05rem]"></div>
      <p className="text-xs text-gray-700 py-2 flex-center w-full ">ITouch - NomaDz © 2023 All Right Reserved</p>
    </div>
  );
};

export default Footer;
