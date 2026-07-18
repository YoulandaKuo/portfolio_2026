import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import SectionLabel from './SectionLabel'

/**
 * SplitMedia — media on the left, heading + body text on the right.
 * Desktop (md+): 2-column grid, default ratio 6:4. Mobile: stacked, media first.
 *
 * Props:
 *   sectionNum   — optional numbered circle label (e.g. "01")
 *   sectionLabel — optional mono label text (e.g. "Overview")
 *   media        — React node rendered in the left column
 *   aspectRatio  — CSS aspect-ratio value for the media container (default '4/3')
 *   shadow       — whether to apply drop shadow to media (default false)
 *   rounded      — whether to apply rounded corners to media (default false)
 *   ratio        — "left:right" column ratio on desktop, e.g. "6:4" or "7:3" (default '6:4')
 *   heading      — heading text/node rendered in the right column
 *   headingLevel — "h2" (default, 40px) | "h3" (32px)
 *   body         — body text/node rendered below the heading in the right column
 */
export default function SplitMedia({
  sectionNum,
  sectionLabel,
  media,
  aspectRatio = '4/3',
  shadow = false,
  rounded = false,
  ratio = '6:4',
  heading,
  headingLevel = 'h2',
  body,
}) {
  const H = headingLevel
  const headingSize =
    headingLevel === 'h3'
      ? 'text-[24px] md:text-[32px]'
      : 'text-[28px] md:text-[40px]'

  const [leftRatio, rightRatio] = ratio.split(':')

  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-11 pt-[80px] md:pt-[120px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {sectionLabel && <SectionLabel num={sectionNum} label={sectionLabel} />}
      <div
        className="grid gap-10 items-center md:gap-[64px] grid-cols-1 md:[grid-template-columns:var(--split-ratio)]"
        style={{ '--split-ratio': `${leftRatio}fr ${rightRatio}fr` }}
      >
        <div
          className={`overflow-hidden relative ${rounded ? 'rounded-lg' : ''}`}
          style={{
            aspectRatio,
            ...(shadow ? { boxShadow: '0 40px 80px -50px rgba(20,30,40,.45)' } : {}),
          }}
        >
          {media}
        </div>
        <div>
          <H
            className={`font-medium ${headingSize} leading-[1.2] m-0 text-porter tracking-[-0.005em]`}
            style={{ textWrap: 'balance' }}
          >
            {heading}
          </H>
          {body && <div className="mt-5">{body}</div>}
        </div>
      </div>
    </motion.section>
  )
}
