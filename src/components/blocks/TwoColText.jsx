import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import SectionLabel from './SectionLabel'

/**
 * TwoColText — heading on left, content on right.
 * Desktop (md+): 2-column grid. Mobile: stacked.
 *
 * Props:
 *   sectionNum   — optional numbered circle label (e.g. "01")
 *   sectionLabel — optional mono label text (e.g. "Overview")
 *   heading      — heading text/node rendered in the left column
 *   headingLevel — "h2" (default, 46px) | "h3" (36px)
 *   left         — optional extra content below the heading in the left col
 *   right        — right column content
 *   colRatio     — preset column ratio: "default" (1fr 1.4fr) | "balanced" (1.1fr 1fr)
 *   bleedBg      — when set, section is full-bleed with this background color
 *                  and gets border-t/b treatment (e.g. Reflection section)
 */
export default function TwoColText({
  sectionNum,
  sectionLabel,
  heading,
  headingLevel = 'h2',
  left,
  right,
  colRatio = 'default',
  bleedBg,
}) {
  const H = headingLevel
  const headingSize =
    headingLevel === 'h3'
      ? 'text-[28px] md:text-[36px]'
      : 'text-[30px] md:text-[46px]'

  // Static class strings so Tailwind's scanner picks them up
  const gridCols =
    colRatio === 'balanced'
      ? 'grid-cols-1 md:grid-cols-[1.1fr_1fr]'
      : 'grid-cols-1 md:grid-cols-[1fr_1.4fr]'

  const inner = (
    <>
      {sectionLabel && <SectionLabel num={sectionNum} label={sectionLabel} />}
      <div className={`grid gap-10 items-start md:gap-[64px] ${gridCols}`}>
        <div>
          <H
            className={`font-medium ${headingSize} leading-[1.04] m-0 text-porter tracking-[-0.005em]`}
            style={{ textWrap: 'balance' }}
          >
            {heading}
          </H>
          {left && <div className="mt-8">{left}</div>}
        </div>
        <div>{right}</div>
      </div>
    </>
  )

  if (bleedBg) {
    return (
      <motion.section
        className="border-t border-b border-rule mt-[140px] py-[80px] md:py-[110px]"
        style={{ background: bleedBg }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-11">{inner}</div>
      </motion.section>
    )
  }

  return (
    <motion.section
      className="max-w-[1180px] mx-auto px-6 md:px-11 pt-[80px] md:pt-[120px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {inner}
    </motion.section>
  )
}
