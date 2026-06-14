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
  NarrativeText,
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
        sectionLabel="The challenge"
        heading="Redesigning for Fairness at Scale"
        right={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
              The existing calibration process at Meta was a manual, fragmented operation that struggled to keep pace with the organisation’s scale. Because each program (e.g., WhatsApp, Instagram, Facebook) managed reviews independently, the lack of a unified workflow led to three critical bottlenecks:
            </p>
          </>
        }
      />

      {/* Section 01-2 The Problem */}
      <ThreeColCards
        cards={[
          {
            heading: 'Operational Inefficiency',
            body: 'Manual data entry and cross-referencing were time-consuming',
          },
          {
            heading: 'Subjective Bias',
            body: 'Reviewers often knew when they were being "calibrated", leading to human bias'
          },
          {
            heading: 'Hard to scale',
            body: "The manual process made it hard to scale standards across Meta’s support ecosystem.",
          },
        ]}
      />

      {/* Section 02 — The Solution */}
      <TwoColText
        sectionNum="02"
        sectionLabel="The Solution"
        heading="A Unified Standard for Meta’s Global Support"
        right={
          <>
            <p className="text-[22px] leading-[1.5] text-ink m-0 mb-5" style={{ textWrap: 'pretty' }}>
              To solve the fragmentation across different programs, I designed a centralized calibration feature directly within Meta’s Quality Management System (QMS). The goal was to replace isolated spreadsheets and manual workflows with a single, automated source of truth that could be adopted by every program.
            </p>
          </>
        }
      />

      {/* Solution sub-section */}
      <NarrativeText
        headingLevel="h3"
        heading="Global Oversight for Program Managers"
        body="The Calibrations Dashboard provides a unified command centre for program managers to monitor their global operations. By aggregating complex data into a single, intuitive view, managers can easily track the real-time progress of each calibration cycle."
      />

      {/* Fig. 02 — Expert scoring interface */}
      <FigureBlock
        media={<ScoringMock />}
        bg="#2c4a52"
        caption="Fig. 02 — Expert scoring interface, guided rubric with independent review."
        project="Meta · Web"
      />

      {/* Section 03 — Reflection */}
      <TwoColText
        headingLevel="h3"
        sectionNum="03"
        heading="Key takeaway"
        bleedBg="#f3edd9"
        right={
          <>
            <p className="text-[22px] leading-[1.5] m-0 mb-5">
              The Meta QMS calibration project demonstrated how to scale fairness and efficiency across a global organisation. By replacing fragmented, manual spreadsheets with a unified workflow, we scaled to 5 major programs and reduced calibration time by 41%.
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
