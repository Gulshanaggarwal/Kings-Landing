import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    forgotPasswordProcessID: null
}


export const forgotPasswordProcessIDSlice = createSlice({

    name: "forgotPasswordProcessID",
    initialState,
    reducers: {
        setForgotPasswordProcessID: (state, action) => {
            const { processID } = action.payload;
            state.forgotPasswordProcessID = processID;
        }
    }

})


export const { setForgotPasswordProcessID } = forgotPasswordProcessIDSlice.actions;