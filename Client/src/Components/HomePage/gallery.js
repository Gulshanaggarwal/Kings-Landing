import React, { useContext } from "react";
import { LocalStateContext } from "../../Store/localStateProvider";
import { Data as GalleryData } from "../../StaticData/galleryData";

export default function Gallery(){
  const [state, dispatch] = useContext(LocalStateContext); // fetch state

  return (
    <section className="py-6 bg-gray-100" id="gallery">
      <h2 className="font-extrabold text-center text-indigo-500 text-3xl py-8">
        GALLERY
      </h2>
      <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
        {GalleryData.map((ele, index) => {
          return (
            <img
              src={ele.imageSrc}
              alt={ele.imageAlt}
              className={ele.imageClassName}
              key={index}
              onClick={(event) => {
                const { target } = event; // target grab

                const temp = { ...state, galleryPreview: true };
                const { galleryPreview } = temp;

                // dispatch call

                dispatch({
                  type: "handlePreview",
                  payload: { galleryPreview, target },
                });
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
