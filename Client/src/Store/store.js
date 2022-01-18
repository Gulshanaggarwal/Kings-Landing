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
import { filterSlice } from "../features/filterSlice";
import { ForgotPasswordSlice } from "../features/forgotPasswordSlice";
import { forgotPasswordProcessIDSlice } from "../features/forgotPassProcessIDSlice";
import { verifyForgotPasswordOTPSlice } from "../features/verifyForgotPasswordOTPSlice";

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
        bookingSlice:bookingSlice.reducer,
        filterBarSlice:filterSlice.reducer,
        forgotPassword:ForgotPasswordSlice.reducer,
        forgotPasswordProcessIDSlice:forgotPasswordProcessIDSlice.reducer,
        verifyForgotPasswordOTPPage:verifyForgotPasswordOTPSlice.reducer
    }
})

