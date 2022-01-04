import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useQueryClient } from 'react-query';
import Select from "react-select"
import { setFilterState } from '../../features/filterSlice';

const locationsOptions = [
    {
        label: "Kunadi(Landmark City)",
        value: "Kunadi"
    },
    {
        label: "Talwandi",
        value: "Talwandi"
    },
    {
        label: "Indra Vihar",
        value: "Indra Vihar"
    }
]

export default function FilterBar() {

    const dispatch = useDispatch();
    const queryClient=useQueryClient();
    const defaultPrice = {
        label: "Coming Soon..",
        value: "Coming Soon"
    }

    const handleLocation = (loc) => {
        dispatch(setFilterState({ location: loc.value }));
      
    }



    return (
        <React.Fragment>
            <section className="bg-bgHostel py-8 bg-cover bg-no-repeat">
                <div className="grid sm:grid-cols-2 w-5/6 mx-auto gap-x-4">
                    <div>
                        <label className="py-2 block text-white">Locations in Kota</label>
                        <Select options={locationsOptions} onChange={handleLocation} />
                    </div>
                    <div>
                        <label className='py-2 block text-white'>Pricing (in Ruppee)</label>
                        <div className="cursor-not-allowed"><Select value={defaultPrice} /></div>
                    </div>
                </div>
                <button className="bg-indigo-500 text-white font-medium rounded-lg w-5/6 mx-auto block my-4 py-2">Search</button>
            </section>
        </React.Fragment>
    )
}
