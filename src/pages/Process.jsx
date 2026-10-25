import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start by understanding your vision, goals, and requirements. No jargon, just an honest conversation.',
    details: ['Initial consultation', 'Requirement gathering', 'Timeline discussion'],
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'We create a roadmap and design mockups. You’ll see what we’re building before we write a single line of code.',
    details: ['Wireframes', 'Design mockups', 'Tech stack selection', 'Project timeline'],
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your website with regular updates. You’ll see progress every week, not just at the end.',
    details: ['Weekly demos', 'Code reviews', 'Testing', 'Feedback incorporation'],
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We deploy your site and provide ongoing support. We’re here even after launch.',
    details: ['Deployment', 'Performance optimization', 'Training', '30-day support'],
  },
]

export default function Process() {
  return (
    <section className="process-page section-wrap">
      <header className="page-intro">
        <span className="eyebrow">How we work</span>
        <h1 className="page-title">A clear plan.<br />A good build<span className="accent">.</span></h1>
        <p className="page-intro__description">
          Transparent, collaborative, and focused on what you need. Here’s how
          we’ll take your project from a first conversation to a live website.
        </p>
      </header>
      <div className="process-detail-list">
        {steps.map((step, index) => (
          <motion.article
            className="process-detail"
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
          >
            <span className="process-detail__number">{step.number}</span>
            <div className="process-detail__main">
              <span className="eyebrow">Step {step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <ul className="process-detail__list">
              {step.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
