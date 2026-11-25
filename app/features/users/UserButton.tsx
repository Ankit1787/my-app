"use client"
import React, { useState } from 'react'

const UserButton = () => {
    const [count, setCount] = useState<number>(0);
   
    return (
        <div>   <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
        >
            Increment
        </button>
            <span>Count: {count}</span></div>
    )
}

export default UserButton