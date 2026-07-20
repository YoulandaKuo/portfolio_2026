import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { DetailsStrip, SplitMedia, TwoColText } from '../components/blocks'
import { fadeUp } from '../lib/motion'

export default function ExpenseTracker() {
  return (
    <>
      <Nav homePrefix="/" />

      {/* breadcrumb */}
      <div className="max-w-[1040px] mx-auto px-11 pt-12 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft flex items-center gap-[14px]">
        <Link to="/" className="transition-colors hover:text-rust-deep">Portfolio</Link>
        <span className="opacity-50">/</span>
        <Link to="/#side-projects" className="transition-colors hover:text-rust-deep">Side Projects</Link>
        <span className="opacity-50">/</span>
        <span>Expense Tracker</span>
      </div>

      {/* title */}
      <motion.header
        className="max-w-[1040px] mx-auto px-11 pt-[30px]"
        variants={fadeUp} initial="hidden" animate="visible"
      >
        <div className="pb-[50px] border-b border-rule flex flex-col gap-8">
          <h1 className="m-0 font-medium text-porter leading-[.98] tracking-[-0.01em]" style={{ fontSize: 'clamp(48px,7vw,64px)', textWrap: 'balance' }}>
            Multi-currency expense tracker
          </h1>
          <p className="text-[24px] leading-[1.4] text-ink m-0" style={{ textWrap: 'pretty' }}>
            An expense tracker that lets you track multi-currency spending and income with ease
          </p>
        </div>
      </motion.header>

      {/* meta strip */}
      <DetailsStrip items={[['Role','Maker'],['Year','2021'],['Type','Progressive web app']]} />

      {/* Why I built this */}
      <SplitMedia
        media={<img src="/assets/expense-tracker-1.png" alt="Expense tracker app" className="w-full h-full object-contain" />}
        aspectRatio="1/1"
        headingLevel="h3"
        heading="Why I built this"
        body={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            I've been trying to find the perfect budgeting app for myself — trying and switching, switching and trying — but never quite found the right fit. Perhaps my use case is too unique: I've lived in three different countries over the last five years, so I need to track spending across multiple currencies. Beyond that, I just wanted something simple and easy to use. So this became my first Claude Code project — a multi-currency expense tracker built for exactly how I actually spend.
          </p>
        }
      />

      {/* How it works */}
      <SplitMedia
        media={<img src="/assets/expense-tracker-2.png" alt="Expense tracker home, summary, and transactions screens" className="w-full h-full object-contain" />}
        aspectRatio="1/1"
        headingLevel="h3"
        heading="How it works"
        body={
          <p className="text-[22px] leading-[1.5] text-ink m-0" style={{ textWrap: 'pretty' }}>
            The home page focuses on a simple flow for adding new expenses, with customisable settings like hiding categories you don't use and adding new currencies. The Summary tab gives you a quick view of how much you've been spending and on what. The Transactions tab holds everything you've entered, so if you need to search for something specific, that's where you go.
          </p>
        }
      />

      {/* Try it out */}
      <TwoColText
        headingLevel="h3"
        heading="Try it out"
        bleedBg="#f3edd9"
        right={
          <p className="text-[22px] leading-[1.5] m-0">
            Want to try it yourself? Head to <a href="https://expense-tracker.youlanda.net/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-rust-deep">expense-tracker.youlanda.net</a> — since it's a PWA, you can save it to your home screen and use it just like a native app.
          </p>
        }
      />

      <Footer />
    </>
  )
}
