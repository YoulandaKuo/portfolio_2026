import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { DetailsStrip, TwoColText, StatGrid } from '../components/blocks'

export default function Grab() {
  return (
    <>
      <Nav homePrefix="/" />

      {/* breadcrumb */}
      <div className="max-w-[1040px] mx-auto px-11 pt-12 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft flex items-center gap-[14px]">
        <Link to="/" className="transition-colors hover:text-rust-deep">Portfolio</Link>
        <span className="opacity-50">/</span>
        <Link to="/#case-studies" className="transition-colors hover:text-rust-deep">Case Studies</Link>
        <span className="opacity-50">/</span>
        <span>Grab</span>
      </div>

      {/* title */}
      <div className="max-w-[1040px] mx-auto px-11 pt-[30px]">
        <div className="pb-[50px] border-b border-rule flex flex-col gap-8">
          <h1 className="m-0 font-medium text-porter leading-[.98] tracking-[-0.01em]" style={{ fontSize: 'clamp(48px,7vw,64px)', textWrap: 'balance' }}>
            Grab — PIN and account recovery
          </h1>
        </div>
      </div>

      {/* Detail strip */}
      <DetailsStrip items={[['Role','Product Designer'],['Year','2021'],['Type','Consumer mobile app']]} />

      {/* Summary */}
      <TwoColText
        heading="Summary"
        right={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            As the lead designer, I led the end-to-end redesign of Grab's PIN ecosystem to support the expansion of GrabPay into high-stakes payment flows. By standardizing UI components and introducing an intuitive recovery method, I transformed an outdated system into a scalable, secure solution for millions of users across Southeast Asia.
          </p>
        }
      />

      {/* Impact */}
      <StatGrid
        sectionLabel="Impact"
        heading="Outcomes that strengthened security across Grab's ecosystem."
        cols={3}
        stats={[
          {
            number: '<span style="font-size:24px;line-height:1.15">11% increase</span>',
            label: 'in PIN reset success rates through a new recovery flow',
          },
          {
            number: '<span style="font-size:24px;line-height:1.15">22% reduction</span>',
            label: 'in "forgot PIN" support tickets, lowering operational costs',
          },
          {
            number: '<span style="font-size:24px;line-height:1.15">Millions of users</span>',
            label: 'supported by a scaled security system across Grab ecosystem',
          },
        ]}
      />

      <div className="pb-[120px]" />

      <Footer />
    </>
  )
}
