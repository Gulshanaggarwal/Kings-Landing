import React from 'react'
import checked from "../../Images/checked.png"
import AI from "../../Images/AI.png"
import choose from "../../Images/choose.png"
export default function Howitworks() {
    return (
        <section className="bg-white text-gray-800 text-xs">
            <div>
                <h2 className="font-extrabold text-center text-indigo-500 text-3xl py-8">How it works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-28 py-16 gap-16">
                    <div className="p-8 bg-gray-100 rounded-md shadow-2xl hover:transform hover:scale-105">
                        <h3 className="font-medium text-3xl text-indigo-600 text-center pt-4 pb-8">1</h3>
                        <img src={choose} alt="select" className="w-20  h-20 mx-auto" />
                        <p className="font-medium py-4">Simply select topics of your choice for Example -</p>
                        <ul className="px-4 space-y-2 list-disc">
                            <li>Hobby</li>
                            <li>Subjects you like</li>
                            <li>Aspirations Doctor,Engineer</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-md shadow-2xl hover:transform hover:scale-105">
                        <h3 className="font-medium text-3xl text-indigo-600 text-center pt-4 pb-8">2</h3>
                        <img src={AI} alt="our AI system" className="w-20 h-20" />
                        <p className="font-Roboto text-center py-8">On the basis of your prefrences our AI system will match best profiles for you.</p>
                    </div>
                    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-md shadow-2xl hover:transform hover:scale-105">
                        <h3 className="font-medium text-3xl text-indigo-600 text-center pt-4 pb-8">3</h3>
                        <img src={checked} alt="success" className="w-20 h-20" />
                        <p className="font-Roboto text-center py-8">Select a profile, Hurray! you have booked successfully.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
