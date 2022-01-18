import React from 'react'
import {useMutation} from "react-query";
import { useSelector } from 'react-redux';


const verifyPassword=(body)=>{
    return fetch("http://localhost:3000/verify-forgot-password",{
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
    const processID=useSelector((state)=>state.forgotPasswordProcessIDSlice.processID);


    const mutation=useMutation(()=>verifyPassword());



    const handleVerify=async(e)=>{
        e.preventDefault();
        if(newPassword===confirmNewPassword){
            await mutation.mutate({OTP,newPassword,processID})
        }
        else{
            // createAlert
        }


    }

    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 float-right cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => dispatch(hideRegisterOTP())}>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="font-medium  text-center">Enter OTP</h3>
                <p className="text-center text-green-500 py-1">OTP sent successfully !</p>
                <form>
                    <input type="text" className="text-center py-2 outline-none border-1 border-indigo-500 rounded-md" placeholder="Enter 6 digit OTP" required onChange={(e) => setOTP(e.target.value.trim())} />
                    <div>
                        <label>Set new password</label>
                        <input className="text-center py-2 outline-none border-1 border-indigo-500 rounded-md" type="password" placeholder='' onChange={(e)=>setNewPassword(e.target.value.trim())} />
                    </div>
                    <div>
                        <label>Confirm new password</label>
                        <input className="text-center py-2 outline-none border-1 border-indigo-500 rounded-md" type="password" placeholder='' onChange={(e)=>setConfirmNewPassword(e.target.value.trim())} />
                    </div>
                    <button type="submit" className="w-full py-2 my-2 bg-indigo-500 text-white font-Roboto rounded-md" onClick={handleVerify}>Verify OTP</button>
                </form>
            </div>
        </div>
    )
}
