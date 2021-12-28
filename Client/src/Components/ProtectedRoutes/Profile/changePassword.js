import React from 'react'

export default function ChangePassword() {
    return (
        <section className="px-8 py-8 sm:px-16 sm:w-5/6">
            <h2 className="font-medium text-xl py-2">Change Password</h2>
            <form className="">
                <div className="flex flex-col my-2">
                    <label className="py-2">Old password</label>
                    <input type="text" className="px-2 py-2 rounded-md border-1 outline-none border-gray-500" placeholder="" />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">New password</label>
                    <input type="text" className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="" />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <div className="flex flex-col my-2">
                    <label className="py-2">Confirm new password</label>
                    <input type="text" className="px-2 py-2 rounded-md outline-none border-1 border-gray-500" placeholder="" />
                    <p className="py-2 font-Roboto">Leave blank to keep same password</p>
                </div>
                <button className="font-medium px-3 py-2 rounded-md text-white bg-indigo-500 mt-2 mb-4 shadow-2xl">Change Password</button>
            </form>
        </section>
    )
}
