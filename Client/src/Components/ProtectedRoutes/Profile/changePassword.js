import React,{useState} from 'react'
import { useMutation } from 'react-query';


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

    const mutation=useMutation((body)=>changePassQuery(body),{
        onSuccess(data){
            if(data.status==="ok"){
                alert("Changed Success")
            }
            else{
                alert("error")
            }

        },
        onError(){
            alert("Error !")
        }
    })


    const handleChangePassword=async(e)=>{
        e.preventDefault();

        if(newPassword===confirmNewpass){
            await mutation.mutate({userName, oldPassword,newPassword});
        }
        else{
            alert("Password and confirm password must match!");
        }

    }




    return (
        <section className="px-8 py-8 sm:px-16 sm:w-5/6">
            <h2 className="font-medium text-xl py-2">Change Password</h2>
            <form className="">
                <div className="flex flex-col my-2">
                    <label className="py-2">Old password</label>
                    <input type="text" className="px-2 py-2 rounded-md border-1 outline-none border-gray-500" placeholder="" onChange={(e)=>setOldPassword(e.target.value.trim())} />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">New password</label>
                    <input type="text" className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="" onChange={(e)=>setNewPassword(e.target.value.trim())} />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">Confirm new password</label>
                    <input type="text" className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="" onChange={(e)=>setConfirmNewPass(e.target.value.trim())} />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <button type='submit' onClick={handleChangePassword} className="font-medium px-3 py-2 rounded-md text-white bg-indigo-500 mt-2 mb-4 shadow-2xl">Change Password</button>
            </form>
        </section>
    )
}
