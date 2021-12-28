import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux";



export default function Loader(){
  const {loaders}=useSelector((state)=>state.loading);
  const [show,setShow]=useState(false);


  useEffect(() => {
    if(loaders.length>0){
      setShow(true)
    }
    else{
      setShow(false);
    }
  }, [loaders])

   


  return show &&(
    <div className="bg-sideNavWrapper w-full h-full fixed top-0 left-0 flex flex-col justify-center items-center z-auto">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
      <p className="text-white py-1">Loading...</p>
    </div>
  );
};
