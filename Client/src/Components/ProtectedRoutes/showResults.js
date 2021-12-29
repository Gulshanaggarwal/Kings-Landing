import React, { useEffect } from 'react'
import { useQuery } from "react-query";
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { setResidencyData } from '../../features/residencyDataSlice';
import rupeeIcon from "../../Images/rupee-indian.png";
import {showBookingForm} from "../../features/bookingSlice"


export default function ShowResults() {
    const dispatch = useDispatch();
    const residency = useSelector(state => state.residencyDataSlice.residency, shallowEqual);
    const { isLoading, data: residencies, error } = useQuery("residency", () => fetch("http://localhost:5000/residencyData").then((res) => res.json()));

    useEffect(() => {
        if (residencies) {
            dispatch(setResidencyData({ data: residencies.data }))

        }
    }, [residencies])

    if (isLoading) return <h2>Loading ....</h2>

    return (
        <main>
            <div className="py-4 px-2">
                <h2 className="text-xl font-medium">YOUR SECOND HOME IN</h2>
                <h2 className="text-xl font-medium text-indigo-600">KOTA</h2>
            </div>
            <div className="px-2">
                <p>Showing Hostel in Kota</p>
            </div>
            {residency.length > 0 && residency.map((ele) => {
                console.log(ele.images[0].url);
                return (
                    <div className='w-90P mx-auto my-8 border-1 border-gray-600 rounded-md bg-gray-100' key={ele._id}>
                        <div className="w-full h-52">
                            <img src={ele.images[0].url} className='w-full h-full rounded-md' alt={ele.images[0].description} />
                        </div>
                        <div className='px-3 py-5'>
                            <div className="flex justify-between">
                                <div>
                                    <h3 className='p-2 font-bold'>{ele.name}</h3>
                                    <div className='flex align-middle'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='px-2'>{ele.location}</p>
                                    </div>
                                </div>
                                {ele.residencyFor === "Boys" ? <div className="flex p-2"><svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"></circle><path d="M15 7H9a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"></path></svg><p>Boys</p></div> : <div className='flex'><svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"></circle><path d="M14.948 7.684A.997.997 0 0 0 14 7h-4a.998.998 0 0 0-.948.684l-2 6 1.775.593L8 18h2v4h4v-4h2l-.827-3.724 1.775-.593-2-5.999z"></path></svg><p>Girls</p></div>}
                            </div>
                            {
                                ele.residencyType.hostel.length > 0 && <div className='flex align-middle my-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z"></path></svg>
                                    {
                                        ele.residencyType.hostel.map((item) => <span className='px-1'>{item.roomType},</span>)
                                    }
                                </div>
                            }
                            <div className='flex align-middle'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='pr-2' viewBox="0 0 24 24"><path d="M3 2h2v20H3zm16 0H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 10H9v-2h9v2zm0-4H9V6h9v2z"></path></svg>
                                {ele.facility.map((item, index) => index < 3 && <span className='px-1'>{item},</span>)}
                                <span>+{ele.facility.length}more...</span>
                            </div>
                            <div className="flex justify-between mt-10">
                                <div>
                                    <p>Starting price</p>
                                    <div className='flex align-middle py-2'>
                                        <img className='w-4 h-4' src={rupeeIcon} alt='rupee-indian' />
                                        <span className='px-2'>{ele.startingPrice}/month</span>
                                    </div>
                                </div>
                                <button type="button" onClick={()=>dispatch(showBookingForm())} className='rounded-md w-32 h-12 bg-indigo-400 text-sm text-white font-medium'>Book now</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </main>
    )
}
