import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { TwoColText, ThreeColCards, StatGrid, PullQuote, NextCaseStudy } from '../components/blocks'
import { fadeUp } from '../lib/motion'

// ─── Inline mockup components ────────────────────────────────────────────────
// These are Helix-specific UI illustrations, not reusable blocks.

function HelixDashboard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[54px]">
      <div style={{ width: '100%', maxWidth: 880, aspectRatio: '16/10', padding: '20px 24px', fontSize: 13, background: '#fff', borderRadius: 10, boxShadow: '0 24px 60px -22px rgba(0,0,0,.4)', overflow: 'hidden', fontFamily: '-apple-system,system-ui,sans-serif', color: '#222', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 14, borderBottom: '1px solid #eee' }}>
          <div style={{ fontWeight: 600, color: '#2c4a52', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 18, height: 18, borderRadius: 5, background: 'linear-gradient(135deg,#2f6fd6,#5b8fee)', display: 'inline-block' }} />
            Helix · Quality
          </div>
          <div style={{ display: 'flex', gap: 10, fontSize: 12, color: '#5a6b71' }}>
            <span>Reviews</span><span>Reports</span><span>Settings</span>
            <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#2f6fd6', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600 }}>AV</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', flex: 1, minHeight: 0 }}>
          <div style={{ padding: '14px 6px 0 0', borderRight: '1px solid #eee', fontSize: 12, color: '#5a6b71' }}>
            {['This week', 'Assigned to me', 'Drafts', 'Completed', 'Templates', 'Teams'].map((item, i) => (
              <div key={item} style={{ padding: '8px 10px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8, ...(i === 0 ? { background: '#eef3ff', color: '#2f6fd6', fontWeight: 500 } : {}) }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: .4 }} />{item}
              </div>
            ))}
          </div>
          <div style={{ padding: '14px 0 0 16px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            <h6 style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, color: '#2c4a52' }}>Quality Reviews · This Week</h6>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
              {[['312','Scheduled',false,false],['248','Completed',true,false],['14','Flagged',false,true],['94%','SLA met',false,false]].map(([n,l,ok,warn])=>(
                <div key={l} style={{ background: '#f7f6f1', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 18, fontWeight: 600, color: ok ? '#1aa861' : warn ? '#c95c2a' : '#2c4a52' }}>{n}</div>
                  <div style={{ fontSize: 10, color: '#7a808a', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', border: '1px solid #eee', borderRadius: 8 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 80px', padding: '8px 12px', fontSize: 10, background: '#fafaf6', color: '#7a808a', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid #f1f1f1' }}>
                <span>Site / Team</span><span>Assignee</span><span>Score</span><span>Progress</span><span>Status</span>
              </div>
              {[
                ['EMEA · Concentrix','M. Reyes','92','100%','Done',true,false],
                ['SEA · Lumina Ops','K. Tan','—','64%','In review',false,false],
                ['NA · Field Team','J. Okafor','—','18%','Queued',false,false],
                ['LATAM · Aurora','D. Souza','88','100%','Done',true,false],
                ['JP · Onsite','R. Watanabe','61','82%','Flagged',false,true],
              ].map(([site,who,score,pct,status,ok,warn])=>(
                <div key={site} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 80px', padding: '8px 12px', fontSize: 11, alignItems: 'center', borderBottom: '1px solid #f1f1f1' }}>
                  <span>{site}</span><span>{who}</span><span>{score}</span>
                  <div style={{ height: 6, borderRadius: 3, background: '#eef0f4', overflow: 'hidden' }}><i style={{ display: 'block', height: '100%', background: '#2f6fd6', width: pct }} /></div>
                  <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 999, display: 'inline-block', background: ok ? '#e6f6ee' : warn ? '#fdebd9' : '#eef3ff', color: ok ? '#1aa861' : warn ? '#a44820' : '#2f6fd6' }}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewPanel() {
  return (
    <div style={{ padding: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ width: '100%', maxWidth: 560, background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 24px 60px -22px rgba(0,0,0,.35)', fontFamily: '-apple-system,system-ui,sans-serif', color: '#222' }}>
        <div style={{ padding: '14px 18px', background: '#f6f4ef', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: '#5a6b71' }}>
          <span style={{ fontWeight: 600, color: '#2c4a52', fontSize: 13 }}>Review · EMEA-2418 · Concentrix</span>
          <span>Auto-saved · 2m ago</span>
        </div>
        {[['Q1 · Greeting','Used full script, named the caller','10/10',false],['Q2 · Verification','Two of three identifiers confirmed','7/10',false],['Q3 · Resolution','Resolved on first call, no escalation','10/10',false],['Q4 · Tone','Slight impatience after the hold','6/10',true],['Q5 · Compliance','Disclaimer read in full','10/10',false]].map(([q,a,s,warn])=>(
          <div key={q} style={{ padding: '10px 18px', display: 'grid', gridTemplateColumns: '130px 1fr 70px', alignItems: 'center', gap: 12, fontSize: 12, borderBottom: '1px solid #f4f4ee' }}>
            <span style={{ color: '#7a808a', textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 10 }}>{q}</span>
            <span style={{ color: '#2c4a52' }}>{a}</span>
            <span style={{ fontWeight: 600, color: warn ? '#c95c2a' : '#1aa861', textAlign: 'right' }}>{s}</span>
          </div>
        ))}
        <div style={{ padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafaf4', fontSize: 12 }}>
          <span>5 of 12 questions answered · 8 min remaining</span>
          <span style={{ background: '#2f6fd6', color: '#fff', borderRadius: 6, padding: '6px 14px', fontSize: 11, fontWeight: 600 }}>Continue →</span>
        </div>
      </div>
    </div>
  )
}

function InspectorPhone() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 34, height: '100%' }}>
      <div style={{ width: 200, aspectRatio: '9/19', borderRadius: 26, background: '#fff', boxShadow: '0 22px 50px -20px rgba(0,0,0,.5)', padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 11, fontFamily: '-apple-system,system-ui,sans-serif', color: '#2c4a52' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 600 }}><span>9:41</span><span>● ●</span></div>
        <h5 style={{ margin: '6px 0 2px', fontSize: 15, fontWeight: 600 }}>EMEA-2418</h5>
        <div style={{ fontSize: 10, color: '#7a808a' }}>Concentrix · Floor 3 · Booth 14</div>
        {[['Agent','M. García'],['Call length','07:42']].map(([l,v])=>(
          <div key={l} style={{ background: '#f6f4ef', borderRadius: 10, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 10, color: '#7a808a', textTransform: 'uppercase', letterSpacing: '.1em' }}>{l}</span>
            <span style={{ fontWeight: 600, fontSize: 12 }}>{v}</span>
          </div>
        ))}
        <div style={{ background: '#f6f4ef', borderRadius: 10, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: '#7a808a', textTransform: 'uppercase', letterSpacing: '.1em' }}>Status</span>
          <span style={{ background: '#e6f6ee', color: '#1aa861', borderRadius: 999, padding: '3px 8px', fontSize: 9, fontWeight: 600 }}>Live</span>
        </div>
        <div style={{ height: 50, border: '1px dashed #d6d8df', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7a808a', fontSize: 10 }}>Tap to attach voice note</div>
        <div style={{ background: '#2f6fd6', color: '#fff', borderRadius: 10, padding: 10, textAlign: 'center', fontSize: 12, fontWeight: 600, marginTop: 'auto' }}>Start review</div>
      </div>
    </div>
  )
}

function ScoreChart() {
  const bars = [
    { h: '30%', c: '#7be0a6' }, { h: '48%', c: '#7be0a6' }, { h: '74%', c: '#7be0a6' },
    { h: '92%', c: '#7be0a6' }, { h: '80%', c: '#7cb3ff' }, { h: '46%', c: '#f5b97a' },
    { h: '24%', c: '#f5b97a' }, { h: '14%', c: '#ff8a7a' },
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, height: '100%' }}>
      <div style={{ width: '100%', maxWidth: 460, background: '#0d1620', color: '#cfe', fontFamily: '"JetBrains Mono",monospace', fontSize: 11, borderRadius: 8, padding: '18px 20px', boxShadow: '0 22px 40px -20px rgba(0,0,0,.6)' }}>
        <div style={{ color: '#7cb3ff', marginBottom: 8, letterSpacing: '.1em', fontSize: 10, textTransform: 'uppercase' }}>Score distribution · last 30d</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 90 }}>
          {bars.map((b, i) => <div key={i} style={{ flex: 1, background: b.c, height: b.h, borderRadius: '3px 3px 0 0' }} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5b6a7a', marginTop: 8, fontSize: 9 }}>
          {['50','60','70','80','90','100'].map(n => <span key={n}>{n}</span>)}
        </div>
        <div style={{ marginTop: 14, color: '#7be0a6' }}>+12.4% vs. last period</div>
      </div>
    </div>
  )
}

function QueuePanel() {
  const items = [
    { color: '#c95c2a', title: 'JP · Onsite review', sub: 'Flagged · 2 follow-ups', time: '10:30' },
    { color: '#2f6fd6', title: 'EMEA · Concentrix', sub: 'In progress', time: '11:00' },
    { color: '#1aa861', title: 'SEA · Lumina Ops', sub: 'Ready to send', time: '13:15' },
    { color: '#cfd5e0', title: 'NA · Field Team', sub: 'Queued', time: '15:40' },
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[34px]">
      <div style={{ width: '100%', maxWidth: 420, padding: '18px 20px', fontSize: 12, background: '#fff', borderRadius: 10, boxShadow: '0 18px 40px -20px rgba(0,0,0,.35)', fontFamily: '-apple-system,system-ui,sans-serif' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: 10, marginBottom: 10 }}>
          <strong style={{ color: '#2c4a52' }}>Queue · today</strong>
          <span style={{ color: '#7a808a' }}>14 items</span>
        </div>
        {items.map((item, i) => (
          <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < items.length - 1 ? '1px solid #f3f3ee' : 'none' }}>
            <span style={{ width: 6, height: 30, borderRadius: 3, background: item.color, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{item.title}</div>
              <div style={{ color: '#7a808a', fontSize: 10 }}>{item.sub}</div>
            </div>
            <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, color: '#7a808a' }}>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FlowFrame({ bg, ratio, children, caption, label }) {
  return (
    <div>
      <div style={{ borderRadius: 8, overflow: 'hidden', position: 'relative', aspectRatio: ratio, boxShadow: '0 22px 50px -28px rgba(20,30,40,.4)', background: bg }}>
        {children}
      </div>
      <div style={{ marginTop: 14, fontFamily: '"JetBrains Mono",monospace', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#5a6b71', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#2c4a52' }}>{label}</span>
        <span>{caption}</span>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Helix() {
  return (
    <>
      <Nav homePrefix="/" />

      {/* breadcrumb */}
      <div className="max-w-[1040px] mx-auto px-11 pt-12 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft flex items-center gap-[14px]">
        <Link to="/" className="transition-colors hover:text-rust-deep">Portfolio</Link>
        <span className="opacity-50">/</span>
        <Link to="/#case-studies" className="transition-colors hover:text-rust-deep">Case Studies</Link>
        <span className="opacity-50">/</span>
        <span>Helix</span>
      </div>

      {/* title */}
      <motion.header
        className="max-w-[1040px] mx-auto px-11 pt-[30px]"
        variants={fadeUp} initial="hidden" animate="visible"
      >
        <div className="pb-[50px] border-b border-rule flex flex-col gap-8">
          <h1 className="m-0 font-medium text-porter leading-[.98] tracking-[-0.01em]" style={{ fontSize: 'clamp(48px,7vw,64px)', textWrap: 'balance' }}>
            Helix — a quality system for teams that <em className="italic text-rust-deep font-medium">can't afford to miss</em>.
          </h1>
          <p className="text-[24px] leading-[1.4] text-ink m-0" style={{ textWrap: 'pretty' }}>
            A B2B platform that turns thousands of weekly site visits into a calm queue of reviews, scores, and follow-ups — used by ops teams across four continents.
          </p>
        </div>
      </motion.header>

      {/* meta strip */}
      <div className="max-w-[1040px] mx-auto px-11">
        <div className="py-9 border-b border-rule grid gap-[30px] font-mono text-[11px] tracking-[0.14em] uppercase" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {[['Role','Lead Product Designer'],['Year','2023 — 2024'],['Type','Web · iOS · Android']].map(([k,v])=>(
            <div key={k}><span className="block text-ink-soft text-[10px] tracking-[.18em] mb-[6px]">{k}</span><span className="text-porter text-[13px] tracking-[.06em]">{v}</span></div>
          ))}
        </div>
      </div>

      {/* cover */}
      <div className="max-w-[1040px] mx-auto px-11 mt-[60px]">
        <div className="rounded-lg overflow-hidden relative bg-[#2f6fd6]" style={{ aspectRatio: '16/9', boxShadow: '0 40px 80px -50px rgba(20,30,40,.45)' }}>
          <HelixDashboard />
        </div>
      </div>
      <div className="max-w-[1040px] mx-auto px-11 mt-[18px] flex justify-between items-baseline font-mono text-[11px] tracking-[.16em] uppercase text-ink-soft">
        <span>Fig. 01 — Weekly review dashboard, default view for ops leads.</span>
        <span>Helix · Web</span>
      </div>

      {/* overview — TwoColText: heading left, details right */}
      <TwoColText
        sectionNum="01"
        sectionLabel="Overview"
        heading={
          <>
            A patchwork of <em className="italic text-rust-deep">clipboards, spreadsheets,</em> and Slack threads — for work the company couldn't afford to get wrong.
          </>
        }
        colRatio="balanced"
        left={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0 mb-[14px]">Helix operates contact-center and field-services sites in twenty countries. Their quality team was running everything by hand: a printed checklist on a clipboard, a shared spreadsheet that took an hour to merge each Friday, and a Slack channel for the parts nobody could agree on.</p>
            <p className="text-[22px] leading-[1.5] text-ink m-0">The pitch was straightforward: build the platform their team had been improvising for years. The harder problem, once we started, was that "the platform" looked completely different from each chair around the table.</p>
          </>
        }
        right={
          <dl className="m-0 grid gap-y-[8px] gap-x-[16px] font-mono text-[12px] text-ink-soft leading-[1.9] tracking-[.04em]" style={{ gridTemplateColumns: '1fr 1.6fr' }}>
            {[['Engagement','14 months · in-house'],['Stage','0 → 1 · then 1 → scale'],['Users','~1,400 reviewers'],['Surfaces','Web app · Inspector mobile · API'],['Stack','React · Rails · Postgres'],['Status','Live in 4 regions']].map(([k,v])=>(
              <>
                <dt key={`k-${k}`} className="text-ink-soft text-[10px] tracking-[.18em] uppercase self-end pb-[6px] border-b border-rule">{k}</dt>
                <dd key={`v-${k}`} className="m-0 text-porter text-[13px] tracking-[.05em] pb-[6px] border-b border-rule">{v}</dd>
              </>
            ))}
          </dl>
        }
      />

      {/* pull quote */}
      <PullQuote
        quote="If your QA team is the slowest, loudest part of your operation, you've already lost. We needed the inspection to feel like part of the work, not an audit of it."
        attribution="Maya Reyes · Director of Quality, Helix"
      />

      {/* process — ThreeColCards */}
      <ThreeColCards
        sectionNum="02"
        sectionLabel="Process"
        heading="Three months of listening before we drew a single screen."
        cards={[
          {
            label: '01 · Field study',
            heading: 'Twelve sites, four time zones.',
            body: 'We rode along on inspections in Manila, Lisbon, Mexico City, and Tokyo. The clipboard turned out to be a feature, not a bug — reviewers loved the speed and the lack of judgement from a manager-facing tool.',
          },
          {
            label: '02 · Rubric audit',
            heading: 'We mapped 400 scoring questions into 38.',
            body: 'Most rubrics had drifted over a decade of well-meaning additions. We worked with quality leads to consolidate and version them — a small change that paid back across every screen.',
          },
          {
            label: '03 · Two-track build',
            heading: 'A reviewer app, then a leader\'s dashboard.',
            body: 'We shipped the inspector tool first, on mobile, and only added the management layer once we knew what data was real. The dashboard was much smaller as a result.',
          },
        ]}
      />

      {/* key flows */}
      <section className="max-w-[1040px] mx-auto px-11 pt-[120px]">
        <div className="font-mono text-[11px] tracking-[.2em] text-rust-deep uppercase mb-[18px] flex items-center gap-[10px]">
          <span style={{ width: 22, height: 22, border: '1px solid #a44820', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>03</span>
          Key flows
        </div>
        <h2 className="font-medium text-[46px] leading-[1.04] m-0 mb-9 text-porter max-w-[780px]">Two surfaces, one rhythm — score in the field, review in the office.</h2>
        <div className="grid gap-7" style={{ gridTemplateColumns: 'repeat(12,1fr)' }}>
          <div style={{ gridColumn: 'span 8' }}>
            <FlowFrame bg="#ece1cb" ratio="16/10" label="Reviewer · Web" caption="Fig. 02 — Auto-saved scoring screen">
              <ReviewPanel />
            </FlowFrame>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <FlowFrame bg="#46506a" ratio="9/14" label="Inspector · iOS" caption="Fig. 03">
              <InspectorPhone />
            </FlowFrame>
          </div>
          <div style={{ gridColumn: 'span 6' }}>
            <FlowFrame bg="#1c2730" ratio="5/3" label="Leader · Web" caption="Fig. 04 — Score distribution">
              <ScoreChart />
            </FlowFrame>
          </div>
          <div style={{ gridColumn: 'span 6' }}>
            <FlowFrame bg="#2f6fd6" ratio="5/3" label="Reviewer · Web" caption="Fig. 05 — Daily queue">
              <QueuePanel />
            </FlowFrame>
          </div>
        </div>
      </section>

      {/* results — StatGrid */}
      <StatGrid
        sectionNum="04"
        sectionLabel="Results"
        heading="After a year, the spreadsheet was retired in every region."
        stats={[
          {
            number: '63<span style="font-size:30px;vertical-align:top;margin-left:2px;color:#c95c2a">%</span>',
            label: 'faster review-to-feedback loop',
            context: 'Median 6.2 days → 2.3 days',
          },
          {
            number: '1,400',
            label: 'active reviewers, monthly',
            context: 'Across 4 continents · 12 languages',
          },
          {
            number: '38',
            label: 'scoring questions, down from 400',
            context: 'Rubric audit · v2.0',
          },
          {
            number: '+18<span style="font-size:30px;vertical-align:top;margin-left:2px;color:#c95c2a">pts</span>',
            label: 'CSAT lift on coached cohorts',
            context: 'A/B vs. control · 90 days',
          },
        ]}
      />

      {/* reflection — TwoColText bleed variant */}
      <TwoColText
        headingLevel="h3"
        heading="What I'd keep, what I'd change."
        bleedBg="#f3edd9"
        right={
          <>
            <p className="text-[22px] leading-[1.5] m-0 mb-[14px]">The instinct to ship the reviewer app first — before the management dashboard ever existed — was the single decision the whole project rests on. We made a hundred small tools that the people doing the work actually wanted, and a much smaller, more honest set of charts for the people watching it.</p>
            <p className="text-[22px] leading-[1.5] m-0">If I started again, I'd push earlier on what we now call "calm scoring" — the idea that a rubric should feel like a checklist, not a test. We added that pattern in v2 and it changed how people felt about the app overnight. It should have been there in v1.</p>
          </>
        }
      />

      {/* Next case study */}
      <NextCaseStudy
        to="/case-studies/meta"
        title={<>Northwind Pay — <em className="italic text-rust-deep font-medium">Account Recovery</em></>}
      />

      <Footer />
    </>
  )
}
