import { createSlice } from "@reduxjs/toolkit";

const initialState={
    registerProcessId:null
}


export const registerProcessSlice=createSlice({
    name:"registerProcessSlice",
    initialState,
    reducers:{
        setregisterProcessId:(state,action)=>{
            const {processId}=action.payload;
            state.registerProcessId=processId;
            
        },
    }
})


export const {setregisterProcessId}=registerProcessSlice.actions;
