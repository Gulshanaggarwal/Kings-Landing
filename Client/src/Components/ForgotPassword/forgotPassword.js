import {useState} from "react"



export default function ForgotPassword() {

    const [userName,setUserName]=useState("");
    
    return (
        <div className="bg-black-transparent fixed top-0 left-0 w-full h-full text-xs">
            <div className="w-90P py-2 px-2 mx-auto my-28 bg-white rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 float-right cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="text-gray-900 text-xl  font-medium pt-2">Reset your password</h3>
                <p className="text-gray-600 pt-1 pb-4">Enter your email and we'll send you OTP to reset your password.</p>
                <form className="flex flex-col">
                    <input className="rounded-md px-2 py-2 bg-indigo-100 outline-none focus:ring-1 focus:ring-gray-900" type="email" placeholder="Email address" onChange={(e)=>setUserName(e.target.value.trim())}/>
                    <button className="bg-gray-900 text-gray-50 font-Roboto py-2 rounded-md px-3 my-4" type="submit" >Reset Password</button>
                </form>
            </div>
        </div>
    )
}