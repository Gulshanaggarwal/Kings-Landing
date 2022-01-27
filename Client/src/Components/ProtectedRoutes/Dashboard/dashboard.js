import React from 'react'
import useVerifyJwt from '../../../Hooks/verifyJwt'
import ProtectedPageHeader from '../../commonHeader/protectedPage'
import Footer from '../../Footer/footer'
import BookingForm from '../bookingForm';
import FilterBar from '../filterBar';
import ShowResults from '../showResults';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Bouncing from '../../Loading/bouncing';

export default function Dashboard() {


    const bookingForm = useSelector(state => state.bookingSlice.bookingForm);
    const { isLoading, data, error } = useVerifyJwt();
    const navigate = useNavigate("");
    if (isLoading) return <Bouncing />

    if (data && data.status === "error") {
        navigate("/");
    }
    if (error) {
        navigate("/");
    }
    return (
        <div className='bg-gray-100'>
            <ProtectedPageHeader />
            <FilterBar />
            <ShowResults />
            <Footer />
            {bookingForm && <BookingForm userName={data.user.userName} />}
        </div>
    )
}

