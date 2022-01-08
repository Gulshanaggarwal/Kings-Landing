import React, { useState } from 'react'
import { hideLogin } from '../../features/loginSlice'
import { useDispatch} from 'react-redux';
import { showRegister } from '../../features/registerSlice';
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { createLoaders, destroyLoaders } from '../../features/loadingSlice';
import { createAlert } from '../../features/notificationSlice';



const login = (body) => {
    return fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((res) => res.json())

}

export default function Login() {

    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate("");

    const dispatch = useDispatch();

    const mutate = useMutation((body) => login(body), {
        onSuccess(data) {
            dispatch(destroyLoaders())
            const { status,message} = data;
            if (status === 'ok') {
                localStorage.setItem("__auth__token", data.token);
                navigate("/dashboard")           // navigate to dashboard
            }
            else{
                dispatch(createAlert({
                    message: message,
                    type: "error"
                }))
            }
        },
        onError(error) {
            dispatch(destroyLoaders())
            dispatch(createAlert({
                message: "Error occurred try again!",
                type: "error"
            }))
        },
    })

   
    // func handle Login

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(createLoaders());
        await mutate.mutate({ userName, password });

    }
    return (
        <div className="bg-black-transparent fixed top-0 left-0 w-full h-full text-xs">
            <div className="w-5/6 py-4 px-2 mx-auto my-16 bg-white rounded-md sm:w-2/3 md:w-1/2 xl:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 float-right cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => dispatch(hideLogin())}>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div>
                    <h3 className="text-gray-900 text-xl  font-medium">Sign in</h3>
                    <div className="py-4">
                        <span>Or</span>
                        <button className="mx-2 underline" onClick={() => {
                            dispatch(hideLogin());   // hide Login
                            dispatch(showRegister());
                        }}>Register for an account</button>
                    </div>
                </div>
                <form className="w-full my-2">
                    <div className="flex flex-col">
                        <label className="py-2">Email</label>
                        <input type="email" className="rounded-md px-2 py-2 bg-indigo-100 outline-none focus:ring-1 focus:ring-gray-900" onChange={(e) => setuserName(e.target.value.trim())} />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2">Password</label>
                        <input type="password" className="rounded-md px-2 py-2 bg-indigo-100 outline-none focus:ring-1 focus:ring-gray-900" onChange={(e) => setPassword(e.target.value.trim())} />
                    </div>
                    <button type="submit" className="bg-gray-900 text-gray-50 font-Roboto py-2 rounded-md px-3 my-4" onClick={handleLogin}>Sign in</button>
                </form>
                <button>Forgot Password?</button>
            </div>
        </div>
    )
}
