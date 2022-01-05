import React from 'react'
import useVerifyJwt from '../../../Hooks/verifyJwt'
import ProtectedPageHeader from '../../commonHeader/protectedPage'
import Footer from '../../Footer/footer'
import ChangePassword from './changePassword'
import GeneralInfo from './generalInfo'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    
    const {isLoading,data,error}=useVerifyJwt();
    const navigate=useNavigate("");

    if(isLoading) return <p>Loading....</p>
    if(data && data.status==="error"){
        navigate("/");
    }
    if(error){
        navigate("/");
    }
    return data && data.status==="ok" &&(
        <div className='bg-gray-100'>
            <ProtectedPageHeader/>
            <GeneralInfo fullName={data.user.fullName} userName={data.user.userName}/>
            <ChangePassword userName={data.user.userName}/>
            <Footer/>
        </div>
    )
}
