import React, { useState } from 'react';
import Select from "react-select";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { hideBookingForm } from '../../features/bookingSlice';

export default function BookingForm() {

    const { residencyName, residencyType } = useSelector((state) => state.bookingSlice.data, shallowEqual);
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


    return (
        <div className="fixed top-0 left-0 w-full h-full py-8 px-12 bg-gray-200 overflow-y-scroll custom-scrollbar">
            <div>
                <div className='flex justify-between'>
                    <h3 className='font-medium text-xl py-3'>Booking Request</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(hideBookingForm())} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                <form className='py-4 space-y-4'>
                    <div className='flex flex-col space-y-2'>
                        <label>Full Name</label>
                        <input className='p-2 rounded-md' type="text" placeholder="" onChange={(e) => setFName(e.target.value.trim())} />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Phone</label>
                        <div className='flex rounded-md bg-white p-2'>
                            <span>+91</span>
                            <input className='w-90P border-gray-500 border-l-2 outline-none mx-1 px-2' type="text" placeholder='' onChange={(e) => setPhNumber(e.target.value.trim())} />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Selected Residency</label>
                        <Select defaultInputValue={residencyName} options={residencyOption} onChange={(ele) => setCurrResidency(ele.value)} />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Select Category</label>
                        <Select defaultInputValue={categoryOptions[0].value} options={categoryOptions} onChange={(ele) => setSelectCategory(ele.value)} />
                    </div>
                    <button type="button" className='py-3 rounded-md text-white font-medium bg-indigo-500 w-full'>Request now</button>
                </form>
            </div>
        </div>
    )
}
