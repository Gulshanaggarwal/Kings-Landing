import React, { useState } from 'react'
import { hideRegister } from '../../../features/registerSlice'
import { showLogin } from '../../../features/loginSlice';
import { useDispatch } from 'react-redux'
import { useMutation } from "react-query"
import {showRegisterOTP} from "../../../features/registerOTPSlice"
import { setregisterProcessId } from '../../../features/registerOTPProcessSlice';
import { createLoaders, destroyLoaders } from '../../../features/loadingSlice';
import { createAlert } from '../../../features/notificationSlice';


const register = (body) => {
    return fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((res)=>res.json())
}


export default function Register() {

    const [fullName, setfullName] = useState("");
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const mutate = useMutation((body) => register(body), {
        onSuccess(data) {
            dispatch(destroyLoaders());
           const {status,message}=data;
           if(status==="ok" && data.OTPSent){
               const {processId}=data;
            dispatch(setregisterProcessId({processId}));  // set a process Id for registration
            dispatch(hideRegister());        // hide register window
            dispatch(showRegisterOTP());     // show verify OTP window for registration

           }
           else{
            dispatch(createAlert({
                message: message,
                type: "info"
            }))
           }
        },
        onError(error) {
            dispatch(destroyLoaders());
            dispatch(createAlert({
                message: "Error",
                type: "error"
            }))
        }
    })

    const handleSignup = async (e) => {
        e.preventDefault();
        dispatch(createLoaders());
        await mutate.mutate({ fullName, userName, password })
    }
    return (
        <div className="bg-black-transparent fixed top-0 left-0 w-full h-full text-xs">
            <div className="w-5/6 py-3 px-2 my-16 mx-auto bg-white rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 float-right cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => dispatch(hideRegister())}>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div>
                    <h3 className="text-gray-900 text-xl font-medium">Sign Up</h3>
                </div>
                <form className="w-full my-2">
                    <div className="flex flex-col">
                        <label className="py-2">Full Name</label>
                        <input type="text" className="rounded-md px-2 py-2" required onChange={(e) => setfullName(e.target.value.trim())} />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2">Email</label>
                        <input type="email" className="rounded-md px-2 py-2" required onChange={(e) => setuserName(e.target.value.trim())} />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2">Set Password</label>
                        <input type="password" className="rounded-md px-2 py-2" required onChange={(e) => setPassword(e.target.value.trim())} />
                    </div>
                    <button type="submit" className="bg-gray-900 text-gray-50 font-Roboto py-2 rounded-md px-4 my-4" onClick={handleSignup}>Sign up</button>
                </form>
                <div>
                    <span>Already have an account ? </span>
                    <button className="underline" onClick={() => {
                        dispatch(hideRegister())   // hide Register
                        dispatch(showLogin())        // show Login
                    }}>Login</button>
                </div>
            </div>
        </div>
    )
}
