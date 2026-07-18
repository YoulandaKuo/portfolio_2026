import { Link } from 'react-router-dom'

/**
 * NextCaseStudy — end-of-page navigation to the next case study.
 *
 * Props:
 *   to    — route path for the next case study
 *   title — title node or string (may include JSX for italic highlights)
 *   label — overrides the "Next case study" label (optional)
 */
export default function NextCaseStudy({ to, title, label = 'Next case study' }) {
  return (
    <div className="max-w-[1040px] mx-auto px-11 pt-[120px] pb-[120px]">
      <div className="font-mono text-[11px] tracking-[.2em] uppercase text-ink-soft mb-[14px]">
        {label}
      </div>
      <Link
        to={to}
        className="inline-flex items-baseline gap-6 text-porter font-medium tracking-[-0.01em] transition-colors hover:text-rust-deep group"
        style={{ fontSize: 'clamp(32px,4.5vw,62px)', lineHeight: 1 }}
      >
        <span>{title}</span>
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rust text-white flex-shrink-0 translate-y-2 transition-transform group-hover:translate-x-[6px]">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M5 15L15 5M15 5H8M15 5v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </div>
  )
}
