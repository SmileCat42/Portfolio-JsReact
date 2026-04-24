import React from 'react'

const P3 = () => {
  return (
    <div className="flex justify-between  mx-auto mt-4 w-[800px] bg-linear-to-br from-gray-700 to-black
    rounded-2xl py-4">
      <div className="flex cols-2 justify-center items-center">
        <span className="text-white font-bold pl-10 text-xl
        hover:scale-110 transition-all duration-300">
          Portfolio<span className="text-pink-500 font-bold">.</span>
        </span>
        <span className="text-pink-300 pl-15
        hover:scale-110 transition-all duration-300">
          Home
        </span>
        <span className="text-pink-300 pl-10
        hover:scale-110 transition-all duration-300">
          About
        </span>
        <span className="text-pink-300 pl-10
        hover:scale-110 transition-all duration-300">
          Product
        </span>
        <span className="text-pink-300 pl-10
        hover:scale-110 transition-all duration-300">
          Contact
        </span>
      </div>
      <div className="flex items-center hover:scale-110 transition-all duration-300 mr-10">
        <a href="/"
        >
          <span className="text-sm bg-linear-to-br from-pink-400 to-pink-600 py-3 px-6 font-semibold 
            text-white rounded-2xl ">Sign in</span>
        </a>
      </div>
    </div>
  )
}
export default P3