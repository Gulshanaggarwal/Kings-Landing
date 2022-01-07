import React,{useState} from 'react'
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { createAlert } from '../../../features/notificationSlice';
import { createLoaders, destroyLoaders, } from '../../../features/loadingSlice';


const changePassQuery=(body)=>{
    return fetch("http://localhost:5000/changePassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((res) => res.json())
}

export default function ChangePassword({userName}) {

    const [oldPassword,setOldPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [confirmNewpass,setConfirmNewPass]=useState("");
    const dispatch = useDispatch();

    const mutation=useMutation((body)=>changePassQuery(body),{
        onSuccess(data){
            dispatch(destroyLoaders());
            const {message}=data;
            if(data.status==="ok"){
               dispatch(createAlert({
                   message,
                   type:"success"
               }))
            }
            else{
                dispatch(createAlert({
                    message,
                    type:"error"
                }))
            }

        },
        onError(){
            dispatch(createAlert({
                message:"Error occurred try again!",
                type:"error"
            }))
        }
    })


    const handleChangePassword=async(e)=>{
        e.preventDefault();

        if(newPassword===confirmNewpass){
            dispatch(createLoaders());
            await mutation.mutate({userName, oldPassword,newPassword});
        }
        else{
            dispatch(createAlert({
                message:"Password and Confirm password must match!",
                type:"error"
            }))
        }

    }




    return (
        <section className="px-4 py-8 sm:px-16 sm:w-5/6 text-xs">
            <h2 className="font-medium text-xl py-2">Change Password</h2>
            <form className="">
                <div className="flex flex-col my-2">
                    <label className="py-2">Old password</label>
                    <input type="text" className="px-2 py-2 rounded-md border-1 outline-none border-gray-500" placeholder="" onChange={(e)=>setOldPassword(e.target.value.trim())} />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">New password</label>
                    <input type="text" className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="password must be of minimum 6 length" onChange={(e)=>setNewPassword(e.target.value.trim())} />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">Confirm new password</label>
                    <input type="text" className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="password must be of minimum 6 length" onChange={(e)=>setConfirmNewPass(e.target.value.trim())} />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <button type='submit' onClick={handleChangePassword} className="font-medium px-3 py-2 rounded-md text-white bg-indigo-500 mt-2 mb-4 shadow-2xl">Change Password</button>
            </form>
        </section>
    )
}
