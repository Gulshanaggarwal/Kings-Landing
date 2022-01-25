import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import useVerifyJwt from '../../../Hooks/verifyJwt';
import ProtectedPageHeader from '../../commonHeader/protectedPage';
import NotFound from '../../NotFound';
import rupeeIcon from "../../../Images/rupee-indian.png"
import locationIcon from "../../../Images/location.png"
import Footer from "../../Footer/footer"
import boy from "../../../Images/boy.png"
import girl from "../../../Images/girl.png"
import bathroom from "../../../Images/bathroom.png"
import laundary from "../../../Images/washing-machine.png"
import lift from "../../../Images/lift.png"
import ac from "../../../Images/ac.png"
import breakfast from "../../../Images/breakfast.png"
import lunch from "../../../Images/food-time.png"
import dinner from "../../../Images/dinner-time.png"
import { showBookingForm } from '../../../features/bookingSlice';
import BookingForm from '../bookingForm';


export default function EachResidency() {

    const { residencyID } = useParams();
    const bookingForm = useSelector(state => state.bookingSlice.bookingForm);
    const dispatch = useDispatch();

    const navigate = useNavigate("");
    const { isLoading: hookLoading, data: hookData, error: hookError } = useVerifyJwt();



    const { isLoading, data, error } = useQuery("eachHostel", () => fetch(`http://localhost:5000/each-residency/${residencyID}`).then((res) => res.json()));

    if (hookLoading) return <h1>Loading....</h1>

    if (hookData && hookData.status === "error") {
        navigate("/");
    }
    if (hookError) {
        navigate("/");
    }

    if (isLoading) return <p>Loading...</p>

    if (error) return <NotFound />


    return data && data.status === "ok" && <div>
        <ProtectedPageHeader />
        <div className="flex items-center space-x-2 p-4 text-xs">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                />
            </svg>
            <Link to="/dashboard" className="underline text-blue-500">
                Go back to view more
            </Link>
        </div>
        <div className="carousel carousel-center border-1 border-gray-800 text-2lsxs 271-300px:text-lsxs 301-330px:text-gtxs 331-360px:text-ls1rem">
            {
                data.residency.images.map((ele, index) => (
                    <div key={index} className="carousel-item h-48 mx-px">
                        <img src={ele.url} alt={ele.description} />
                    </div>
                ))
            }
        </div>

        <div className='px-2 py-4 text-xs'>
            <div className="flex justify-between">
                <h3 className='font-bold text-xs 301-330px:text-base 331-360px:text-base'>{data.residency.name}</h3>
                {
                    data.residency.residencyType.hostel.length > 0 && (data.residency.residencyFor === "Boys" ? <div className="flex space-x-px items-center">
                        <img className='w-6 h-6' src={boy} alt="boy" />
                        <p className='font-bold'>Boys</p>
                    </div> : <div className="flex space-x-1 items-center">
                        <img className='w-6 h-6' src={girl} alt="girl" />
                        <p className='font-bold'>Girls</p>
                    </div>)
                }
            </div>
            <div className="py-2 flex items-center space-x-1">

                <img src={locationIcon} alt="location" className='w-6 h-6' />
                <p>{data.residency.location}</p>
            </div>
            <div className="py-4">
                <button type="button" onClick={() => dispatch(showBookingForm({ data: { residencyId: data.residency._id, residencyName: data.residency.name, residencyType: data.residency.residencyType } }))} className='bg-indigo-500 text-white font-bold rounded-md p-3'>Book now</button>
            </div>
            <div className='bg-gray-100 rounded-md px-2 py-4 shadow-inner'>
                <h4 className='font-extrabold text-ls1rem text-indigo-600 text-center py-4'>Available Occupencies</h4>
                <div className="flex flex-col space-y-4 py-8">
                    {
                        data.residency.residencyType.hostel.length > 0 && data.residency.residencyType.hostel.map((ele, index) => (
                            <div key={index} className="bg-gray-50 shadow-2xl rounded-lg w-2/3 mx-auto flex flex-col items-center justify-center py-6">
                                <span className="font-bold text-gtxs text-indigo-500">{ele.roomType}</span>
                                <div className='flex items-center py-2'>
                                    <img className='w-3 h-3' src={rupeeIcon} alt='rupee-indian' />
                                    <span className='px text-gtxs'>{ele.price}/month</span>
                                </div>
                            </div>
                        ))
                    }
                    {
                        data.residency.residencyType.flat.length > 0 && data.residency.residencyType.flat.map((ele, index) => (
                            <div key={index} className="bg-gray-50 shadow-2xl rounded-lg w-2/3 mx-auto flex flex-col items-center justify-center py-6">
                                <span className="font-bold text-gtxs text-indigo-500">{ele.roomType}</span>
                                <div className='flex items-center py-2'>
                                    <img className='w-3 h-3' src={rupeeIcon} alt='rupee-indian' />
                                    <span className='px text-gtxs'>{ele.price}/month</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='my-4 rounded-md bg-gray-100 px-2 py-4 shadow-inner'>
                <h4 className='font-extrabold text-ls1rem text-indigo-600 text-center py-4'>Services we provide</h4>
                <div className='grid grid-cols-2 gap-y-4 py-8'>
                    <div className='w-5/6 text-center'>
                        <div className='bg-gray-50 shadow-2xl py-6 flex justify-center items-center rounded-lg'>
                            <img src={bathroom} className='w-8 h-8' alt="bathromm" />
                        </div>
                        <p className='py-2'>Attached bathroom</p>
                    </div>
                    <div className='w-5/6 text-center'>
                        <div className='bg-gray-50 shadow-2xl py-6 flex justify-center items-center rounded-lg'>
                            <img src={laundary} className='w-8 h-8' alt="laudary" />
                        </div>
                        <p className='py-2'>Laundary</p>
                    </div>
                    <div className='w-5/6 text-center'>
                        <div className='bg-gray-50 shadow-2xl py-6 flex justify-center items-center rounded-lg'>
                            <img src={ac} className='w-8 h-8' alt="ac" />
                        </div>
                        <p className='py-2'>AC</p>
                    </div>
                    <div className='w-5/6 text-center'>
                        <div className='bg-gray-50 shadow-2xl py-6 flex justify-center items-center rounded-lg'>
                            <img src={lift} className='w-8 h-8' alt="lift" />
                        </div>
                        <p className='py-2'>Lift</p>
                    </div>
                    <div className='w-5/6 text-center'>
                        <div className='bg-gray-50 shadow-2xl py-6 flex justify-center items-center rounded-lg'>
                            <img src={breakfast} className='w-8 h-8' alt="breakfast" />
                        </div>
                        <p className='py-2'>Breakfast</p>
                    </div>
                    <div className='w-5/6 text-center'>
                        <div className='bg-gray-50 shadow-2xl py-6 flex justify-center items-center rounded-lg'>
                            <img src={lunch} className='w-8 h-8' alt="lunch" />
                        </div>
                        <p className='py-2'>Lunch</p>
                    </div>
                    <div className='w-5/6 text-center'>
                        <div className='bg-gray-50 shadow-2xl py-6 flex justify-center items-center rounded-lg'>
                            <img src={dinner} className='w-8 h-8' alt="dinner" />
                        </div>
                        <p className='py-2'>Dinner</p>
                    </div>
                </div>
            </div>
            <div>
                <h4 className='font-bold text-xl py-4 text-indigo-600'>Things to ponder</h4>
                <ul className='space-y-2 py-4'>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className='block'>CCTV surveillance</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className='block'>Biometric and register system</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className='block'>Electricity Bill excluded</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className='block'>Fire safety provision and first aid available</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className='block'>Parental stay option depend on hostels</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className='block'>Sunday live excercise</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className='block'>24*7 Security</span>
                    </li>
                </ul>
                <div className="h-px bg-gray-300 my-4"></div>
            </div>
        </div>
        <Footer />
        {bookingForm && <BookingForm userName={hookData.user.userName} />}
    </div >
}
