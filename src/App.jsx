import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const {open,setOpen} = useState(false);
  return (
    <>
    <div className="flex items-center 
    justify-between h-12 bg-green-700 
    text-white p-4">
      <div className="font-bold">Logo</div>

      {/*desktop*/}
      <div className="hidden sm:flex gap-2">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>

      <button className="text-xl cursor-pointer"
      onClick={()=> setOpen(!open)}
      >=</button>

    {/*Mobile*/}
    {open && (
    <div className="hidden sm:flex gap-2">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
)}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 text-green-800 p-6 gap-6 font-semibold text-2xl">
        <div className="bg-green-200 p-4 rounded hover:bg-green-300 hover:scale-105 duration-500">Wendy 1</div>
        <div className="bg-green-200 p-4 rounded hover:bg-green-300 hover:scale-105 duration-500">Wendy 2</div>
        <div className="bg-green-200 p-4 rounded hover:bg-green-300 hover:scale-105 duration-500">Wendy 3</div>
        <div className="bg-green-200 p-4 rounded hover:bg-green-300 hover:scale-105 duration-500">Wendy 4</div>
        <div className="bg-green-200 p-4 rounded hover:bg-green-300 hover:scale-105 duration-500">Wendy 5</div>
      </div>
      </>
  )
}

export default App