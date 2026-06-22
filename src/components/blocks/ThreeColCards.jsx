import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import SectionLabel from './SectionLabel'

/**
 * Card — a single card cell used inside ThreeColCards.
 *
 * Props:
 *   media    — optional React node rendered above text (image, illustration, mockup)
 *   label    — optional mono uppercase label / step number (e.g. "01 · Field study")
 *   heading  — H4 italic heading
 *   body     — body text
 */
function Card({ media, label, heading, body }) {
  return (
    <div
      className="flex flex-col"
      style={{
        background: '#ece1cb',
        borderRadius: 10,
        overflow: 'hidden',
      }}
    >
      {media && (
        <div className="w-full aspect-square overflow-hidden">{media}</div>
      )}
      <div
        className="flex flex-col gap-[14px]"
        style={{ padding: '28px 26px' }}
      >
        {label && (
          <span className="font-mono text-[11px] tracking-[.2em] text-rust-deep uppercase">
            {label}
          </span>
        )}
        {heading && (
          <h4
            className="m-0 font-medium text-porter"
            style={{ fontSize: 24, lineHeight: 1.15, fontStyle: 'italic' }}
          >
            {heading}
          </h4>
        )}
        {body && (
          <p
            className="m-0 text-ink"
            style={{ fontSize: 17, lineHeight: 1.55, textWrap: 'pretty' }}
          >
            {body}
          </p>
        )}
      </div>
    </div>
  )
}

/**
 * ThreeColCards — 3-column card grid with optional section preamble.
 * Desktop (lg+): 3 columns. Tablet (md): 2 columns. Mobile: 1 column.
 *
 * Props:
 *   sectionNum   — optional numbered circle label
 *   sectionLabel — optional mono label text
 *   heading      — section H2 heading above the grid
 *   cards        — array of Card props: { media?, label?, heading?, body? }
 */
export default function ThreeColCards({
  sectionNum,
  sectionLabel,
  heading,
  headingLevel: Tag = 'h2',
  cards = [],
}) {
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
        <Tag
          className={`font-medium leading-[1.2] m-0 mb-9 text-porter max-w-[780px] ${
            Tag === 'h3'
              ? 'text-[24px] md:text-[32px]'
              : 'text-[28px] md:text-[40px]'
          }`}
        >
          {heading}
        </Tag>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </motion.section>
  )
}
