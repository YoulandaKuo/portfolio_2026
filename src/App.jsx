import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Helix from './pages/Helix'
import Meta from './pages/Meta'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/helix" element={<Helix />} />
        <Route path="/case-studies/meta" element={<Meta />} />
      </Routes>
    </BrowserRouter>
  )
}
