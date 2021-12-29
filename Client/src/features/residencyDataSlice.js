import { createSlice } from "@reduxjs/toolkit";

const initialState={
    residency:[]
}




export const residencyDataSlice=createSlice({
    name:"residencyDataSlice",
    initialState,
    reducers:{
        setResidencyData:(state,{payload})=>{


            state.residency=payload.data


        }
    }

})


export const {setResidencyData}=residencyDataSlice.actions;