import React from "react";
import { useDispatch } from "react-redux";
import { hideSideNav } from "../../features/sidenavSlice";
import { motion } from "framer-motion";


export default function SideNav() {

  const dispatch = useDispatch();

  return (
    <nav className="flex justify-end absolute left-0 top-0 bg-sideNavWrapper w-full h-full text-gray-100 md:hidden" onClick={(e) => {
      dispatch(hideSideNav());  // hide side navbar
    }}>
      <motion.div className="w-sideNavwidth bg-indigo-600 h-full drop-shadow-xl"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1, duration: 0.5, stiffness: 100 }} onClick={(e)=>e.stopPropagation()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-2 my-3 float-right cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => {
            dispatch(hideSideNav())
          }}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <ul className="clear-right py-8 space-y-6">
          <li className="border-l-2 border-transparent hover:border-gray-100 bg-gray-800 py-1">
            <a href="#home" className="flex items-center px-4 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-gray-100 hover:bg-gray-800 py-1" onClick={() => dispatch({
            type: 'handleToogle',
            payload: null
          })}>
            <a href="#about" className="flex items-center px-4 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>About us</span>
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-gray-100 hover:bg-gray-800 py-1" onClick={() => dispatch({
            type: 'handleToogle',
            payload: null
          })}>
            <a href="#gallery" className="flex items-center px-4 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Gallery</span>
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-gray-100 hover:bg-gray-800 py-1" onClick={() => dispatch({
            type: 'handleToogle',
            payload: null
          })}>
            <a href="#testimonial" className="flex items-center px-4 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                stroke="currentColor"
              >
                <path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z" strokeWidth={2}></path>
              </svg>
              <span>Testimonials</span>
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-gray-100 hover:bg-gray-800 py-1" onClick={() => dispatch({
            type: 'handleToogle',
            payload: null
          })}>
            <a href="#contact" className="flex items-center px-4 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};
