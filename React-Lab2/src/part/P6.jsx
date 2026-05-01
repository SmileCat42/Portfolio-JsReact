import React from 'react'
import web from '../assets/web.png'
import oop from '../assets/oop.png'

const P6 = () => {
  return (
    <div className="min-h-screen bg-gray-700 py-20 md:py-5
    ">
        <div className="grid grid-cols-1 md:grid-cols-3 
        place-items-center py-10">
            <div className="relative h-110
            w-75 rounded-3xl order-1 md:order-2
            mb-10">
              <img src={web}
              className="relative z-10 opacity-90 rounded-3xl"/>

              
              <div className="absolute bg-blue-300/50 inset-0 rounded-3xl shadow-xl shadow-gray-500"></div>
              <div className="absolute">
              <h2 className="z-20 text-white
              py-3 ml-3 mt-2 text-xl font-semibold">WEB PROGRAMMING</h2>
              <div className="py-3 px-3 text-gray-300">
                Training design UI and adapte technique from classroom to real project make 
                hardskills for works 
              </div>
              <a href='#P4'>
              <div className="py-5 flex justify-center">
                <div className="bg-gray-400 py-2 text-white text-center w-30 h-10
                rounded-xl hover:scale-110 hover:bg-yellow-200 hover:text-orange-800
                ">
                  
                Register</div>
              </div></a>
            </div></div>

            <div className="relative h-110
            w-75 rounded-3xl order-2 md:order-1
            mb-10">
              <img src={oop}
              className="relative z-10 rounded-3xl opacity-90"/>
              <div className="absolute bg-blue-300/50 inset-0 rounded-3xl shadow-xl shadow-gray-500"></div>
              <div className="absolute">
                <h2 className="text-white py-2 mt-3 px-3 text-xl font-semibold">
                  OBJECT ORIENTED
                </h2>
                <div className="text-gray-300 px-3 mt-3">
                  Learn processing of syntax, sematic of C++. learn about OOP inheritance class Polymorphism Abstractclass how to work
                </div>
                <div className="flex justify-center py-2">
                  <div className=" bg-gray-400 w-30 h-12 text-white text-center py-3
                  rounded-xl font-semibold hover:scale-110 hover:bg-gray-300 hover:text-gray-700">
                  Register</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-300 h-90
            w-70 rounded-3xl opacity-50 order-3
            mb-10">aa</div>
    </div></div>
  )
}
export default P6