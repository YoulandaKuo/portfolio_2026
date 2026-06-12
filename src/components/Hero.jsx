import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-[110px] pb-[60px] px-6">
      <motion.img
        src="/assets/hero-emblem.png"
        alt="Portfolio emblem"
        className="block h-auto"
        style={{ width: 'min(520px, 72vw)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.p
        className="max-w-[760px] mt-[54px] text-center text-[25px] leading-[1.4] text-ink"
        style={{ textWrap: 'pretty' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Youlanda is a designer with experience designing fintech, B2B SaaS, and consumer products at scale, with background at{' '}
        <em className="text-rust-deep italic">Meta, Grab,</em> and product management.
      </motion.p>
    </section>
  )
}
