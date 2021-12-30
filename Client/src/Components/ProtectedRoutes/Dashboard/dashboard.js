import React from 'react'
import useVerifyJwt from '../../../Hooks/verifyJwt'
import ProtectedPageHeader from '../../commonHeader/protectedPage'
import Footer from '../../Footer/footer'
import BookingForm from '../bookingForm';
import FilterBar from '../filterBar';
import ShowResults from '../showResults';
import { useSelector } from 'react-redux';

export default function Dashboard() {


    const bookingForm=useSelector(state=>state.bookingSlice.bookingForm);
    const {isLoading,data,error}=useVerifyJwt();
    if(isLoading) return <h1>Loading....</h1>
    return (
        <div>
            <ProtectedPageHeader/>
            <FilterBar/>
            <ShowResults/>
            {bookingForm && <BookingForm/>}
        </div>
    )
}

