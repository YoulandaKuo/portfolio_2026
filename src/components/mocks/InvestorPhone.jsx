export default function InvestorPhone() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[34px]">
      <div style={{ width: 170, aspectRatio: '9/19', borderRadius: 24, background: '#1c2438', boxShadow: '0 22px 50px -20px rgba(0,0,0,.5)', padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 10, fontFamily: '-apple-system,system-ui,sans-serif', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 9 }}><span>9:41</span><span>●</span></div>
        <div style={{ margin: '20px auto 8px', width: 120, height: 80, borderRadius: 8, background: 'linear-gradient(135deg,#9a8bd6,#5b67c2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, fontWeight: 600 }}>1.33%</div>
        <h5 style={{ textAlign: 'center', color: '#fff', margin: '6px 0 4px', fontSize: 14, fontWeight: 600 }}>Low default rates</h5>
        <p style={{ fontSize: 9, color: '#a4adc4', textAlign: 'center', lineHeight: 1.5, margin: 0 }}>Underwriting filters out 92% of risk before listing.</p>
        <div style={{ flex: 1 }} />
        <button style={{ background: '#6e7adf', color: '#fff', border: 0, borderRadius: 8, padding: 10, fontSize: 11, fontWeight: 600 }}>Sign up</button>
        <div style={{ textAlign: 'center', color: '#a4adc4', fontSize: 9 }}>Skip for now</div>
      </div>
    </div>
  )
}
