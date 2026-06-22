import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import SectionLabel from './SectionLabel'

/**
 * StatCard — a single impact/metric cell.
 *
 * Props:
 *   number  — large display number, may contain inline HTML for styled units
 *             (e.g. '63<span style="font-size:30px;...">%</span>')
 *   label   — italic descriptor below the number
 *   context — mono uppercase sub-label (source, comparison, timeframe)
 */
function StatCard({ number, label, context }) {
  // When `number` is pure HTML (starts with a tag), set fontSize:0 on the
  // container to collapse the CSS strut to zero — the span inside then
  // controls height entirely. For plain text ("38", "1,400") keep the
  // original 64px so text nodes render at the right size.
  const pureHTML = /^\s*</.test(number)

  return (
    <div
      className="flex flex-col text-center"
      style={{
        padding: '26px',
        gap: 8,
      }}
    >
      <div
        style={pureHTML ? {
          fontSize: 0,          // kills the 64px strut
          color: '#a44820',     // inherited by child spans
          fontWeight: 500,
          letterSpacing: '-.01em',
        } : {
          fontSize: 64,
          lineHeight: 0.95,
          color: '#a44820',
          fontWeight: 500,
          letterSpacing: '-.01em',
        }}
        dangerouslySetInnerHTML={{ __html: number }}
      />
      <div style={{ fontSize: 18, color: '#2c4a52', fontStyle: 'italic' }}>
        {label}
      </div>
      {context && (
        <div
          className="font-mono uppercase"
          style={{
            marginTop: 12,
            fontSize: 10,
            letterSpacing: '.16em',
            color: '#5a6b71',
          }}
        >
          {context}
        </div>
      )}
    </div>
  )
}

/**
 * StatGrid — n-column grid of impact/metric cards.
 * Desktop: cols columns (default 4). Mobile: 2 columns.
 *
 * Props:
 *   sectionNum   — optional numbered circle label
 *   sectionLabel — optional mono label text
 *   heading      — section H2 heading above the grid
 *   stats        — array of StatCard props: { number, label, context? }
 *   cols         — number of columns on desktop: 2 | 3 | 4 (default 4)
 */
export default function StatGrid({
  sectionNum,
  sectionLabel,
  heading,
  stats = [],
  cols = 4,
}) {
  // Static strings so Tailwind's scanner includes them
  const desktopCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[cols] ?? 'lg:grid-cols-4'

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
        <h2
          className="font-medium text-[28px] md:text-[40px] leading-[1.2] m-0 mb-9 text-porter max-w-[780px]"
        >
          {heading}
        </h2>
      )}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${desktopCols}`}>
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </motion.section>
  )
}
