import {createSlice} from "@reduxjs/toolkit"

const initialState={
    alerts:[]
}

export const NotificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{
        createAlert:(state,action)=>{
            state.alerts.push({
                message:action.payload.message,
                type:action.payload.type
            })

        },
        destoryAlert:(state)=>{
            state.alerts=[]
        }
    }
})


export const {createAlert,destoryAlert}=NotificationSlice.actions;