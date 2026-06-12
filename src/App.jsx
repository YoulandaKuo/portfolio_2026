import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Helix from './pages/Helix'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/helix" element={<Helix />} />
      </Routes>
    </BrowserRouter>
  )
}
