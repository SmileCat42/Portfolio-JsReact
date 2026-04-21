import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import P1 from './part/P1.jsx'
import P2 from './part/P2.jsx'
import P3 from './part/P3.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='text-2xl items-center text-orange-500'>
      <P1/>
      <P2/>
      <P3/>
   </div>
  )
}

export default App
