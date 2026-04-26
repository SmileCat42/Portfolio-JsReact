import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import P1 from './part/P1.jsx'
import P2 from './part/P2.jsx'
import P3 from './part/P3.jsx'
import P4 from './part/P4.jsx'
import P5 from './part/P5.jsx'
import P6 from './part/P6.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='text-orange-500'>
    <P3/>
    <P4/>
    <P5/>
    <P6/>
   </div>
  )
}

export default App
