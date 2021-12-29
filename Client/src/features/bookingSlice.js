import { createSlice } from "@reduxjs/toolkit";

const initialState={
    bookingForm:false
}



export const bookingSlice=createSlice({
    name:"bookingSlice",
    initialState,
    reducers:{
        showBookingForm:(state)=>{
            state.bookingForm=true;
        },
        hideBookingForm:(state)=>{
            state.bookingForm=false;
        }
    }

})


export const {showBookingForm,hideBookingForm}=bookingSlice.actions;