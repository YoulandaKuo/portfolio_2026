import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'

export default function Nav({ homePrefix = '' }) {
  const lastY = useRef(0)
  const hidden = useMotionValue(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuOpenRef = useRef(false)

  // Keep ref in sync so scroll handler always sees current value
  useEffect(() => { menuOpenRef.current = menuOpen }, [menuOpen])

  // When menu opens, bring nav into view and keep it there
  useEffect(() => {
    if (menuOpen) animate(hidden, 0, { duration: 0.2, ease: 'easeInOut' })
  }, [menuOpen, hidden])

  useEffect(() => {
    function onScroll() {
      if (menuOpenRef.current) return // don't hide nav while menu is open
      const y = window.scrollY
      if (y > lastY.current && y > 80) {
        animate(hidden, 1, { duration: 0.35, ease: 'easeInOut' })
      } else {
        animate(hidden, 0, { duration: 0.35, ease: 'easeInOut' })
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hidden])

  const y = useTransform(hidden, [0, 1], ['0%', '-110%'])

  const navLinks = [
    { href: `${homePrefix}#case-studies`, label: 'Case Studies', id: 'case-studies' },
    { href: `${homePrefix}#about`, label: 'About', id: 'about' },
  ]

  const handleMobileNavClick = (e, id) => {
    if (!id) return
    setMenuOpen(false)
    if (homePrefix) {
      // On a case study page — let the browser navigate to /#section normally
      return
    }
    // On home page — wait for menu close animation, then scroll
    e.preventDefault()
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 320)
  }

  return (
    <motion.div style={{ y }} className="sticky top-0 z-50">
      <nav className="flex items-center justify-between px-9 py-[22px] border-b border-rule bg-canvas backdrop-saturate-[140%] backdrop-blur-md">
        <Link to="/" aria-label="Home" className="w-7 h-7 inline-flex items-center justify-center text-rust">
          <img src="/assets/nav-mark.png" alt="" width={28} height={28} className="block object-contain" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 font-serif text-[18px] tracking-[0.01em]">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="py-[6px] px-[2px] transition-colors hover:text-rust-deep">{label}</a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block w-5 h-[1.5px] bg-current origin-center"
            animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-current origin-center"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-current origin-center"
            animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-canvas border-b border-rule backdrop-saturate-[140%] backdrop-blur-md"
          >
            <div className="flex flex-col px-9 py-4 gap-1 font-serif text-[18px] tracking-[0.01em]">
              {navLinks.map(({ href, label, id }) => (
                <a
                  key={href}
                  href={href}
                  className="py-3 transition-colors hover:text-rust-deep"
                  onClick={(e) => handleMobileNavClick(e, id)}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
