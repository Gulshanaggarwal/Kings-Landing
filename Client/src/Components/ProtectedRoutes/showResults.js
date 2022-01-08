import React from 'react'
import { useQuery} from "react-query";
import { useDispatch, useSelector} from "react-redux"
import rupeeIcon from "../../Images/rupee-indian.png";
import { showBookingForm } from "../../features/bookingSlice"


export default function ShowResults() {



    const dispatch = useDispatch();
    const location = useSelector(state => state.filterBarSlice.location);
    let residency = [];



    const { isLoading, data} = useQuery(["residency", location], () => fetch(`http://localhost:5000/residencyData/${location}`).then((res) => res.json()));


    if (isLoading) return <h2>Loading ....</h2>
    if (data) {
        residency = [...data.data]
    }



    return (
        <main>
            <div className="py-4 px-2 text-2lsxs 271-300px:text-lsxs 301-330px:text-gtxs 331-360px:text-ls1rem">
                <h2 className="font-medium">YOUR SECOND HOME IN</h2>
                <h2 className="font-medium text-indigo-600">KOTA</h2>
            </div>
            <div className="px-2 text-2lsxs 271-300px:text-lsxs 301-330px:text-gtxs 331-360px:text-ls1rem">
                <div className='flex'>
                    <p>Showing Residencies in KOTA</p>
                    {location && location !== "null" && <p className="font-bold">&nbsp;&gt;&gt; {location}</p>}
                </div>
            </div>
            <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
                {residency.length > 0 && residency.map((ele) => {
                    return (
                        <div className='w-90P mx-auto my-8 border-1 border-gray-600 rounded-md bg-indigo-50 text-2lsxs 271-300px:text-lsxs 301-330px:text-gtxs 331-360px:text-ls1rem' key={ele._id}>
                            <div className="w-full h-40 sm:h-48 md:h-64 2xl:h-72">
                                <img src={ele.images[0].url}  className='w-full h-full rounded-md' alt={ele.images[0].description} />
                            </div>
                            <div className='px-2 py-5'>
                                <div className="flex justify-between">
                                    <h3 className='font-bold text-xs 301-330px:text-base 331-360px:text-base'>{ele.name}</h3>
                                    {
                                        ele.residencyType.hostel.length > 0 && (
                                            <div className='flex items-center font-bold space-x-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#6366F1">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {(ele.residencyFor === "Boys" ? <p>boys</p> : <p>girls</p>)}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="py-2 flex items-center space-x-1">

                                    <svg className="svg-icon w-4 h-4 block" viewBox="0 0 20 20">
                                        <path fill="none" d="M10,0.186c-3.427,0-6.204,2.778-6.204,6.204c0,5.471,6.204,6.806,6.204,13.424c0-6.618,6.204-7.953,6.204-13.424C16.204,2.964,13.427,0.186,10,0.186z M10,14.453c-0.66-1.125-1.462-2.076-2.219-2.974C6.36,9.797,5.239,8.469,5.239,6.39C5.239,3.764,7.374,1.63,10,1.63c2.625,0,4.761,2.135,4.761,4.761c0,2.078-1.121,3.407-2.541,5.089C11.462,12.377,10.66,13.328,10,14.453z"></path>
                                        <circle fill="none" cx="10" cy="5.67" r="1.608"></circle>
                                    </svg>
                                    <p>{ele.location}</p>
                                </div>

                                {
                                    ele.residencyType.hostel.length > 0 ? <div className='flex items-center my-2'>
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_100/v1598893837/Website/bed.png" class="w-4 h-4" />
                                        {
                                            ele.residencyType.hostel.map((item, index) => <span key={index} className='px-1'>{item.roomType},</span>)
                                        }
                                    </div> : <div className='flex items-center my-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z"></path></svg>
                                        {
                                            ele.residencyType.flat.map((item, index) => <span key={index} className='px-1'>{item.roomType},</span>)
                                        }
                                    </div>
                                }
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 24 24"><path d="M3 2h2v20H3zm16 0H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 10H9v-2h9v2zm0-4H9V6h9v2z"></path></svg>
                                    <div className='flex flex-wrap'>
                                        {ele.facility.map((item, index) => index < 3 && <span key={index} className='px-1'>{item},</span>)}
                                        <span>+{ele.facility.length}more...</span>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div>
                                        <p className='text-xs font-medium'>Starting price</p>
                                        <div className='flex items-center py-2'>
                                            <img className='w-3 h-3' src={rupeeIcon} alt='rupee-indian' />
                                            <span className='px-1 text-xs'>{ele.startingPrice}/month</span>
                                        </div>
                                    </div>
                                    <button type="button" onClick={() => dispatch(showBookingForm({ data: { residencyId: ele._id, residencyName: ele.name, residencyType: ele.residencyType } }))} className='shadow-2xl rounded-md px-3 h-10  bg-indigo-400 text-xs text-white font-medium'>Book now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

        </main>
    )
}


