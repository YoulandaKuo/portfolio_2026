import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

export default function Nav({ homePrefix = '' }) {
  const lastY = useRef(0)
  const hidden = useMotionValue(0) // 0 = visible, 1 = hidden

  useEffect(() => {
    function onScroll() {
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

  return (
    <motion.nav
      style={{ y }}
      className="flex items-center justify-between px-9 py-[22px] border-b border-rule sticky top-0 z-50 bg-canvas backdrop-saturate-[140%] backdrop-blur-md"
    >
      <Link to="/" aria-label="Home" className="w-7 h-7 inline-flex items-center justify-center text-rust">
        <img src="/assets/nav-mark.png" alt="" width={28} height={28} className="block object-contain" />
      </Link>
      <div className="flex gap-12 font-serif text-[18px] tracking-[0.01em]">
        <a href={`${homePrefix}#case-studies`} className="py-[6px] px-[2px] transition-colors hover:text-rust-deep">Case Studies</a>
        <a href={`${homePrefix}#side-projects`} className="py-[6px] px-[2px] transition-colors hover:text-rust-deep">Side Projects</a>
        <a href={`${homePrefix}#about`} className="py-[6px] px-[2px] transition-colors hover:text-rust-deep">About</a>
      </div>
    </motion.nav>
  )
}
