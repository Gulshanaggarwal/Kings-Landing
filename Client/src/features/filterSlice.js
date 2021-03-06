import { createSlice } from "@reduxjs/toolkit";

const initialState={
    location:null
}



export const filterSlice=createSlice({
    name:"filterBarSlice",
    initialState,
    reducers:{
        setFilterState:(state,{payload})=>{
            state.location=payload.location;
        }
    }
    
})


export const {setFilterState}=filterSlice.actions;