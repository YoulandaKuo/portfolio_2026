export default function ScoringMock() {
  const messages = [
    { from: 'customer', text: "Hi, I can't access my account — it says my password is wrong but I haven't changed it." },
    { from: 'agent', text: "Sorry to hear that! Let me look into this for you. Could you confirm the email on your account?" },
    { from: 'customer', text: "It's alex.r@example.com" },
    { from: 'agent', text: "Thanks. I can see 3 failed login attempts triggered a temporary lock. I'll send you a reset link now — you should receive it within 2 minutes." },
    { from: 'customer', text: "Got it, thank you!" },
  ]

  const rubric = [
    { label: 'Empathy & Greeting', score: 4, max: 5 },
    { label: 'Policy Adherence', score: 5, max: 5 },
    { label: 'Resolution Quality', score: 4, max: 5 },
    { label: 'Communication Clarity', score: 3, max: 5 },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center p-[28px]">
      <div style={{
        width: '100%', maxWidth: 720, height: '100%', maxHeight: 520,
        background: '#fff', borderRadius: 10,
        boxShadow: '0 28px 70px -24px rgba(0,0,0,.45)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        fontFamily: '-apple-system,system-ui,sans-serif', fontSize: 13, color: '#111',
      }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 18px', borderBottom: '1px solid #eaeaea', background: '#fafafa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontWeight: 600, fontSize: 13, color: '#111' }}>Expert Scoring</span>
            <span style={{ fontSize: 11, color: '#888' }}>Calibration #119876543213</span>
            <span style={{ fontSize: 10, background: '#eef4ff', color: '#1a73e8', padding: '2px 8px', borderRadius: 10, fontWeight: 500, letterSpacing: '.04em' }}>In progress</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ fontSize: 12, padding: '5px 14px', borderRadius: 5, border: '1px solid #d0d5dd', background: '#fff', color: '#555', cursor: 'pointer' }}>Save draft</button>
            <button style={{ fontSize: 12, padding: '5px 14px', borderRadius: 5, border: 'none', background: '#1a73e8', color: '#fff', cursor: 'pointer', fontWeight: 500 }}>Submit score</button>
          </div>
        </div>

        {/* body */}
        <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
          {/* conversation panel */}
          <div style={{ flex: 1, padding: '14px 16px', overflowY: 'auto', borderRight: '1px solid #eaeaea', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>
              Conversation · Oct 14, 2022 · LiveChat EMEA
            </div>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: m.from === 'customer' ? 'flex-start' : 'flex-end' }}
              >
                <span style={{ fontSize: 10, color: '#999', letterSpacing: '.04em' }}>
                  {m.from === 'customer' ? 'Customer' : 'Agent · Lin W.'}
                </span>
                <div style={{
                  maxWidth: '88%', padding: '7px 11px', borderRadius: 8, fontSize: 12, lineHeight: 1.45,
                  background: m.from === 'customer' ? '#f2f2f2' : '#e8f0fe',
                  color: '#111',
                }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* scoring panel */}
          <div style={{ width: 236, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#555', letterSpacing: '.14em', textTransform: 'uppercase' }}>
              Scoring Rubric
            </div>
            {rubric.map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{ fontSize: 11, color: '#333', fontWeight: 500 }}>{item.label}</span>
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array.from({ length: item.max }, (_, n) => n + 1).map(n => (
                    <div key={n} style={{
                      width: 26, height: 26, borderRadius: 5,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 600,
                      background: n <= item.score ? '#1a73e8' : '#f0f1f4',
                      color: n <= item.score ? '#fff' : '#bbb',
                      cursor: 'pointer',
                    }}>{n}</div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 4 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#555', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 7 }}>
                Comments
              </div>
              <div style={{
                width: '100%', background: '#fafafa', border: '1px solid #e4e4e4', borderRadius: 6,
                padding: '8px 10px', fontSize: 11, color: '#888', lineHeight: 1.45, minHeight: 64,
              }}>
                Agent handled the lock efficiently but could strengthen the opening empathy before jumping to the solution…
              </div>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#555' }}>
                <span>Score so far</span>
                <span style={{ fontWeight: 600, color: '#1a73e8' }}>16 / 20</span>
              </div>
              <div style={{ height: 5, background: '#eef0f4', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: '80%', height: '100%', background: '#1a73e8', borderRadius: 3 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
