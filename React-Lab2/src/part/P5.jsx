import React from 'react'
import pt from '../assets/plant.png'
const P5 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700">
        <div className="container grid grid-cols-3 place-items-center">
            <img src={pt}
            className="w-1/2"/>
            <div>
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
            <div>c</div>
        </div>
    </div>
  )
}
export default P5