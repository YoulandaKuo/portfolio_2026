import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Meta from './pages/Meta'
import Grab from './pages/Grab'
import ExpenseTracker from './pages/ExpenseTracker'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/meta" element={<Meta />} />
        <Route path="/case-studies/grab" element={<Grab />} />
        <Route path="/side-projects/expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  )
}
