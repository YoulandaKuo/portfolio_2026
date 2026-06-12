export default function MapMock() {
  return (
    <div style={{ position: 'absolute', inset: 18, borderRadius: 6, background: 'radial-gradient(circle at 30% 60%, rgba(255,255,255,.18), transparent 40%), repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 2px, transparent 2px 22px), linear-gradient(180deg,#1c2730,#243240)', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 400 320" preserveAspectRatio="none">
        <path d="M20 260 Q 90 200, 140 220 T 250 160 T 380 80" stroke="#f4b860" strokeWidth="2" fill="none" strokeDasharray="2 5" />
        <path d="M30 90 Q 120 130, 200 120 T 360 200" stroke="#7be0a6" strokeWidth="2" fill="none" strokeDasharray="2 5" />
      </svg>
      {[
        { left: '14%', top: '78%', color: '#f4b860', shadow: 'rgba(244,184,96,.25)' },
        { left: '44%', top: '64%', color: '#7be0a6', shadow: 'rgba(123,224,166,.25)' },
        { left: '78%', top: '28%', color: '#f4b860', shadow: 'rgba(244,184,96,.25)' },
        { left: '30%', top: '30%', color: '#7be0a6', shadow: 'rgba(123,224,166,.25)' },
      ].map((p, i) => (
        <div key={i} style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: p.color, boxShadow: `0 0 0 4px ${p.shadow}`, left: p.left, top: p.top }} />
      ))}
      <div style={{ position: 'absolute', left: 18, bottom: 14, color: '#bbd1c8', fontFamily: '"JetBrains Mono",monospace', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase' }}>Field routes · 12 cities · Q3</div>
    </div>
  )
}
