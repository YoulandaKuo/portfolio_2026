import { motion } from 'framer-motion'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ProjectCard({ href, bgClass, title, children, arrowLight = false }) {
  return (
    <a href={href || '#'} className="relative block cursor-pointer group">
      <motion.div
        className={`relative rounded-[6px] overflow-hidden ${bgClass}`}
        style={{ aspectRatio: '4/3' }}
        whileHover={{ y: -4, boxShadow: '0 22px 40px -28px rgba(40,30,20,0.45)' }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        {children}
        <div
          className={[
            'absolute top-[14px] right-[14px] w-[34px] h-[34px] rounded-full flex items-center justify-center',
            'opacity-0 translate-x-1 -translate-y-1 transition-all duration-[250ms]',
            'group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0',
            arrowLight ? 'bg-white/20 text-white' : 'bg-white/92 text-porter',
          ].join(' ')}
        >
          <ArrowIcon />
        </div>
      </motion.div>
      <div className="flex items-baseline gap-[18px] pt-[18px] px-[2px]">
        <span className="text-[24px] text-porter font-medium tracking-[0.005em]">{title}</span>
      </div>
    </a>
  )
}
