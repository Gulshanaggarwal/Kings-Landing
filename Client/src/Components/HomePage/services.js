import React from "react";
import chefIcon from "../../Images/chef.png"
import laundaryIcon from "../../Images/laundry-bag.png"
import careerIcon from "../../Images/career.png"
import securityIcon from "../../Images/policeman.png"
import teamIcon from "../../Images/team.png"
import gamingIcon from "../../Images/gaming.png"


export default function Services(){
    return(
        <section className="py-8">
            <div className="text-center py-4">
                <p className="text-indigo-500 text-xl font-medium">Our services</p>
                <h2 className="font-bold text-gray-800 text-3xl pt-2 pb-4">Here's what we offer</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 px-8 text-center font-Roboto sm:grid-cols-6">
                <div className="w-full bg-gray-50 flex flex-col items-center px-4 py-8 rounded-md shadow-inner hover:transform hover:scale-105">
                    <img src={chefIcon} alt="Hostel food" className="w-16"/>
                    <h3 className="pt-8 text-xl" >Home made food</h3>
                </div>
                <div className="w-full bg-gray-50 flex flex-col items-center px-4 py-8 rounded-md shadow-inner hover:transform hover:scale-105">
                    <img src={laundaryIcon} alt="Laundry" className="w-16"/>
                    <h3 className="pt-8 text-xl" >Laundry service</h3>
                </div>
                <div className="w-full bg-gray-50 flex flex-col items-center px-4 py-8 rounded-md shadow-inner hover:transform hover:scale-105">
                    <img src={careerIcon} alt="carerr building" className="w-16"/>
                    <h3 className="pt-8 text-xl">Career Building</h3>
                </div>
                <div className="w-full bg-gray-50 flex flex-col items-center px-4 py-8 rounded-md shadow-inner hover:transform hover:scale-105">
                    <img src={teamIcon} alt="get together" className="w-16"/>
                    <h3 className="pt-8 text-xl">Get Together Meetups</h3>
                </div>
                <div className="w-full bg-gray-50 flex flex-col items-center px-4 py-8 rounded-md shadow-inner hover:transform hover:scale-105">
                    <img src={gamingIcon} alt="gaming nights" className="w-16"/>
                    <h3 className="pt-8 text-xl">Gaming Nights</h3>
                </div>
                <div className="w-full bg-gray-50 flex flex-col items-center px-4 py-8 rounded-md shadow-inner hover:transform hover:scale-105">
                    <img src={securityIcon} alt="security" className="w-16"/>
                    <h3 className="pt-8 text-xl">Security</h3>
                </div>
            </div>
        </section>
    )
}