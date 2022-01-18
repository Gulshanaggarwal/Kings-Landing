import {createSlice} from "@reduxjs/toolkit";


const initialState={
    forgotPasswordProcessID:null
}


export const forgotPasswordProcessIDSlice=createSlice({

    name:"forgotPasswordProcessIDSlice",
    initialState,
    reducers:{
        setForgotPasswordProcessID:(state,{payload})=>{
            state.forgotPasswordProcessID=payload.processID;
        }
    }

})


export const {setForgotPasswordProcessID}=forgotPasswordProcessIDSlice.actions;