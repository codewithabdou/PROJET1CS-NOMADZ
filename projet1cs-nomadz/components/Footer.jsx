import { GrInstagram, GrFacebook, GrTwitter, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#FFE4C0]">
      <div className="bg-[#FFE4C0] xl:space-x-10 xl:py-10 py-4 px-6 space-y-4 xl:space-y-0 xl:px-20 flex flex-col xl:flex-row justify-between  ">
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
              <a href="">
                <GrInstagram className="text-orange-500" />
              </a>
              <a href="">
                <GrFacebook className="text-orange-500" />
              </a>
              <a href="">
                <GrTwitter className="text-orange-500" />
              </a>
              <a href="">
                <GrLinkedin className="text-orange-500" />
              </a>
            </div>
          </div>
          <div className="space-y-3   w-1/2 md:pl-16 px-8 pt-4">
            <p className="font-semibold">Get in touch</p>
            <input
              type="text"
              className="bg-gray-100 text-xs xl:w-36 w-32 text-[#B3BAC5] px-4 py-2"
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
              <li className="text-xs text-gray-700">Feautures</li>
              <li className="text-xs text-gray-700">FAQ's</li>
              <li className="text-xs text-gray-700">News</li>
              <li className="text-xs text-gray-700">Pricing</li>
            </ul>
          </div>
          <div className="space-y-2 pt-4">
            <p className="font-semibold">Company</p>
            <ul className="space-y-1">
              <li className="text-xs text-gray-700">Core values</li>
              <li className="text-xs text-gray-700">Partner w/ us</li>
              <li className="text-xs text-gray-700">Blog</li>
              <li className="text-xs text-gray-700">Contact</li>
            </ul>
          </div>
          <div className="space-y-2 pt-4">
            <p className="font-semibold">Support</p>
            <ul className="space-y-1">
              <li className="text-xs text-gray-700">Support centers</li>
              <li className="text-xs text-gray-700">Feddback</li>
              <li className="text-xs text-gray-700">Accesibility</li>
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
