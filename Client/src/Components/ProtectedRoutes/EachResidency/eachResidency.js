import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ProtectedPageHeader from '../../commonHeader/protectedPage';
import NotFound from '../../NotFound';
import rupeeIcon from "../../../Images/rupee-indian.png"

export default function EachResidency() {

    const { residencyID } = useParams();

    const { isLoading, data, error } = useQuery("eachHostel", () => fetch(`http://localhost:5000/each-residency/${residencyID}`).then((res) => res.json()));

    if (isLoading) return <p>Loading...</p>

    if (error) return <NotFound />


    return data && data.status === "ok" && <div>
        <ProtectedPageHeader />
        <div>
            GoBack
        </div>
        <div className="carousel carousel-center">
            {
                data.residency.images.map((ele) => (
                    <div class="carousel-item h-48 mx-1">
                        <img src={ele.url} alt={ele.description} />
                    </div>
                ))
            }
        </div>
        <div>
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
            <div className='bg-gray-200 rounded-md shadow-xl'>
                <h4>Available Occupencies</h4>
                <div className="flex space-x-3 p-4">
                    {
                        data.residency.residencyType.hostel.length > 0 && data.residency.residencyType.hostel.map((ele) => (
                            <div className="bg-indigo-400 rounded-lg flex flex-col items-center">
                                <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_100/v1598893837/Website/bed.png" className="w-4 h-4" />
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

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Layer 22"><path d="M32,0A32,32,0,1,0,64,32,32.036,32.036,0,0,0,32,0Zm0,62A30,30,0,1,1,62,32,30.034,30.034,0,0,1,32,62Z" /><path d="M41.965,34.035a11.245,11.245,0,0,0-19.93,0,11.245,11.245,0,0,0,0,19.93,11.245,11.245,0,0,0,19.93,0,11.245,11.245,0,0,0,0-19.93ZM40.783,52.321a1.014,1.014,0,0,0-.461.461,9.245,9.245,0,0,1-16.644,0,1.014,1.014,0,0,0-.461-.461,9.244,9.244,0,0,1,0-16.642,1.014,1.014,0,0,0,.461-.461,9.245,9.245,0,0,1,16.644,0,1.014,1.014,0,0,0,.461.461,9.244,9.244,0,0,1,0,16.642Z" /><path d="M32 37.474A6.526 6.526 0 1 0 38.526 44 6.533 6.533 0 0 0 32 37.474zm0 11.052A4.526 4.526 0 1 1 36.526 44 4.531 4.531 0 0 1 32 48.526zM58.707 24.293l-16-16a1 1 0 0 0-1.414 0L39 10.586 32.707 4.293a1 1 0 0 0-1.414 0L25 10.586 22.707 8.293a1 1 0 0 0-1.414 0l-16 16A1 1 0 0 0 6 26H58a1 1 0 0 0 .707-1.707zM11.586 24H8.414L22 10.414 23.586 12zm2.828 0L25.707 12.707 32 6.414l6.293 6.293L49.586 24zm38 0l-12-12L42 10.414 55.586 24z" /></g></svg>

        </div>


    </div >
}
