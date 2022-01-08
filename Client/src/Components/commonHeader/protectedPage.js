import React, { useState } from 'react'
import Logo from '../Logo/logo'
import { Link, useNavigate } from "react-router-dom"

export default function ProtectedPageHeader() {

    const [nav, setNav] = useState("hidden");
    const [rotation, setRotation] = useState("");
    const navigate = useNavigate("/");


    const handleLogout = () => {

        localStorage.removeItem("__auth__token");
        navigate("/");

    }
    return (
        <header className="bg-gray-900 shadow-2xl">
            <div className="flex justify-between px-2 py-4 sm:px-3">
                <Logo />
                <div className='relative flex justify-center' onClick={() => {
                    if (nav === "hidden") {
                        setNav("block");
                        setRotation("rotate-180")
                    }
                    else {
                        setNav("hidden");
                        setRotation("");
                    }
                }}>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <svg className={`h-1 w-1 transform ${rotation}`} viewBox="0 0 8 5" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M1.414 0C.524 0 .077 1.077.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414z"></path></svg>
                    </div>
                    <nav className={`absolute text-xs right-1 mt-7 bg-white rounded-md z-50 ${nav} shadow-2xl`}>
                        <ul className='py-2'>
                            <Link className='w-full' to="/dashboard"><li className='pl-2 pr-8 py-2 hover:bg-gray-200'>Dashboard</li></Link>
                            <Link className='w-full' to="/profile"><li className='pl-2 pr-8 py-2 hover:bg-gray-200'>Profile</li></Link>
                            <li className='pl-2 pr-8 py-2 hover:bg-gray-200 cursor-pointer' onClick={handleLogout}><button type='button'>Logout</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
