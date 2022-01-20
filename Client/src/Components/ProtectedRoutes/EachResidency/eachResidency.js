import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import NotFound from '../../NotFound';

export default function EachResidency() {

    const { residencyID } = useParams();

    const { isLoading, data, error } = useQuery("eachHostel", () => fetch(`http://localhost:5000/each-residency/${residencyID}`).then((res) => res.json()));

    if (isLoading) return <p>Loading...</p>

    if (error) return <NotFound />


    return data && data.status === "ok" && <div>{residencyID}</div>
}
