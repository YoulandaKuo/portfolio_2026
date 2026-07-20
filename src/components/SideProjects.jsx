import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import ProjectCard from './ProjectCard'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function SideProjects() {
  const cards = [
    { href: '/side-projects/expense-tracker', bgClass: 'bg-[#2c5f4f]', title: 'Multi-currency expense tracker', mock: <img src="/assets/project-cover-expenseTracker.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" /> },
  ]

  return (
    <section className="max-w-[1100px] mx-auto px-11 pt-[120px]" id="side-projects">
      <SectionHead title="Side Projects" />
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
