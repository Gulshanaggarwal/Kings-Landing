import React from 'react'
import useVerifyJwt from '../../../Hooks/verifyJwt'
import ProtectedPageHeader from '../../commonHeader/protectedPage'
import Footer from '../../Footer/footer'
import ChangePassword from './changePassword'
import GeneralInfo from './generalInfo'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate=useNavigate("/");

    const {isLoading,data,error}=useVerifyJwt();

    if(isLoading) return <p className="font-medium text-center textt-xl">Loading....</p>
    if(error){
        navigate("/");
    }
    console.log(data);
    return data && data.user && (
        <div>
            <ProtectedPageHeader/>
            <GeneralInfo user={data.user}/>
            <ChangePassword/>
            <Footer/>
        </div>
    )
}
