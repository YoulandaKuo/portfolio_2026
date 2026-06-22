import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import SectionLabel from './SectionLabel'

/**
 * NarrativeText — single-column long-form text section.
 *
 * Props:
 *   sectionNum   — optional numbered circle label
 *   sectionLabel — optional mono label text
 *   heading      — optional heading text or node
 *   headingLevel — 'h2' (default, 40px) | 'h3' (32px)
 *   body         — string, React node, or array of strings/nodes
 *   maxWidth     — CSS max-width for the column (default '780px')
 */
export default function NarrativeText({
  sectionNum,
  sectionLabel,
  heading,
  headingLevel = 'h2',
  body,
  maxWidth = '780px',
}) {
  const H = headingLevel
  const headingSize =
    headingLevel === 'h3'
      ? 'text-[24px] md:text-[32px]'
      : 'text-[28px] md:text-[40px]'

  const paragraphs = body == null ? [] : Array.isArray(body) ? body : [body]

  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-11 pt-[80px] md:pt-[120px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div style={{ maxWidth }}>
        {sectionLabel && <SectionLabel num={sectionNum} label={sectionLabel} />}
        {heading && (
          <H
            className={`font-medium ${headingSize} leading-[1.2] m-0 mb-8 text-porter tracking-[-0.005em]`}
            style={{ textWrap: 'balance' }}
          >
            {heading}
          </H>
        )}
        {paragraphs.length > 0 && (
          <div className="flex flex-col gap-6">
            {paragraphs.map((p, i) =>
              typeof p === 'string' ? (
                <p
                  key={i}
                  className="m-0 text-[19px] md:text-[22px] leading-[1.55] text-ink"
                  style={{ textWrap: 'pretty' }}
                >
                  {p}
                </p>
              ) : (
                <div key={i}>{p}</div>
              )
            )}
          </div>
        )}
      </div>
    </motion.section>
  )
}
