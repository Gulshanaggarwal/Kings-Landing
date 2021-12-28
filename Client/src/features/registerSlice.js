import { createSlice } from "@reduxjs/toolkit";


const initialState={
    registerWindow:false
}


export const RegisterSlice=createSlice({
    name:"register",
    initialState,
    reducers:{
        showRegister:(state)=>{
            state.registerWindow=true;
        },
        hideRegister:(state)=>{
            state.registerWindow=false;
        }
    }

})


export const {showRegister,hideRegister}=RegisterSlice.actions;