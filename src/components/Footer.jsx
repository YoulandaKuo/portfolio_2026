const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21H9V9z" />
  </svg>
)

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 7 9-7" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="mt-[120px] px-11 py-[60px] border-t border-rule flex items-center justify-between font-mono text-[11px] tracking-[0.16em] uppercase text-ink-soft">
      <div>© 2026 — YOULANDA KUO</div>
      <div className="flex gap-[14px]">
        <a href="https://www.linkedin.com/in/youlanda-k-5145a031/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="w-[34px] h-[34px] rounded-full bg-canvas-2 flex items-center justify-center text-porter transition-colors hover:bg-rust hover:text-white">
          <LinkedInIcon />
        </a>
        <a href="#" aria-label="Email"
          className="w-[34px] h-[34px] rounded-full bg-canvas-2 flex items-center justify-center text-porter transition-colors hover:bg-rust hover:text-white">
          <EmailIcon />
        </a>
      </div>
    </footer>
  )
}
