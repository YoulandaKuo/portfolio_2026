import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CalibrationsMock from '../components/mocks/CalibrationsMock'
import { TwoColText, StatGrid } from '../components/blocks'
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
          Meta–Quality Management System
        </h1>
        <p className="text-[24px] leading-[1.4] text-ink m-0" style={{ textWrap: 'pretty' }}>
          A b2b platform that turns manual process into a automated system that scaled.
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

      {/* cover */}
      <div className="max-w-[1180px] mx-auto px-11 mt-[60px]">
        <div className="rounded-lg overflow-hidden relative bg-[#4481ef]" style={{ aspectRatio: '16/9', boxShadow: '0 40px 80px -50px rgba(20,30,40,.45)' }}>
          <CalibrationsMock />
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto px-11 mt-[18px] flex justify-between items-baseline font-mono text-[11px] tracking-[.16em] uppercase text-ink-soft">
        <span>Fig. 01 — Calibrations dashboard, quality management overview.</span>
        <span>Meta · Web</span>
      </div>

      {/* summary */}
      <TwoColText
        headingLevel="h3"
        heading="Summary"
        right={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            Meta's Quality Management System (QMS) enables support teams to review agent conversation with customer, provide feedback, and score performance. At the time, calibration was handled manually by each program, leading to slow, inconsistent, and bias-prone processes that didn't scale. I led end-to-end product design to introduce an automated calibration workflow to deliver a unified, scalable solution within Meta's support ecosystem.
          </p>
        }
      />

      {/* impact stats */}
      <StatGrid
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

      <Footer />
    </>
  )
}
