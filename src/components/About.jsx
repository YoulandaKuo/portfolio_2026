import { motion } from 'framer-motion'
import SectionHead from './SectionHead'

export default function About() {
  return (
    <section className="max-w-[1100px] mx-auto px-11 pt-[120px]" id="about">
      <SectionHead title="About" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-start"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[22px] leading-[1.55] text-ink m-0" style={{ textWrap: 'pretty' }}>
          Hi there! I&rsquo;m Youlanda. I&rsquo;m a product designer with 10+ years of experience building user-centred digital products. I recently worked at CargoAi as a Product Manager, leading product strategy and cross-functional collaboration. The role strengthened my ability to think across business, engineering, and design.
          <br /><br />
          Before CargoAi, I was a designer at Meta in London, focused on customer support tools. I also worked at Grab in Singapore, designing one of Southeast Asia&rsquo;s most widely used ride-hailing platforms.
        </p>
        <div className="font-mono text-[12px] text-ink-soft leading-[2] tracking-[0.04em]">
          {[
            ['BASED', 'SINGAPORE'],
            ['PREVIOUSLY', 'META · GRAB'],
            ['SPEAKS', 'ENGLISH · 中文 · UN PEU FRANÇAIS'],
          ].map(([k, v], i, arr) => (
            <div key={k} className={`flex justify-between py-2 ${i < arr.length - 1 ? 'border-b border-rule' : ''}`}>
              <span>{k}</span><span>{v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
