export default function TerminalMock() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[34px]">
      <div style={{ width: '80%', aspectRatio: '16/10', background: '#0d1620', borderRadius: 8, boxShadow: '0 22px 40px -20px rgba(0,0,0,.6)', overflow: 'hidden', fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#cfe' }}>
        <div style={{ display: 'flex', gap: 6, padding: '9px 12px', background: '#16212d', borderBottom: '1px solid #233140' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => <i key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
        </div>
        <div style={{ padding: '14px 16px', lineHeight: 1.55 }}>
          <div><span style={{ color: '#5b6a7a' }}>$</span> <span style={{ color: '#7cb3ff' }}>jot</span> new "morning pages"</div>
          <div style={{ color: '#5b6a7a' }}>→ created entry · 2026-05-12 · 06:41</div>
          <div><span style={{ color: '#5b6a7a' }}>$</span> <span style={{ color: '#7cb3ff' }}>jot</span> tag #ritual #writing</div>
          <div style={{ color: '#5b6a7a' }}>→ 2 tags added</div>
          <div><span style={{ color: '#5b6a7a' }}>$</span> <span style={{ color: '#7cb3ff' }}>jot</span> recent --limit 3</div>
          <div><span style={{ color: '#7be0a6' }}>●</span> on craft &amp; constraints <span style={{ color: '#5b6a7a' }}>· 3d</span></div>
          <div><span style={{ color: '#7be0a6' }}>●</span> rough sketches, riso <span style={{ color: '#5b6a7a' }}>· 6d</span></div>
          <div><span style={{ color: '#f5b97a' }}>●</span> field notes draft <span style={{ color: '#5b6a7a' }}>· wip</span></div>
        </div>
      </div>
    </div>
  )
}
