import React,{useState} from 'react'
import Logo from '../Logo/logo'
import {Link} from "react-router-dom"

export default function ProtectedPageHeader() {

    const [nav,setNav]=useState("hidden");
    return (
        <header className="bg-gray-900 shadow-2xl">
            <div className="flex justify-between px-3 py-4">
                <Logo />
                <div className='relative flex justify-center' onClick={()=>{
                    if(nav==="hidden"){
                        setNav("block");
                    }
                    else{
                        setNav("hidden")
                    }
                }}>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <svg className="h-3 w-3" viewBox="0 0 8 5" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M1.414 0C.524 0 .077 1.077.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414z"></path></svg>
                    </div>
                    <nav className={`absolute right-1 mt-14 bg-white rounded-md z-auto ${nav}`}>
                        <ul>
                            <li className='pl-2 pr-8 py-2'><Link to="/dashboard">Dashboard</Link></li>
                            <li className='pl-2 pr-8 py-2'><Link to="/profile">Profile</Link></li>
                            <li className='pl-2 pr-8 py-2'><button>Logout</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
