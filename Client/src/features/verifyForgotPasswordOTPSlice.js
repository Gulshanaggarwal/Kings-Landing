import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isForgotPasswordOTPPage:false
}



export const verifyForgotPasswordOTPSlice=createSlice({
    name:"verifyForgotPasswordOTPPage",
    initialState,
    reducers:{
        showForgotPasswordOTPPage:(state)=>{
            state.isForgotPasswordOTPPage=true
        },
        hideForgotPasswordOTPPage:(state)=>{
            state.isForgotPasswordOTPPage=false
        }
    }
})


export const {showForgotPasswordOTPPage,hideForgotPasswordOTPPage}=verifyForgotPasswordOTPSlice.actions;