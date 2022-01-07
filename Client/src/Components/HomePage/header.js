import React from "react";
import { showLogin } from "../../features/loginSlice";
import { useDispatch } from "react-redux";
import { showSideNav } from "../../features/sidenavSlice";
import logo from "../../Images/logo.svg"
import Logo from "../Logo/logo";

export default function Header() {

  const dispatch = useDispatch();

  return (
    <main className="bg-main-image bg-no-repeat bg-cover h-screen text-white">
      <header>
        <div className="flex justify-between items-center py-4 px-2">
          <Logo/>
          <div
            className="mx-2 cursor-pointer md:hidden"
            onClick={() => {
              dispatch(showSideNav())
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <nav className="hidden mx-4 my-2 md:flex">
            <ul className="flex items-center">
              <li className="mx-3">
                <a href="#home" className="border-b-2 border-indigo-600 py-2">
                  Home
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#about"
                  className="border-b-2 border-transparent hover:border-indigo-500 py-2"
                >
                  About
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#gallery"
                  className="border-b-2 border-transparent hover:border-indigo-500 py-2"
                >
                  Gallery
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#testimonial"
                  className="border-b-2 border-transparent hover:border-indigo-500 py-2"
                >
                  Testimonials
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#contact"
                  className="bg-gray-100 rounded-md font-semibold px-4 py-2 text-black hover:bg-indigo-400 hover:text-white"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center my-28">
        <h2 className="font-bold text-xl text-center HomePageAfter330px:text-2xl sm:text-4xl">
          Welcome to Kings Landing!
        </h2>
        <h3 className="font-medium text-gray-200 text-base text-center px-2 my-4 HomePageAfter330px:text-xl sm:text-3xl sm:my-8">
          Students Comes as Strangers,<br></br>Stay as a Family
        </h3>
        <button className="px-4 py-2 rounded-xl bg-indigo-500 text-gray-50 font-Roboto" onClick={() => dispatch(showLogin())}>Get Started</button>
      </div>
    </main>
  );
};
