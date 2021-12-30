import React from 'react';
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

    const availResidency=residencyType.hostel.length>0 ? residencyType.hostel : residencyType.flat;
    let categoryOptions=[]
    availResidency.forEach((ele)=>{
        categoryOptions.push({label:ele.roomType,value:ele.roomType});
    })


    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <div className='w-5/6 rounded-md bg-gray-100'>
                <div>
                    <h3>Booking Request</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(hideBookingForm())} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                <form>
                    <div>
                        <label>Full Name</label>
                        <input type="text" placeholder="" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="" />
                    </div>
                    <div>
                        <label>Phone</label>
                        <div>
                            <span>+91</span>
                            <input type="text" placeholder='' />
                        </div>
                    </div>
                    <div>
                        <label>Selected Residency</label>
                        <Select defaultInputValue={residencyName} options={residencyOption} />
                    </div>
                    <div>
                        <label>Category</label>
                        <Select options={categoryOptions}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
