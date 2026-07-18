import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import ProjectCard from './ProjectCard'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function CaseStudies() {
  const cards = [
    { href: '/case-studies/meta', bgClass: 'bg-[#4481ef]', title: 'Meta–Quality Management System', mock: <img src="/assets/meta-calibration.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" />, arrowLight: true },
    { href: '/case-studies/grab', bgClass: 'bg-[#00b14f]', title: 'Grab – PIN and account recovery', mock: <img src="/assets/case-study-cover-grab.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" />, arrowLight: true },
  ]

  return (
    <section className="max-w-[1100px] mx-auto px-11 pt-[120px]" id="case-studies">
      <SectionHead title="Selected Case Studies" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <ProjectCard href={card.href} bgClass={card.bgClass} title={card.title} arrowLight={card.arrowLight}>
              {card.mock}
            </ProjectCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
