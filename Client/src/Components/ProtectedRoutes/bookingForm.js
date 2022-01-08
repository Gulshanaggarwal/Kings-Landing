import React, { useState } from 'react';
import Select from "react-select";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { hideBookingForm } from '../../features/bookingSlice';
import { useMutation } from 'react-query';
import {createAlert} from "../../features/notificationSlice"
import { createLoaders, destroyLoaders } from '../../features/loadingSlice';


const bookRequest = (body) => {
    return fetch("http://localhost:5000/book-request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((res) => res.json())
}

export default function BookingForm({userName}) {

    const { residencyId, residencyName, residencyType } = useSelector((state) => state.bookingSlice.data, shallowEqual);
    const dispatch = useDispatch();

    const residencyOption = [{
        label: residencyName,
        value: residencyName
    }]

    const availResidency = residencyType.hostel.length > 0 ? residencyType.hostel : residencyType.flat;
    let categoryOptions = [];
    availResidency.forEach((ele) => {
        categoryOptions.push({ label: ele.roomType, value: ele.roomType });
    })


    // controlled input fields
    const [fName, setFName] = useState("");
    const [phNumber, setPhNumber] = useState("");
    const [currResidency, setCurrResidency] = useState(residencyName);
    const [selectCategory, setSelectCategory] = useState(categoryOptions[0].value);

    const mutation = useMutation((body) => bookRequest(body),{
        onSuccess(data){
            dispatch(destroyLoaders());  //destroy laoding
            const {message}=data;
            if(data.status==="ok"){
                dispatch(createAlert({
                    message,
                    type: "success"
                  }))
                
            }
            else{
                dispatch(createAlert({
                    message,
                    type: "error"
                  }))
            }
        },
        onError(){
            dispatch(destroyLoaders());
            dispatch(createAlert({
                message:"Error occurred try again!",
                type: "error"
              }))
            
        }
    })



    const handleRequest=async(e)=>{
        e.preventDefault();
        dispatch(createLoaders());  //active loading component

        await mutation.mutate({userName,fullName:fName,phoneNumber:phNumber,residencyId,residency:currResidency,category:selectCategory});



    }


    return (
        <div className="fixed top-0 left-0 w-full h-full py-12 bg-black-transparent overflow-y-scroll custom-scrollbar text-sm">
            <div className="bg-gray-200 rounded-md px-2 pt-4 pb-4 w-90P mx-auto sm:w-2/3 md:w-1/2 xl:w-1/3">
                <div className='flex justify-between'>
                    <h3 className='font-medium text-xl py-3'>Booking Request</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(hideBookingForm())} className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                <form className='py-4 space-y-4'>
                    <div className='flex flex-col space-y-2'>
                        <label>Full Name</label>
                        <input className='p-2 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent' type="text" placeholder="" onChange={(e) => setFName(e.target.value.trim())} />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Phone</label>
                        <div className='flex rounded-md bg-white p-2 focus-within:ring-2 focus-within:ring-indigo-500'>
                            <span>+91</span>
                            <input className='w-90P border-gray-500 border-l-1 focus:outline-none  mx-1 px-2' type="text" placeholder='' onChange={(e) => setPhNumber(e.target.value.trim())} />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Selected Residency</label>
                        <Select defaultInputValue={residencyName} options={residencyOption} onChange={(ele) => setCurrResidency(ele.value)} />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Select Category</label>
                        <Select  options={categoryOptions} onChange={(ele) => setSelectCategory(ele.value)} />
                    </div>
                    <button type="submit" onClick={handleRequest} className='py-3 rounded-md text-white font-medium bg-indigo-500 w-full'>Request now</button>
                </form>
            </div>
        </div>
    )
}
