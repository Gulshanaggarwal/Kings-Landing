import { createSlice } from "@reduxjs/toolkit";

const initialState={
    sideNav:false
}


export const SideNavSlice=createSlice({
    name:'sidenavbar',
    initialState,
    reducers:{
        showSideNav:(state)=>{
            state.sideNav=true
        },
        hideSideNav:(state)=>{
            state.sideNav=false
        }
    }

})


export const {showSideNav,hideSideNav}=SideNavSlice.actions