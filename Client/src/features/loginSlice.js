import { createSlice } from "@reduxjs/toolkit";

const initialState={
    LoginWindow:false
}


export const LoginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        showLogin:(state)=>{
            state.LoginWindow=true;

        },
        hideLogin:(state)=>{
            state.LoginWindow=false;
        }
    }

})


export const {showLogin,hideLogin}=LoginSlice.actions;