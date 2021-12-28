import React, { useState } from 'react'
import Select from "react-select"

const locationsOptions = [
    {
        label: "Jawahar Nagar",
        value: "Jawahar Nagar"
    },
    {
        label: "Talwandi",
        value: "Talwandi"
    }
]

const prices = [
    {
        label: "4000",
        value: 4000
    },
    {
        label: "5000",
        value: 5000
    },
    {
        label: "6000",
        value: 6000
    }
]
export default function FilterBar() {

    const [location, setLocation] = useState(null);
    const [price, setPrice] = useState(null);

    const handleLocations = (value) => {
        setLocation(value);

    }

    const handlePrices = (value) => {
        setPrice(value);

    }
    return (
        <section className="bg-bgHostel py-8 bg-cover bg-no-repeat">
            <div className="grid sm:grid-cols-2 w-5/6 mx-auto gap-x-4">
                <div>
                    <label className="py-2 block text-white">Locations in Kota</label>
                    <Select options={locationsOptions} onChange={handleLocations} />
                </div>
                <div>
                    <label className='py-2 block text-white'>Price</label>
                    <Select options={prices} onChange={handlePrices} />
                </div>
            </div>
            <button className="bg-indigo-500 text-white font-medium rounded-lg w-5/6 mx-auto block my-4 py-2">Search</button>
        </section>
    )
}
