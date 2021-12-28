import { createSlice } from "@reduxjs/toolkit";


const initialState={
    registerOTPWindow:false
}

export const registerOTPSlice=createSlice({
    name:"registerOTP",
    initialState,
    reducers:{
        showRegisterOTP:(state)=>{
            state.registerOTPWindow=true;
        },
        hideRegisterOTP:(state)=>{
            state.registerOTPWindow=false;
        }
    }

})

export const {showRegisterOTP,hideRegisterOTP}=registerOTPSlice.actions;