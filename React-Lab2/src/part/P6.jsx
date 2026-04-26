import React from 'react'
import web from '../assets/web.png'

const P6 = () => {
  return (
    <div className="min-h-screen bg-gray-700 py-20 md:py-5
    ">
        <div className="grid grid-cols-1 md:grid-cols-3 
        place-items-center py-10">
            <div className="relative h-90
            w-70 rounded-3xl order-2
            mb-10">
            <div className="absolute bg-blue-300 opacity-50 inset-0"></div>
                <img src={web}/>
            </div>
            <div className="bg-blue-300 h-90
            w-70 rounded-3xl opacity-50 order-1
            mb-10">aa</div>
            <div className="bg-blue-300 h-90
            w-70 rounded-3xl opacity-50 order-3
            mb-10">aa</div>
    </div></div>
  )
}
export default P6