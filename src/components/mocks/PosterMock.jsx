export default function PosterMock() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[34px]">
      <div style={{ width: '62%', aspectRatio: '3/4', background: '#f7ecd6', borderRadius: 6, boxShadow: '0 22px 40px -20px rgba(0,0,0,.4)', padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#2c3e44', fontFamily: '"Cormorant Garamond",serif' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, letterSpacing: '.2em' }}>MMXXVI</div>
          <div style={{ fontSize: 36, lineHeight: .95, fontStyle: 'italic', color: '#a44820', marginTop: 10 }}>A small<br />annual,<br />printed by<br />hand.</div>
        </div>
        <div style={{ alignSelf: 'flex-end', width: 60, height: 60, border: '1.5px solid currentColor', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, letterSpacing: '.16em', fontFamily: '"JetBrains Mono",monospace' }}>N°04</div>
      </div>
    </div>
  )
}
