import { ArrowDownRight, ArrowUpRight, ArrowUpRight as Arrow } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroVisual from './HeroVisual.jsx'
import SearchBar from './SearchBar.jsx'

const lines = ['We engineer', 'high-performance', 'web experiences.']
const popularCategories = ['Website Development', 'Educational Platforms', 'Business Sites', 'E-commerce', 'Web Apps']

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="hero section-wrap" id="top">
      <div className="hero__eyebrow">
        <span className="availability"><i /> Available for projects</span>
        <span className="hero__location">Five engineering students · Building worldwide</span>
      </div>

      <div className="hero__main">
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            aria-label={lines.join(' ')}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
          >
            {lines.map((line) => (
              <span className="hero__line-mask" key={line}>
                <span className="hero__line">{line}</span>
              </span>
            ))}
          </motion.h1>
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
          >
            <span className="eyebrow">Built by five engineering students.</span>
            <p>
              We spent our first two years figuring things out. Now we’re serious
              about building thoughtful websites for people with something worth
              sharing.
            </p>
            <div className="hero__actions">
              <Link className="button button--light" to="/team">
                Meet the team <ArrowDownRight size={15} />
              </Link>
              <Link className="button button--outline" to="/contact">
                Start your project <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
        <HeroVisual />
      </div>

      <div className="hero__discover">
        <SearchBar />
        <div className="hero-categories" aria-label="Popular service categories">
          <span className="eyebrow">Explore services</span>
          <div>{popularCategories.map((category) => <Link key={category} to={`/services?search=${encodeURIComponent(category)}`}>{category} <Arrow size={13} /></Link>)}</div>
        </div>
      </div>

      <Link className="hero__scroll" to="/services" aria-label="Explore what we build">
        <span>See what we build</span>
        <span className="hero__scroll-line" />
      </Link>
    </section>
  )
}
