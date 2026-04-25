import React from 'react'
import pt from '../assets/plant.png'
const P5 = () => {
  return (
    <div className="flex justify-center py-5 items-center min-h-screen bg-gray-700">
        <div className="container grid grid-cols-1 lg:grid-cols-3 px-10 md:px-2 gap-10 place-items-center">
            <img src={pt}
            className="w-55 lg:w-1/2 "/>
            <div className="">
                <h1 className="text-5xl font-bold text-white
                ">
                    <span className="text-green-400">Tree</span> Species
                </h1>
                <div className="text-white mt-8 text-xl">
                    <span className="ml-8">
                The selection process for tree species across</span>
                 our various project sites is guided by our commitment to ensuring both environmental sustainability and the enhancement of local livelihoods. We base our choices on three primary factors:
                </div>
                <div className="mt-8 text-white text-xl">
                    <div>
                    <span className="text-green-500 font-semibold">
1. Ecological Importance :</span> Prioritizing species that contribute to wildlife conservation and biodiversity.
</div>
<div>
<span className="text-green-500 font-semibold">
2. Economic Value : </span>Choosing species that bring direct benefits to farmers and local communities through sustainable harvests.
</div>
<div>
    <span className="text-green-500 font-semibold">
3. Adaptability: </span>Ensuring the species thrives in the local environment, contributing to long-term ecological health.
            </div></div></div>

            <div className="bg-gray-600 w-56 h-full rounded-3xl border text-green-200">
                <div className="text-green-200 text-center font-semibold
                py-5 text-3xl bg-green-800 border "> Tools</div>
                <div className="text-white text-xl font-semibold
                py-5 text-center hover:bg-green-400 hover:scale-110 transition-all duration-300
                "><span className="text-orange-500 text-sm">►</span> Takecare</div>
                <div className="text-white text-xl font-semibold
                py-5 text-center hover:bg-green-400 hover:scale-110 transition-all duration-300
                "><span className="text-orange-500 text-sm">►</span> Powerset</div>
                <div className="text-white text-xl font-semibold
                py-5 text-center hover:bg-green-400 hover:scale-110 transition-all duration-300
                "><span className="text-orange-500 text-sm">►</span> Training</div>
                <div className="text-white text-xl font-semibold
                py-5 text-center hover:bg-green-400 hover:scale-110 transition-all duration-300
                "><span className="text-orange-500 text-sm">►</span> Rest</div>
                <div className="text-white text-xl font-semibold
                py-5 text-center hover:bg-green-400 hover:scale-110 transition-all duration-300
                "><span className="text-orange-500 text-sm">►</span> Destroy</div>
                <div className="py-5 flex justify-center">
                    <div className="bg-pink-500 py-4 w-30 text-white text-center
                    font-bold rounded-3xl text-xl hover:bg-pink-400 
                    hover:scale-110 transition-all duration-300">
                     Exit </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default P5