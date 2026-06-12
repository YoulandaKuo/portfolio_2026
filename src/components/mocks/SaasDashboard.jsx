export default function SaasDashboard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[34px]">
      <div style={{ width: '78%', aspectRatio: '16/10', padding: '16px 18px', fontSize: 11, background: '#fff', borderRadius: 10, boxShadow: '0 18px 40px -20px rgba(0,0,0,.35)', overflow: 'hidden', fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Text","Inter",system-ui,sans-serif', color: '#222' }}>
        <h6 style={{ margin: '0 0 12px', fontSize: 12, fontWeight: 600 }}>Quality Reviews · This Week</h6>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          {['Last 30 days', 'All queues', 'Status: any'].map(c => (
            <span key={c} style={{ background: '#f1f3f7', borderRadius: 4, padding: '4px 8px', fontSize: 10, color: '#4a5566' }}>{c}</span>
          ))}
        </div>
        {[
          ['EMEA · Concentrix', 'Completed', true],
          ['SEA · Lumina Ops', 'In review', false],
          ['NA · Field Team', 'Queued', false],
          ['LATAM · Aurora', 'Completed', true],
          ['JP · Onsite', 'In review', false],
        ].map(([name, status, ok]) => (
          <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #eee' }}>
            <span>{name}</span>
            <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 999, background: ok ? '#e6f6ee' : '#eef3ff', color: ok ? '#1aa861' : '#2f6fd6' }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
