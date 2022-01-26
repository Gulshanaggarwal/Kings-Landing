import React, { useState, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { createLoaders, destroyLoaders } from "../../../features/loadingSlice"
import { createAlert } from '../../../features/notificationSlice';
import Bouncing from '../../Loading/bouncing';
import { useNavigate } from "react-router-dom"

const updateInfo = (body) => {

    const token = localStorage.getItem("__auth__token");
    return fetch("http://localhost:5000/getUpdateInfo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify(body)
    }).then((res) => res.json())

}

export default function GeneralInfo({ fullName, userName }) {

    const [fName, setFullName] = useState(fullName);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [homeState, setHomeState] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate("");

    const queryClient = useQueryClient();


    const mutation = useMutation((body) => updateInfo(body), {
        onSuccess(data) {
            dispatch(destroyLoaders())
            const { message } = data;
            if (data.status === "ok") {
                dispatch(createAlert({
                    message,
                    type: "success"

                }))
                queryClient.invalidateQueries('findProfileData');
            }
            else {
                dispatch(createAlert({
                    message,
                    type: "error"

                }))

            }

        },
        onError() {
            dispatch(createAlert({
                message: "Error occurred try again!",
                type: "error"

            }))
        }
    });

    const { isLoading, data } = useQuery("findProfileData", () => fetch(`https://backend-kingslanding.herokuapp.com/getUpdateInfo/${userName}`, {
        headers: {
            "x-access-token": localStorage.getItem("__auth__token")
        }

    }).then((res) => res.json()), {
        refetchOnMount: false
    })

    useEffect(() => {
        if (data) {
            const { phoneNumber: ph, homeState: hs } = data.user;
            setPhoneNumber(ph);
            setHomeState(hs)
        }
    }, [data])

    if (isLoading) return <Bouncing />
    if (data && data.status === "error") navigate("/");

    const handleUpdateInfo = async (e) => {
        e.preventDefault();
        dispatch(createLoaders());


        await mutation.mutate({ fullName: fName, phoneNumber, homeState, userName });

    }




    return data && data.status === "ok" && (
        <section className="px-4 pt-16 text-xs sm:px-16 sm:w-5/6 sm:text-sm">
            <h2 className="font-medium text-2xl">General information</h2>
            <p className="font-Roboto pt-2 pb-4">Keep upto date your profile to get latest updates</p>
            <form>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                <div className="flex flex-col my-2">
                    <label className="py-2">Full Name</label>
                    <input type="text" value={fName} className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="Max 25 characters allowed" onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">Registered Email</label>
                    <input type="email" value={userName} className="px-2 py-2 rounded-md bg-gray-200 outline-none border-1 border-gray-500 cursor-not-allowed" placeholder="" readOnly />
                    <p className="text-red-500 py-2 font-Roboto"> Note: Registered Email cannot be changed</p>
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">Phone Number</label>
                    <input type="text" value={phoneNumber} className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="" onChange={(e) => setPhoneNumber(e.target.value.trim())} />
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">Home State</label>
                    <input type="text" value={homeState} className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="" onChange={(e) => setHomeState(e.target.value.trim())} />
                </div>
                <button onClick={handleUpdateInfo} className="bg-indigo-500 text-white font-medium rounded-md mt-3 px-4 py-3 shadow-2xl">Update Info</button>
            </form>
        </section>
    )
}
