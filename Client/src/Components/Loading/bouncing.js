import React from 'react';

export default function Bouncing() {
    return <div className="flex items-center justify-center space-x-2 py-10 animate-bounce">
        <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
    </div>
}
