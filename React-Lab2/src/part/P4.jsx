import React from 'react'
import ft from '../assets/fruit.png'

const P4 = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center
    overflow-hidden">
        <div className="container place-items-center grid grid-cols-1 
        md:grid-cols-2 items-center py-20 md:py-5">
            <div className="max-w-md py-15 md:py-10 px-15 md:px-10 md:ml-20 order-2 md:order-1"> 
                <h1 className="text-white text-5xl font-bold mb-4">
                        The <span className="text-pink-400 text-5xl font-bold mb-4">Sweet</span>
                </h1>
                <div  className="text-white text-xl">
                Generating fancy text. So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section
            </div>
            </div>
            <div className="order-1 md:order-2">
            <img src={ft}
            className="w-64"/>
            </div>
    </div></div>
  )
}

export default P4
