import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} min-h-screen text-green-800 p-4 dark:bg-slate-900 dark:text-white`} min>
      <div className="flex items-center 
    justify-between h-12  
    text-green-800 p-4 dark:bg-slate-900 dark:text-white">
        <div className="font-bold">Logo</div>

        {/*desktop*/}
        <div className="hidden sm:flex gap-2 text-bold">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button className="text-xl cursor-pointer dark:bg-slate-900 dark:text-white"
            onClick={() => setTheme(theme === "light" ? "dark":"light")}
          >
            {theme === "light" ? "🌙":"☀"}
          </button>
        </div>

        <button className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >=</button>


      </div>

      {/*Mobile*/}
      {open && (
        <div className="flex flex-col text-center items-center gap-2 text-slate-900 p-4 dark:bg-slate-900 dark:text-white">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button className="text-xl cursor-pointer sm:hidden dark:bg-slate-900 dark:text-white"
            onClick={() => setTheme(theme === "light" ? "dark":"light")}
          >
            {theme === "light" ? "🌙":"☀"}
          </button>
        </div>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 dark:bg-slate-900 dark:text-white p-6 gap-6 font-semibold text-2xl">
        <div className="bg-green-400 p-4 rounded hover:bg-green-500 hover:scale-105 duration-500">Golfring 1</div>
        <div className="bg-green-400 p-4 rounded hover:bg-green-500 hover:scale-105 duration-500">Golfring 2</div>
        <div className="bg-green-400 p-4 rounded hover:bg-green-500 hover:scale-105 duration-500">Golfring 3</div>
        <div className="bg-green-400 p-4 rounded hover:bg-green-500 hover:scale-105 duration-500">Golfring 4</div>
        <div className="bg-green-400 p-4 rounded hover:bg-green-500 hover:scale-105 duration-500">Golfring 5</div>
      </div>
    </div>
  )
}

export default App