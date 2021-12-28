import React from 'react'
import useVerifyJwt from '../../../Hooks/verifyJwt'
import ProtectedPageHeader from '../../commonHeader/protectedPage'
import Footer from '../../Footer/footer'
import FilterBar from '../filterBar';
import ShowResults from '../showResults';

export default function Dashboard() {

    const {isLoading,data,error}=useVerifyJwt();
    if(isLoading) return <h1>Loading....</h1>
    return (
        <div>
            <ProtectedPageHeader/>
            <FilterBar/>
            <ShowResults/>
        </div>
    )
}

