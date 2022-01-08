import React,{useState} from 'react'
import { hideRegisterOTP } from '../../../features/registerOTPSlice'
import { showLogin } from '../../../features/loginSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { createLoaders, destroyLoaders } from '../../../features/loadingSlice';
import { createAlert } from '../../../features/notificationSlice';

const verifyOTP=(body)=>{
    return fetch("http://localhost:5000/verify-register-OTP",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    }).then((res)=>res.json())
}

export default function RegisterOTP() {

    const [OTP,setOTP]=useState("");
    const processId=useSelector((state)=>state.registerProcessSlice.registerProcessId);

    const dispatch=useDispatch();

    const mutate=useMutation((body)=>verifyOTP(body),{
        onSuccess(data){
            dispatch(destroyLoaders());    // Deactivate Laoding Comp
            const {status,message}=data;
            if(status==="ok"){
                dispatch(createAlert({
                    message: message,
                    type: "success"
                }))
                dispatch(hideRegisterOTP());
                dispatch(showLogin())
            }
            else{
                dispatch(createAlert({
                    message: message,
                    type: "error"
                }))
            }

        },
        onError(error){
            dispatch(destroyLoaders());    // Deactivate Laoding Comp
            dispatch(createAlert({
                message: "Error",
                type: "error"
            }))
           
        }
    })


    const handleVerify=async(e)=>{
        e.preventDefault();
        dispatch(createLoaders());  // activate loading component
        await mutate.mutate({OTP,processId})
    }
    return (
        <div className="bg-black-transparent fixed top-0 left-0 w-full h-full text-xs">
            <div className="w-90P py-2 px-2 mx-auto my-28 bg-white rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 float-right cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={()=>dispatch(hideRegisterOTP())}>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="font-medium  text-center">Enter OTP</h3>
                <p className="text-center text-green-500 py-1">OTP sent successfully !</p>
                <form className="flex flex-col w-5/6 mx-auto my-4">
                    <input type="text" className="text-center py-2 outline-none border-1 border-indigo-500 rounded-md" placeholder="Enter 6 digit OTP" required onChange={(e)=>setOTP(e.target.value.trim())}/>
                    <button type="submit" className="w-full py-2 my-2 bg-indigo-500 text-white font-Roboto rounded-md" onClick={handleVerify}>Verify OTP</button>
                </form>
            </div>
        </div>
    )
}
