import React from 'react'
import ft from '../assets/fruit.png'

const P4 = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center
    overflow-hidden">
        <div className="container place-items-center grid grid-cols-2 items-center">
            <div className="max-w-md"> 
                <h1 className="text-white text-5xl font-bold mb-4">
                        The <span className="text-pink-400 text-5xl font-bold mb-4">Sweet</span>
                </h1>
                <div  className="text-white text-xl mb-4">
                Generating fancy text. So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section
            </div>
            </div>
            <div>
            <img src={ft}
            className="w-64"/>
            </div>
    </div></div>
  )
}

export default P4
