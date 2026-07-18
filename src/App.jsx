import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Meta from './pages/Meta'
import Grab from './pages/Grab'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/meta" element={<Meta />} />
        <Route path="/case-studies/grab" element={<Grab />} />
      </Routes>
    </BrowserRouter>
  )
}
