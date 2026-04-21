import React from 'react'

const P1 = () => {
  return (
    <div className="w-[900px] flex justify-center py-5 mx-auto shadow-xl
    bg-blue-300 rounded-2xl mt-4 bg-linear-to-br from-gray-700 to-black">
      <div className="flex justify-between space-x-6">
      <a href="/"
      className="hover:scale-110 transition-all duration-300">
      <span className="text-gray-200 font-bold">
          Navbar
          <span className="text-yellow-500 font-bold">.</span>
      </span></a>
      <a href="/"
      className="hover:scale-110 transition-all duration-300">
      <span className="text-yellow-500 font-semibold hover:text-yellow-300">
          About
      </span></a>
      <a href="/"
      className="hover:scale-110 transition-all duration-300">
      <span className="text-yellow-500 font-semibold hover:text-yellow-300">
          Product
      </span></a>
      <a href="/"
      className="hover:scale-110 transition-all duration-300
      hover:bg-yellow-700">
      <span className="text-yellow-500 font-semibold hover:text-yellow-300">
          Search
      </span></a>
      
      </div>
    </div>
  )
}
export default P1