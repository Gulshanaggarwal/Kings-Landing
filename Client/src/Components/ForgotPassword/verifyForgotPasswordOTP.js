import {useState} from 'react'
import {useMutation} from "react-query";
import { useSelector,useDispatch } from 'react-redux';
import { createLoaders, destroyLoaders } from '../../features/loadingSlice';
import { showLogin } from '../../features/loginSlice';
import { createAlert } from '../../features/notificationSlice';
import { hideForgotPasswordOTPPage } from '../../features/verifyForgotPasswordOTPSlice';


const verifyPassword=(body)=>{
    return fetch("http://localhost:5000/verify-forgot-password",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    }).then(res=>res.json())

}

export default function VerifyForgotPasswordOTP() {

    const [OTP,setOTP]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [confirmNewPassword,setConfirmNewPassword]=useState("");
    const processID=useSelector((state)=>state.forgotPasswordProcessID.forgotPasswordProcessID);

    console.log("pid",processID);

    const dispatch=useDispatch();

    const mutation=useMutation((body)=>verifyPassword(body),{
        onSuccess(data){
            dispatch(destroyLoaders())
            const {status,message}=data;
            if(status==="ok"){
               dispatch(createAlert({
                   message,
                   type:"success"
               }))
               dispatch(hideForgotPasswordOTPPage());
               dispatch(showLogin());
            }
            else{
                dispatch(createAlert({
                    message,
                    type:"error"
                }))
            }
        },
        onError(){
            dispatch(destroyLoaders())
            dispatch(createAlert({
                message:"Error Occurred try again!",
                type:"error"
            }))
        }
    });



    const handleVerify=async(e)=>{
        e.preventDefault();
        if(newPassword===confirmNewPassword){
            dispatch(createLoaders())
            await mutation.mutate({OTP,newPassword,processID})
        }
        else{
            dispatch(createAlert({
                message:"New Password and Confirm Password must be same",
                type:"error"
            }))
        }


    }

    return (
        <div className="bg-black-transparent fixed top-0 left-0 w-full h-full text-xs">
            <div className="w-90P py-2 px-2 mx-auto my-28 bg-white rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 float-right cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => dispatch(hideForgotPasswordOTPPage())}>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="font-medium  text-center">Enter OTP</h3>
                <p className="text-center text-green-500 py-1">OTP sent successfully !</p>
                <form className='flex flex-col space-y-2 py-4'>
                    <input type="text" className="w-full text-center py-2 outline-none border-1 border-indigo-500 rounded-md" placeholder="Enter 6 digit OTP" required onChange={(e) => setOTP(e.target.value.trim())} />
                    <div className='flex flex-col space-y-2'>
                        <label>Set new password</label>
                        <input className="text-center py-2 outline-none border-1 border-indigo-500 rounded-md" type="password" placeholder='' onChange={(e)=>setNewPassword(e.target.value.trim())} />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Confirm new password</label>
                        <input className="text-center py-2 outline-none border-1 border-indigo-500 rounded-md" type="password" placeholder='' onChange={(e)=>setConfirmNewPassword(e.target.value.trim())} />
                    </div>
                    <button type="submit" className="w-full py-2 my-2 bg-indigo-500 text-white font-Roboto rounded-md" onClick={handleVerify}>Verify OTP</button>
                </form>
            </div>
        </div>
    )
}
