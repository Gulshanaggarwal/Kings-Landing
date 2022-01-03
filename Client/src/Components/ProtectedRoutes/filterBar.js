import React, { useState } from 'react'
import Select from "react-select"

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
        label:"Rajiv Gandhi Nagar",
        value:"Rajiv Gandhi Nagar"
    },
    {
        label:"Indra Vihar",
        value:"Indra Vihar"
    }
]

const prices = [
    {
        label: "Upto 8000",
        value: 8000
    },
    {
        label: "Upto 10000",
        value: 10000
    },
    {
        label: "Upto 14000",
        value: 14000
    }
]


const fetchQuery=()=>{
    return fetch("http://localhost:5000/residencyData")
}
export default function FilterBar() {

    const [location, setLocation] = useState(null);
    const [price, setPrice] = useState(null);

    const defaultPrice={
        label:"Coming Soon..",
        value:"Coming Soon"
    }

   
    const handleLocations = (value) => {
        setLocation(value);

    }

    const handlePrices = (value) => {
        setPrice(value);

    }
    return (
        <React.Fragment>
            <section className="bg-bgHostel py-8 bg-cover bg-no-repeat">
                <div className="grid sm:grid-cols-2 w-5/6 mx-auto gap-x-4">
                    <div>
                        <label className="py-2 block text-white">Locations in Kota</label>
                        <Select options={locationsOptions} onChange={handleLocations} />
                    </div>
                    <div>
                        <label className='py-2 block text-white'>Pricing (in Ruppee)</label>
                        <div className="cursor-not-allowed"><Select value={defaultPrice}  /></div>
                    </div>
                </div>
                <button className="bg-indigo-500 text-white font-medium rounded-lg w-5/6 mx-auto block my-4 py-2">Search</button>
            </section>
        </React.Fragment>
    )
}
