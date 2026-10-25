import { ArrowUpRight, BookOpen, Code2, Megaphone, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'

const services = [
  {
    number: '01',
    title: 'Custom websites',
    description: 'Tailored to your needs.',
    icon: <Code2 size={21} strokeWidth={1.4} />,
  },
  {
    number: '02',
    title: 'Educational platforms',
    description: 'Upload lectures. Share knowledge.',
    icon: <BookOpen size={21} strokeWidth={1.4} />,
  },
  {
    number: '03',
    title: 'Business sites',
    description: 'Advertise clearly. Grow steadily.',
    icon: <Megaphone size={21} strokeWidth={1.4} />,
  },
]

const reasons = [
  { title: 'Fresh perspective', text: 'New ideas, current tools, and no attachment to outdated methods.' },
  { title: 'Dedicated attention', text: 'A small team means direct conversations and real focus on your project.' },
  { title: 'Modern foundations', text: 'React, Next.js, and carefully chosen tools for a site that can grow.' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="home-services section-wrap">
        <div className="section-heading">
          <span className="eyebrow">What we do</span>
          <div className="section-heading__row">
            <h2 className="section-title">Useful by design<span className="accent">.</span></h2>
            <Link className="text-link" to="/services">
              All services <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="home-service-grid">
          {services.map((service, index) => (
            <motion.div
              className="home-service"
              key={service.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            >
              <Link to="/services" aria-label={`Learn about ${service.title}`}>
                <div className="home-service__top">
                  <span>{service.number}</span>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ArrowUpRight className="home-service__arrow" size={17} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="home-reasons section-wrap">
        <div className="home-reasons__intro">
          <span className="eyebrow">A small team, with a point to prove</span>
          <h2 className="section-title">Why work<br />with us<span className="accent">?</span></h2>
          <p>
            We don’t have a long client list to lean on yet. What we can offer is
            honest communication, focused work, and the care that comes from
            earning every opportunity.
          </p>
        </div>
        <div className="reason-list">
          {reasons.map((reason, index) => (
            <motion.article
              className="reason-item"
              key={reason.title}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            >
              <span className="reason-item__number">0{index + 1}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
              <Sparkles size={16} strokeWidth={1.3} />
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
