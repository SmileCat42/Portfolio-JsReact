import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './Page/Home.jsx'
import Int from './Page/Intrend.jsx'
import Nova from './Page/Nova.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intrend" element={<Int/>}/>
        <Route path="/nova" element={<Nova/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
