export default function AccountRecoveryPhone() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[34px]">
      <div style={{ width: 170, aspectRatio: '9/19', borderRadius: 24, background: '#fff', boxShadow: '0 22px 50px -20px rgba(0,0,0,.5)', padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 10, fontFamily: '-apple-system,system-ui,sans-serif', color: '#2c4a52' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 9 }}><span>9:41</span><span>● ● ●</span></div>
        <div style={{ margin: '18px auto 4px', width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(180deg,#1aa861,#0d7a47)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20 }}>⌧</div>
        <h5 style={{ textAlign: 'center', margin: '0', fontSize: 14, fontWeight: 600 }}>PIN attempts exceeded</h5>
        <p style={{ fontSize: 9.5, color: '#6c7480', textAlign: 'center', margin: 0, lineHeight: 1.5 }}>For your safety, payments are paused. Verify identity to restore.</p>
        <div style={{ flex: 1 }} />
        <button style={{ background: '#1aa861', color: '#fff', border: 0, borderRadius: 8, padding: 10, fontSize: 11, fontWeight: 600 }}>Verify identity</button>
        <button style={{ background: '#fff', color: '#1aa861', border: '1px solid #d6e6dd', borderRadius: 8, padding: 10, fontSize: 11, fontWeight: 600 }}>Not now</button>
      </div>
    </div>
  )
}
