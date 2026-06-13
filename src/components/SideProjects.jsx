import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import ProjectCard from './ProjectCard'
import ArticleMock from './mocks/ArticleMock'
import PosterMock from './mocks/PosterMock'
import TerminalMock from './mocks/TerminalMock'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function SideProjects() {
  const cards = [
    { href: '#', bgClass: 'bg-[#e9dcc1]', title: 'Field Notes — A writing practice', mock: <ArticleMock /> },
    { href: '#', bgClass: 'bg-[#c95c2a]', title: 'Annual N°04 — Risograph', mock: <PosterMock /> },
    { href: '#', bgClass: 'bg-[#1c2730]', title: 'Jot — A tiny journaling CLI', mock: <TerminalMock />, arrowLight: true },
  ]

  return (
    <section className="max-w-[1280px] mx-auto px-11 pt-[120px]" id="side-projects">
      <SectionHead title="Vibe-Coded Side Projects" />
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
