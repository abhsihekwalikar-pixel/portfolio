import { motion } from 'framer-motion'

const chapters = [
  {
    number: '01',
    label: 'The illusion',
    title: 'We thought we knew how to code.',
    body: 'For the first two years of engineering, we thought we knew how to build. We built basic college projects. We were comfortable. We were wrong.',
    layout: 'manifesto-chapter--illusion',
    marker: 'COMFORT',
  },
  {
    number: '02',
    label: 'The reality check',
    title: 'Then, we hit the wall.',
    body: 'When we tried to build real-world software, it broke. We realized the industry had moved on, and our skills were outdated. We hit a wall. The frustration of realizing we weren’t ready was a wake-up call.',
    layout: 'manifesto-chapter--reality',
    marker: 'THE WAKE-UP',
  },
  {
    number: '03',
    label: 'The pivot',
    title: 'So, we tore it all down.',
    body: 'No more excuses. We spent countless nights mastering modern frameworks, understanding system architecture, and learning how to build software that actually scales. We transitioned from students to engineers.',
    layout: 'manifesto-chapter--pivot',
    marker: 'THE GRIND',
  },
  {
    number: '04',
    label: 'The promise',
    title: 'Why this matters to you.',
    body: 'Because we had to fight to learn the right way, we never cut corners. When you hire High5, you aren’t getting complacent veterans stuck in old ways. You get a team that is battle-tested in the modern stack, fiercely dedicated, and treats your project like our own reputation.',
    layout: 'manifesto-chapter--promise',
    marker: 'YOUR PROJECT',
  },
]

const stats = [
  { value: '05', label: 'Team members' },
  { value: '100%', label: 'Modern tech stack' },
  { value: '0', label: 'Compromises on quality' },
  { value: '24/7', label: 'Client focus' },
]

function RevealHeadline({ children, className = '' }) {
  const words = children.split(' ')

  return (
    <motion.h2
      className={`manifesto-chapter__title ${className}`}
      aria-label={children}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045 } },
      }}
    >
      {words.map((word, index) => (
        <span className="manifesto-word-mask" key={`${word}-${index}`} aria-hidden="true">
          <motion.span
            className="manifesto-word"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </motion.h2>
  )
}

function StoryChapter({ chapter, index }) {
  return (
    <article className={`manifesto-chapter ${chapter.layout}`}>
      <motion.div
        className="manifesto-chapter__rail"
        initial={{ opacity: 0, x: -5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <span className="manifesto-chapter__number">{chapter.number}</span>
        <span className="manifesto-chapter__rail-line" />
        <span className="manifesto-chapter__marker">{chapter.marker}</span>
      </motion.div>

      <div className="manifesto-chapter__content">
        <motion.span
          className="eyebrow manifesto-chapter__label"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
        >
          {chapter.label}
        </motion.span>
        <RevealHeadline className={`manifesto-chapter__title--${index + 1}`}>
          {chapter.title}
        </RevealHeadline>
        <motion.p
          className="manifesto-chapter__body"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
        >
          {chapter.body}
        </motion.p>
      </div>
    </article>
  )
}

export default function About() {
  return (
    <section className="about-page section-wrap">
      <header className="about-manifesto-header">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          High5&nbsp; / &nbsp;FROM COLLEGE PROJECTS TO PRODUCTION-GRADE ENGINEERING
        </motion.span>
        <motion.h1
          className="about-manifesto-header__title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        >
          The Journey<span className="accent">.</span>
        </motion.h1>
        <div className="about-manifesto-header__bottom">
          <p>Five engineering students. One hard reset.</p>
          <span className="about-manifesto-header__scroll">SCROLL TO FOLLOW&nbsp; ↓</span>
        </div>
      </header>

      <div className="manifesto">
        <div className="manifesto__spine" aria-hidden="true" />
        {chapters.map((chapter, index) => (
          <StoryChapter chapter={chapter} index={index} key={chapter.number} />
        ))}
      </div>

      <section className="about-stats-section" aria-label="High5 at a glance">
        <motion.div
          className="about-stats-section__heading"
          initial={{ opacity: 0, y: 9 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <span className="eyebrow">The standard we bring</span>
          <p>Small team. Serious about the details.</p>
        </motion.div>
        <div className="about-stats">
          {stats.map((stat, index) => (
            <motion.div
              className="about-stat"
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  )
}
