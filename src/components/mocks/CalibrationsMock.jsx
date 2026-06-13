export default function CalibrationsMock() {
  const rows = [
    { queue: 'LiveChat_EMEA_Concentrix', date: '02 Jun 2022', time: '2:41:08 PM', status: 'Not started', done: false },
    { queue: 'LiveChat_EMEA_Concentrix', date: '30 May 2022', time: '2:41:08 PM', status: 'Not started', done: false },
    { queue: 'LiveChat_SEA_Concentrix',  date: '30 May 2022', time: '2:35:20 PM', status: 'Completed',   done: true  },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center p-[32px]">
      <div style={{
        width: '100%', maxWidth: 720, height: '100%', maxHeight: 560,
        background: '#fff', borderRadius: 10,
        boxShadow: '0 28px 70px -24px rgba(0,0,0,.45)',
        display: 'flex', overflow: 'hidden',
        fontFamily: '-apple-system,system-ui,sans-serif', fontSize: 13, color: '#111',
      }}>
        {/* Sidebar */}
        <div style={{ width: 48, background: '#fff', borderRight: '1px solid #eaeaea', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 14, gap: 4 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#fff" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {[
            <path key="doc" d="M4 2h6l3 3v9H4V2z" stroke="#aaa" strokeWidth="1.4" strokeLinejoin="round"/>,
            <path key="ppl" d="M10 7a2 2 0 11-4 0 2 2 0 014 0zM4 13c0-2.2 1.8-3 4-3s4 .8 4 3" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round"/>,
            <><line key="l1" x1="4" y1="6" x2="12" y2="6" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round"/><line key="l2" x1="4" y1="9" x2="12" y2="9" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round"/><line key="l3" x1="4" y1="12" x2="9" y2="12" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round"/></>,
          ].map((icon, i) => (
            <div key={i} style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{icon}</svg>
            </div>
          ))}
          <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eef2ff', borderRadius: 6 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.5" stroke="#1a73e8" strokeWidth="1.4"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2" stroke="#1a73e8" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </div>
          {/* bottom icons */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 14 }}>
            {[
              <path key="chart" d="M3 12V9l3-3 3 3 4-5" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>,
              <><circle key="c" cx="8" cy="8" r="6" stroke="#aaa" strokeWidth="1.4"/><path key="p" d="M8 5v3l2 2" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round"/></>,
              <path key="flag" d="M4 14V4l5 2-5 2" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>,
            ].map((icon, i) => (
              <div key={i} style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{icon}</svg>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, padding: '18px 22px', position: 'relative' }}>
          <h2 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 600, color: '#111' }}>Calibrations</h2>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 14, marginBottom: 16, alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 10, color: '#555', marginBottom: 4, fontWeight: 500 }}>Time range</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #d0d5dd', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#555', minWidth: 130 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="9" rx="1.5" stroke="#888" strokeWidth="1.2"/><path d="M1 5h10M4 1v2M8 1v2" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/></svg>
                Last 30 days
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#555', marginBottom: 4, fontWeight: 500 }}>Queue</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #d0d5dd', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#aaa', minWidth: 150, justifyContent: 'space-between' }}>
                Select a queue
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#555', marginBottom: 4, fontWeight: 500 }}>Expert status</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 12 }}>
                {[['Not started', false], ['Completed', true]].map(([label, checked]) => (
                  <label key={label} style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
                    <div style={{ width: 14, height: 14, border: `1.5px solid #1a73e8`, borderRadius: 3, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2.5 2.5 4-5" stroke="#1a73e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div style={{ border: '1px solid #eaeaea', borderRadius: 6, overflow: 'hidden', flex: 1 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr 1fr', padding: '8px 14px', background: '#fafafa', borderBottom: '1px solid #eaeaea', fontSize: 11, color: '#555', fontWeight: 500 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>QMS queue <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M5 2L3 4M5 2l2 2M5 8L3 6M5 8l2-2" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round"/></svg></span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>Date started <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 1v6M1.5 4.5L4 7l2.5-2.5" stroke="#1a73e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span>Expert status</span>
            </div>
            {rows.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr 1fr', padding: '9px 14px', borderBottom: i < rows.length - 1 ? '1px solid #f0f0f0' : 'none', alignItems: 'center', fontSize: 12 }}>
                <span style={{ color: '#1a73e8', fontWeight: 500 }}>{row.queue}</span>
                <span style={{ color: '#444' }}>{row.date}<br /><span style={{ color: '#888', fontSize: 11 }}>{row.time}</span></span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#444' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: row.done ? '#1aa861' : '#888', flexShrink: 0 }} />
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          {/* Toast */}
          <div style={{ position: 'absolute', bottom: 16, left: 22, right: 22, background: '#fff', border: '1px solid #e0e0e0', borderLeft: '4px solid #1aa861', borderRadius: 8, padding: '10px 12px', boxShadow: '0 4px 16px -6px rgba(0,0,0,.18)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="8" cy="8" r="7" fill="#1aa861"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 2 }}>Calibration started successfully</div>
              <div style={{ fontSize: 11, color: '#555' }}>You've successfully started calibration <span style={{ color: '#1a73e8' }}>#119876543213</span></div>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ cursor: 'pointer', flexShrink: 0, marginTop: 2 }}><path d="M2 2l8 8M10 2L2 10" stroke="#888" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}
