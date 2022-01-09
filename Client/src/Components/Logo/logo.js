import React from 'react'

export default function Logo() {
    return (
        <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 sm:w-6 sm:h-6' viewBox="0 0 24 24" fill='white'><path d="m21 2-5 5-4-5-4 5-5-5v13h18zM5 21h14a2 2 0 0 0 2-2v-2H3v2a2 2 0 0 0 2 2z"></path></svg>
            <span className='text-sm text-white px-1 sm:text-xl font-bold'>Kings Landing</span>
        </div>

    )
}
