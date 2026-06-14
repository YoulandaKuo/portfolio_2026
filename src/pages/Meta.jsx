import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CalibrationsMock from '../components/mocks/CalibrationsMock'
import ScoringMock from '../components/mocks/ScoringMock'
import {
  TwoColText,
  ThreeColCards,
  StatGrid,
  PullQuote,
  FigureBlock,
} from '../components/blocks'
import { fadeUp } from '../lib/motion'

export default function Meta() {
  return (
    <>
      <Nav homePrefix="/" />

      {/* breadcrumb */}
      <div className="max-w-[1180px] mx-auto px-11 pt-12 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft flex items-center gap-[14px]">
        <Link to="/" className="transition-colors hover:text-rust-deep">Portfolio</Link>
        <span className="opacity-50">/</span>
        <Link to="/#case-studies" className="transition-colors hover:text-rust-deep">Case Studies</Link>
        <span className="opacity-50">/</span>
        <span>Meta</span>
      </div>

      {/* title */}
      <motion.header
        className="max-w-[1180px] mx-auto px-11 pt-[30px] pb-[50px] border-b border-rule flex flex-col gap-8"
        variants={fadeUp} initial="hidden" animate="visible"
      >
        <h1 className="m-0 font-medium text-porter leading-[.98] tracking-[-0.01em]" style={{ fontSize: 'clamp(48px,7vw,96px)', textWrap: 'balance' }}>
          Meta — Quality Management System
        </h1>
        <p className="text-[24px] leading-[1.4] text-ink m-0" style={{ textWrap: 'pretty' }}>
          A B2B platform that turns a manual, spreadsheet-driven process into an automated calibration system — scaled across five support programs at Meta.
        </p>
      </motion.header>

      {/* meta strip */}
      <div className="max-w-[1180px] mx-auto px-11 py-9 border-b border-rule grid gap-[30px] font-mono text-[11px] tracking-[0.14em] uppercase" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        {[['Role','Product Designer'],['Year','2022 — 2023'],['Type','B2B · Web App']].map(([k,v])=>(
          <div key={k}>
            <span className="block text-ink-soft text-[10px] tracking-[.18em] mb-[6px]">{k}</span>
            <span className="text-porter text-[13px] tracking-[.06em]">{v}</span>
          </div>
        ))}
      </div>

      {/* Fig. 01 — Cover */}
      <FigureBlock
        variant="cover"
        media={<CalibrationsMock />}
        bg="#4481ef"
        caption="Fig. 01 — Calibrations dashboard, calibration management overview."
        project="Meta · Web"
      />

      {/* Summary */}
      <TwoColText
        headingLevel="h3"
        heading="Summary"
        right={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            Meta's Quality Management System (QMS) enables support teams to review agent conversations with customers, provide feedback, and score performance. At the time, calibration was handled manually by each program — leading to slow, inconsistent, and bias-prone processes that couldn't scale. I led end-to-end product design to introduce an automated calibration workflow and deliver a unified solution within Meta's support ecosystem.
          </p>
        }
      />

      {/* Impact */}
      <StatGrid
        sectionLabel="Impact"
        heading="Outcomes that scaled across Meta's support ecosystem."
        cols={3}
        stats={[
          {
            number: '<span style="font-size:24px;line-height:1.15">41% reduction</span>',
            label: 'in calibration time for senior agents',
          },
          {
            number: '<span style="font-size:24px;line-height:1.15">5 support programs</span>',
            label: 'scaled onto a unified calibration workflow',
          },
          {
            number: '<span style="font-size:24px;line-height:1.15">8,000+ agents</span>',
            label: 'enabled through the new QMS experience',
          },
        ]}
      />

      {/* Section 01 — Background */}
      <TwoColText
        sectionNum="01"
        sectionLabel="Background"
        heading="Quality at the scale of Meta."
        right={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0 mb-5" style={{ textWrap: 'pretty' }}>
              Meta's support organization spans thousands of contractors and internal agents across EMEA, North America, and SEA. The QMS is the backbone program managers rely on to monitor performance, flag issues, and maintain quality alignment across queues. When I joined, the product's core review flow was stable — but one critical workflow was still entirely manual: calibration.
            </p>
            <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
              Calibration is how senior agents collectively decide what a perfect score looks like. Done well, it's the engine that keeps quality standards consistent across programs, regions, and vendors. At Meta's scale, running it through spreadsheets and email chains was unsustainable.
            </p>
          </>
        }
      />

      {/* Section 02 — The Problem */}
      <ThreeColCards
        sectionNum="02"
        sectionLabel="The Problem"
        heading="Manual calibration created three systemic failures."
        cards={[
          {
            label: '01 · No system of record',
            heading: 'The spreadsheet was the process.',
            body: 'Each program maintained its own tracking document. There was no source of truth for calibration status, no shared history, and no way for QMS leadership to see the state of calibration across queues.',
          },
          {
            label: '02 · Slow cycle times',
            heading: 'Rounds took 3–5 days to close.',
            body: "Senior agents had to be manually assigned, reminded by email, and chased for responses. The process couldn't keep up with weekly queue volumes, leaving calibration perpetually behind.",
          },
          {
            label: '03 · Scoring divergence',
            heading: 'No anchor for consistency.',
            body: 'Without a shared interface or rubric, different programs interpreted identical conversations differently. Calibration was creating the inconsistency it was meant to fix.',
          },
        ]}
      />

      {/* Section 03 — Discovery */}
      <ThreeColCards
        sectionNum="03"
        sectionLabel="Discovery"
        heading="Three methods to understand the workflow before proposing a solution."
        cards={[
          {
            label: '01 · Stakeholder interviews',
            heading: 'Twelve sessions across three regions.',
            body: 'I ran structured interviews with program managers, senior agents, and QMS leads across EMEA, NA, and SEA to map the current workflow and surface the highest-friction points in the calibration process.',
          },
          {
            label: '02 · Calibration shadowing',
            heading: 'Four live sessions, end-to-end.',
            body: 'I observed calibration sessions from assignment through score reconciliation. The same conversation could take anywhere from 20 minutes to 3 hours to resolve — not because of the content, but because of coordination failures.',
          },
          {
            label: '03 · Jobs-to-be-done mapping',
            heading: 'Not a scoring problem.',
            body: "Working with the PM, we translated research into JTBD statements. The key insight: calibration wasn't broken because of the rubric — it was broken because of coordination and visibility. That reframing shaped everything that followed.",
          },
        ]}
      />

      {/* Pull quote */}
      <PullQuote
        quote="The spreadsheet wasn't just slow — it was invisible. By the time we'd chased everyone down, the feedback was already stale."
        attribution="Kenji T. · QMS Program Lead, EMEA"
      />

      {/* Section 04 — The Solution */}
      <TwoColText
        sectionNum="04"
        sectionLabel="The Solution"
        heading="An automated calibration workflow, inside QMS."
        right={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0 mb-5" style={{ textWrap: 'pretty' }}>
              The new calibration flow replaces the spreadsheet with a structured, trackable system inside QMS. Program managers schedule calibrations, select the target conversation, and the system automatically assigns expert reviewers from the queue's senior agent pool.
            </p>
            <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
              Each expert scores independently through a guided rubric — without seeing each other's responses until all scores are submitted. The system then flags significant discrepancies and surfaces them for live discussion. I designed the full workflow end-to-end: the manager dashboard, the expert scoring interface, and the reconciliation view.
            </p>
          </>
        }
      />

      {/* Fig. 02 — Expert scoring interface */}
      <FigureBlock
        media={<ScoringMock />}
        bg="#2c4a52"
        caption="Fig. 02 — Expert scoring interface, guided rubric with independent review."
        project="Meta · Web"
      />

      {/* Section 05 — Reflection */}
      <TwoColText
        headingLevel="h3"
        sectionNum="05"
        sectionLabel="Reflection"
        heading="What I'd keep, what I'd change."
        bleedBg="#f3edd9"
        right={
          <>
            <p className="text-[22px] leading-[1.5] m-0 mb-5">
              The decision to anchor the flow around expert independence — ensuring reviewers couldn't see each other's scores until all were submitted — turned out to be the design's most defensible constraint. It took political will to hold that line through several stakeholder reviews, but it was the right call.
            </p>
            <p className="text-[22px] leading-[1.5] m-0">
              If I started again, I'd invest more in the reconciliation experience. We shipped a workable version, but resolving a disputed score is a deeply social process — the tool surfaces the conflict well, but facilitating the resolution is a harder, more nuanced problem that deserved more space in the design.
            </p>
          </>
        }
      />

      {/* Next case study */}
      <div className="max-w-[1180px] mx-auto px-11 pt-[120px] pb-[80px] flex items-end justify-between gap-[40px] border-b border-rule">
        <div>
          <div className="font-mono text-[11px] tracking-[.2em] uppercase text-ink-soft mb-[14px]">Next case study</div>
          <Link
            to="/case-studies/helix"
            className="inline-flex items-baseline gap-6 text-porter font-medium tracking-[-0.01em] transition-colors hover:text-rust-deep group"
            style={{ fontSize: 'clamp(32px,4.5vw,62px)', lineHeight: 1 }}
          >
            <span>Helix — a quality system for teams that <em className="italic text-rust-deep font-medium">can't afford to miss</em></span>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rust text-white flex-shrink-0 translate-y-2 transition-transform group-hover:translate-x-[6px]">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 15L15 5M15 5H8M15 5v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </Link>
        </div>
        <div className="font-mono text-[11px] tracking-[.16em] uppercase text-ink-soft text-right leading-[2]">
          B2B · Web<br />2023 · Lead designer
        </div>
      </div>

      <Footer />
    </>
  )
}
