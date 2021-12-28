import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loaders:[]
}

export const LoadingSlice=createSlice({
    name:"loading",
    initialState,
    reducers:{
        createLoaders:(state)=>{
            state.loaders.push(state.loaders.length+1);
        },
        destroyLoaders:(state)=>{
            state.loaders=[]
        }
    }

})

export const {createLoaders,destroyLoaders}=LoadingSlice.actions;