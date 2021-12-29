import { configureStore } from "@reduxjs/toolkit";
import { LoadingSlice } from "../features/loadingSlice";
import { NotificationSlice } from "../features/notificationSlice";
import { LoginSlice } from "../features/loginSlice";
import { SideNavSlice } from "../features/sidenavSlice";
import { RegisterSlice } from "../features/registerSlice";
import { registerOTPSlice } from "../features/registerOTPSlice";
import { registerProcessSlice } from "../features/registerOTPProcessSlice";
import { residencyDataSlice } from "../features/residencyDataSlice";
import { bookingSlice } from "../features/bookingSlice";

export const store=configureStore({
    reducer:{
        notification:NotificationSlice.reducer,
        loading:LoadingSlice.reducer,
        login:LoginSlice.reducer,
        sidenavbar:SideNavSlice.reducer,
        register:RegisterSlice.reducer,
        registerOTP:registerOTPSlice.reducer,
        registerProcessSlice:registerProcessSlice.reducer,
        residencyDataSlice:residencyDataSlice.reducer,
        bookingSlice:bookingSlice.reducer
    }
})

