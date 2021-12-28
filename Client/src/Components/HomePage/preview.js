import React, { useContext } from "react";
import { LocalStateContext } from "../../Store/localStateProvider";
import { motion } from "framer-motion";

export default function GalleryPreview(){
  const [state, dispatch] = useContext(LocalStateContext);
  const { galleryPreview,previewData } = state;
  const {ImageSrc,ImageAlt}=previewData!==null ? previewData : "";
  return (
    galleryPreview && (
      <section className="fixed left-0 top-0 bg-sideNavWrapper w-full h-full text-gray-100">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 float-right m-4 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={()=>{
                // dispatch call

                dispatch({
                    type:"handlePreview",
                    payload:{galleryPreview:null,target:null}
                })
            }}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <motion.div className="clear-right w-5/6 h-imgPreview mx-auto sm:w-1/2"
          initial={{scale:0.1}}
          animate={{scale:1}}
          transition={{delay:0.1,duration:0.5,stiffness:200,type:"spring"}}>
            <img src={ImageSrc} alt={ImageAlt} className="w-full h-full rounded-md" />
          </motion.div>
        </div>
      </section>
    )
  );
};
