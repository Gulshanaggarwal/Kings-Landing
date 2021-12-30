import { createSlice } from "@reduxjs/toolkit";

const initialState={
    bookingForm:false,
    data:null
}



export const bookingSlice=createSlice({
    name:"bookingSlice",
    initialState,
    reducers:{
        showBookingForm:(state,{payload})=>{
            state.bookingForm=true;
            state.data=payload.data;
        },
        hideBookingForm:(state)=>{
            state.bookingForm=false;
        }
    }

})


export const {showBookingForm,hideBookingForm}=bookingSlice.actions;