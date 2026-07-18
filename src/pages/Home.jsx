import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import CaseStudies from '../components/CaseStudies'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    // Small delay so the page has rendered before scrolling
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <Nav />
      <Hero />
      <CaseStudies />
      <About />
      <Footer />
    </>
  )
}
