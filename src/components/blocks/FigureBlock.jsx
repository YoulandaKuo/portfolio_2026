import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import SectionLabel from './SectionLabel'

/**
 * FigureBlock — a single contained figure (mockup, image, etc.) with optional caption.
 *
 * Props:
 *   media        — React node rendered inside the aspect-ratio container
 *   bg           — background color behind the media (default 'transparent')
 *   aspectRatio  — CSS aspect-ratio value (default '16/9')
 *   caption      — left-aligned caption text (e.g. "Fig. 01 — ...")
 *   project      — right-aligned label (e.g. "Meta · Web")
 *   sectionNum   — optional numbered circle label above the figure
 *   sectionLabel — optional mono label above the figure
 *   shadow       — whether to apply drop shadow (default true)
 *   variant      — 'cover' uses mt-[60px]; 'section' uses standard section top padding
 */
export default function FigureBlock({
  media,
  bg = 'transparent',
  aspectRatio = '16/9',
  caption,
  project,
  sectionNum,
  sectionLabel,
  shadow = true,
  variant = 'section',
}) {
  const outerClass =
    variant === 'cover'
      ? 'max-w-[1040px] mx-auto px-6 md:px-11 mt-[60px]'
      : 'max-w-[1040px] mx-auto px-6 md:px-11 pt-[80px] md:pt-[120px]'

  return (
    <motion.div
      className={outerClass}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {sectionLabel && <SectionLabel num={sectionNum} label={sectionLabel} />}
      <div
        className="rounded-lg overflow-hidden relative"
        style={{
          aspectRatio,
          background: bg,
          ...(shadow ? { boxShadow: '0 40px 80px -50px rgba(20,30,40,.45)' } : {}),
        }}
      >
        {media}
      </div>
      {(caption || project) && (
        <div className="mt-[18px] flex justify-between items-baseline font-mono text-[11px] tracking-[.16em] uppercase text-ink-soft">
          <span>{caption}</span>
          {project && <span>{project}</span>}
        </div>
      )}
    </motion.div>
  )
}
