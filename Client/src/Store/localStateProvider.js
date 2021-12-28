import { createContext, useReducer } from "react";

export const LocalStateContext = createContext();

const initialState = {
  galleryPreview: null,
  previewData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "handlePreview":
      const { galleryPreview, target } = action.payload;
      const { src, alt } = target !== null ? target : "";
      const temp = {
        ImageSrc: src,
        ImageAlt: alt,
      };
      return {
        ...state,
        galleryPreview: galleryPreview,
        previewData: temp,
      };

    

    default:
      return state;
  }
};

export default function LocalStateProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LocalStateContext.Provider value={[state, dispatch]}>
      {props.children}
    </LocalStateContext.Provider>
  );
}
