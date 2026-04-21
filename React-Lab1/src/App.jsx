import { BrowserRouter, Routes, Route } from "react-router-dom"
import Lab1 from "./Page/Lab1"
import Lab2 from "./Page/Lab2"

function App() {
  return (
    <BrowserRouter basename="/React-Tailwind-Labs/">
      <Routes>
        <Route path="/" element={<Lab1 />} />
        <Route path="/lab2" element={<Lab2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App