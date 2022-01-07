import React from "react";
import AboutSvg from "../../Images/About-us.svg";

export default function About(){
  return (
    <section className="px-2 py-4 bg-gray-50 text-xs" id="about">
      <div className="flex flex-col justify-center items-center px-4 bg-gray-100  shadow-inner sm:flex-row">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-extrabold text-3xl py-8 text-center text-indigo-500 sm:text-justify">About us</h2>
          <p className="text-gray-900 pt-4 pb-8 font-Roboto leading-7 text-center sm:text-justify">
            Kings Landing is a global platform that empowers entrepreneurs and small
            businesses with hotels and homes by providing full stack technology
            that increases earnings and eases operations. Bringing affordable
            and trusted accommodation that guests can book instantly.
          </p>
        </div>
        <img src={AboutSvg} alt="about-us" className="w-1/2 hidden sm:block" />
      </div>
    </section>
  );
};
