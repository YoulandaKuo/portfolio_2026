import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import SectionLabel from './SectionLabel'

/**
 * ThreeColMedia — 3-column image + caption layout, no card styling.
 * Image sits full-width; text below is flush with image edges.
 *
 * Props:
 *   sectionNum   — optional numbered circle label
 *   sectionLabel — optional mono label text
 *   heading      — optional section heading
 *   headingLevel — 'h2' (default, 40px) | 'h3' (32px)
 *   items        — array of { media?, body? }
 */
function MediaItem({ media, body }) {
  return (
    <div className="flex flex-col gap-4">
      {media && (
        <div className="w-full overflow-hidden rounded-lg">{media}</div>
      )}
      {body && (
        <p className="m-0 text-ink text-[17px] leading-[1.55]" style={{ textWrap: 'pretty' }}>
          {body}
        </p>
      )}
    </div>
  )
}

export default function ThreeColMedia({
  sectionNum,
  sectionLabel,
  heading,
  headingLevel = 'h2',
  items = [],
}) {
  const H = headingLevel
  const headingSize =
    headingLevel === 'h3'
      ? 'text-[24px] md:text-[32px]'
      : 'text-[28px] md:text-[40px]'

  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-11 pt-[80px] md:pt-[120px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {sectionLabel && <SectionLabel num={sectionNum} label={sectionLabel} />}
      {heading && (
        <H
          className={`font-medium ${headingSize} leading-[1.2] m-0 mb-9 text-porter max-w-[780px] tracking-[-0.005em]`}
          style={{ textWrap: 'balance' }}
        >
          {heading}
        </H>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {items.map((item, i) => (
          <MediaItem key={i} {...item} />
        ))}
      </div>
    </motion.section>
  )
}
