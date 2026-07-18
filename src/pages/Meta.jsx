import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  TwoColText,
  ThreeColCards,
  ThreeColMedia,
  StatGrid,
  PullQuote,
  FigureBlock,
  NarrativeText,
  NextCaseStudy,
  DetailsStrip,
} from '../components/blocks'
import { fadeUp } from '../lib/motion'

export default function Meta() {
  return (
    <>
      <Nav homePrefix="/" />

      {/* breadcrumb */}
      <div className="max-w-[1040px] mx-auto px-11 pt-12 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft flex items-center gap-[14px]">
        <Link to="/" className="transition-colors hover:text-rust-deep">Portfolio</Link>
        <span className="opacity-50">/</span>
        <Link to="/#case-studies" className="transition-colors hover:text-rust-deep">Case Studies</Link>
        <span className="opacity-50">/</span>
        <span>Meta</span>
      </div>

      {/* title */}
      <motion.header
        className="max-w-[1040px] mx-auto px-11 pt-[30px]"
        variants={fadeUp} initial="hidden" animate="visible"
      >
        <div className="pb-[50px] border-b border-rule flex flex-col gap-8">
          <h1 className="m-0 font-medium text-porter leading-[.98] tracking-[-0.01em]" style={{ fontSize: 'clamp(48px,7vw,64px)', textWrap: 'balance' }}>
            Meta — Quality Management System
          </h1>
          <p className="text-[24px] leading-[1.4] text-ink m-0" style={{ textWrap: 'pretty' }}>
            A B2B platform that turns a manual, spreadsheet-driven process into an automated calibration system — scaled across five support programs at Meta.
          </p>
        </div>
      </motion.header>

      {/* meta strip */}
      <DetailsStrip items={[['Role','Product Designer'],['Year','2023'],['Type','B2B · Web App']]} />

      {/* Fig. 01 — Cover */}
      <FigureBlock
        variant="cover"
        media={<img src="/assets/meta-calibration-cover.png" alt="Calibrations dashboard overview" className="w-full h-full object-cover object-top" />}
        caption="The new Quality Management System (QMS)"
      />

      {/* Summary */}
      <TwoColText
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

      {/* Solution sub-section 1*/}
      <NarrativeText
        headingLevel="h3"
        heading="Global Oversight for Program Managers"
        body="The Calibrations Dashboard provides a unified command centre for program managers to monitor their global operations. By aggregating complex data into a single, intuitive view, managers can easily track the real-time progress of each calibration cycle."
      />

      {/* Fig. 02 */}
      <FigureBlock
        media={<img src="/assets/meta-calibration-fig02.png" alt="Expert scoring interface" className="w-full h-full object-cover object-top" />}
        caption="Calibration dashboard for program managers"
      />

      {/* UI Highlights 1*/}
      <ThreeColMedia
        heading="UI highlights"
        headingLevel="h3"
        items={[
          {
            media: (
              <img
                src="/assets/meta-calibration-ui-highlights-1-1.png"
                alt="Calibration UI highlight — start a new calibration"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: "I transitioned the calibration process from external spreadsheets to a built-in function within the QMS. Users can now initiate and manage review cycles directly where they handle their daily support operations.",
          },
          {
            media: (
              <img
                src="/assets/meta-calibration-ui-highlights-1-2.png"
                alt="Calibration UI highlight — quality analyst status"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: "The status bars allow program managers to immediately see the progress of each calibration cycle. This view simplifies the oversight of multiple global queues, ensuring deadlines are met across the entire organisation.",
          },
          {
            media: (
              <img
                src="/assets/meta-calibration-ui-highlights-1-3.png"
                alt="Calibration UI highlight — calibration case ID"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: `I designed a "Smart Reminder" feature that automatically detects and flags if a selected case has already been reviewed. This preventative UI detail ensures data integrity and the consistency of the calibration results.`,
          },
        ]}
      />

      {/* Solution sub-section 2*/}
      <NarrativeText
        headingLevel="h3"
        heading="The Senior Agent Experience: A Unified Audit Environment"
        body="By integrating the full audit workflow into QMS, we eliminated the need for agents to toggle between multiple tools and spreadsheets. This streamlined environment was the primary driver for the 41% reduction in calibration time, allowing senior agents to focus on the nuance of the conversation rather than administrative overhead."
      />

      {/* Fig. 03 */}
      <FigureBlock
        media={<img src="/assets/meta-calibration-cover.png" alt="Calibrations dashboard overview" className="w-full h-full object-cover object-top" />}
        caption="The “Create new audit” screen for senior agents"
      />

      {/* UI Highlights 2*/}
      <ThreeColMedia
        heading="UI highlights"
        headingLevel="h3"
        items={[
          {
            media: (
              <img
                src="/assets/meta-calibration-ui-highlights-2-1.png"
                alt="Calibration UI highlight — start a new calibration"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: `The system automatically assigns cases to auditors, removing the ability to "cherry-pick" easy or familiar interactions. This ensure a truly random and representative sample of agent performance, which is critical for maintaining high quality standards at Meta's scale.`,
          },
          {
            media: (
              <img
                src="/assets/meta-calibration-ui-highlights-2-2.png"
                alt="Calibration UI highlight — quality analyst status"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: "By hosting the audit forms within QMS, we empowered individual programs to manage their own criteria while maintaining a unified technical framework. This ensured that every agent is evaluated through a consistent process that can scale as new programs are onboarded.",
          },
          {
            media: (
              <img
                src="/assets/meta-calibration-ui-highlights-2-3.png"
                alt="Calibration UI highlight — calibration case ID"
                className="w-full h-full object-cover object-top"
              />
            ),
            body: `To eliminate "observer bias," the UI hides the fact that an audit is a calibration until the final submission dialog. By revealing the calibration status only at the end, we ensure senior agents perform an independent, honest evaluation before being notified that their score will be used for program-wide alignment.`,
          },
        ]}
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
      <NextCaseStudy
        to="/case-studies/grab"
        title={<>Grab — PIN and <em className="italic text-rust-deep font-medium">account recovery</em></>}
      />

      <Footer />
    </>
  )
}
