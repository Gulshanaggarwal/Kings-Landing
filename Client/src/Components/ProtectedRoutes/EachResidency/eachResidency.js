import React from 'react';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import ProtectedPageHeader from '../../commonHeader/protectedPage';
import NotFound from '../../NotFound';
import rupeeIcon from "../../../Images/rupee-indian.png"
import Footer from "../../Footer/footer"
import bathroom from "../../../Images/bathroom.png"
import laundary from "../../../Images/washing-machine.png"
import lift from "../../../Images/lift.png"
import ac from "../../../Images/ac.png"
import breakfast from "../../../Images/breakfast.png"
import lunch from "../../../Images/food-time.png"
import dinner from "../../../Images/dinner-time.png"
import bed from "../../../Images/bed.png"

export default function EachResidency() {

    const { residencyID } = useParams();

    const { isLoading, data, error } = useQuery("eachHostel", () => fetch(`http://localhost:5000/each-residency/${residencyID}`).then((res) => res.json()));

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
                    <div key={index} class="carousel-item h-48 mx-px">
                        <img className='' src={ele.url} alt={ele.description} />
                    </div>
                ))
            }
        </div>
        <div className='p-2 text-xs'>
            <div className="flex justify-between">
                <h3 className='font-bold text-xs 301-330px:text-base 331-360px:text-base'>{data.residency.name}</h3>
                {
                    data.residency.residencyType.hostel.length > 0 && (
                        <div className='flex items-center font-bold space-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#6366F1">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {(data.residency.residencyFor === "Boys" ? <p>boys</p> : <p>girls</p>)}
                        </div>
                    )
                }
            </div>
            <div className="py-2 flex items-center space-x-1">

                <svg className="svg-icon w-4 h-4 block" viewBox="0 0 20 20">
                    <path fill="none" d="M10,0.186c-3.427,0-6.204,2.778-6.204,6.204c0,5.471,6.204,6.806,6.204,13.424c0-6.618,6.204-7.953,6.204-13.424C16.204,2.964,13.427,0.186,10,0.186z M10,14.453c-0.66-1.125-1.462-2.076-2.219-2.974C6.36,9.797,5.239,8.469,5.239,6.39C5.239,3.764,7.374,1.63,10,1.63c2.625,0,4.761,2.135,4.761,4.761c0,2.078-1.121,3.407-2.541,5.089C11.462,12.377,10.66,13.328,10,14.453z"></path>
                    <circle fill="none" cx="10" cy="5.67" r="1.608"></circle>
                </svg>
                <p>{data.residency.location}</p>
            </div>
            <div className="py-4">
                <button type="button" className='bg-gray-900 text-white font-bold rounded-md p-3'>Book now</button>
            </div>
            <div className='bg-gray-100 rounded-md px-2 py-4 shadow-inner'>
                <h4 className='font-bold text-gtxs'>Available Occupencies</h4>
                <div className="flex flex-col space-y-4 py-8">
                    {
                        data.residency.residencyType.hostel.length > 0 && data.residency.residencyType.hostel.map((ele) => (
                            <div className="bg-gray-50 shadow-2xl rounded-lg w-5/6 mx-auto flex flex-col items-center  justify-center p-4">
                                <img src={bed} alt="bed" className="w-6 h-6" />
                                <span>{ele.roomType}</span>
                                <div className='flex items-center py-2'>
                                    <img className='w-3 h-3' src={rupeeIcon} alt='rupee-indian' />
                                    <span className='px-1 text-xs'>{ele.price}/month</span>
                                </div>
                            </div>
                        ))
                    }
                    {
                        data.residency.residencyType.flat.length > 0 && data.residency.residencyType.flat.map((ele) => (
                            <div className="bg-gray-50 shadow-2xl rounded-lg w-5/6 mx-auto flex flex-col items-center  justify-center p-4">
                                <img src={bed} alt="bed" className="w-6 h-6" />
                                <span>{ele.roomType}</span>
                                <div className='flex items-center py-2'>
                                    <img className='w-3 h-3' src={rupeeIcon} alt='rupee-indian' />
                                    <span className='px-1 text-xs'>{ele.price}/month</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='my-4 rounded-md bg-gray-100 px-2 py-4 shadow-inner'>
                <h4 className='font-bold text-gtxs'>Services we provides</h4>
                <div className='grid grid-cols-3 py-8'>
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
                <h4 className='font-bold text-gtxs'>Things to ponder</h4>
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
            </div>
        </div>
        <Footer />
    </div >
}
