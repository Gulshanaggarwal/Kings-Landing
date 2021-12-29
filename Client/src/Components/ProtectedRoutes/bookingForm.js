import React from 'react'

export default function bookingForm() {


    return (
        <div>
            <div>
                <h3>Booking Request</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <form>
                <div>
                    <label>Full Name</label>
                    <input type="text" placeholder=""/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder=""/>
                </div>
                <div>
                    <label>Phone</label>
                    <div>
                        <span>+91</span>
                        <input type="text" placeholder=''/>
                    </div>
                </div>
            </form>
        </div>
    )
}
