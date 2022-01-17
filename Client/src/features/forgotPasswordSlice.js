import { createSlice } from "@reduxjs/toolkit";

const initialState={
    forgotPasswordWindow:false
}


export const ForgotPasswordSlice=createSlice({
    name:"forgotPassword",
    initialState,
    reducers:{
        showForgotPassword:(state)=>{
            state.forgotPasswordWindow=true
        },
        hideForgotPassword:(state)=>{
            state.forgotPasswordWindow=false
        }
    }

})


export const {showForgotPassword}=ForgotPasswordSlice.actions;