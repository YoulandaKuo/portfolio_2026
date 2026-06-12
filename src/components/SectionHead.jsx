import { motion } from 'framer-motion'

export default function SectionHead({ title }) {
  return (
    <motion.div
      className="flex items-baseline justify-between mb-9 border-b border-rule pb-[14px]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-medium text-[32px] tracking-[0.005em] m-0 text-porter">{title}</h2>
    </motion.div>
  )
}
