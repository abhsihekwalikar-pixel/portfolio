import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="not-found section-wrap">
      <motion.span className="not-found__number" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>404</motion.span>
      <span className="eyebrow">Wrong turn</span><h1>Looks like you’re lost in the code<span className="accent">.</span></h1>
      <p>The page you’re looking for isn’t here. Let’s get you back on track.</p>
      <Link className="button button--light" to="/"><ArrowLeft size={15} /> Back to home <ArrowUpRight size={15} /></Link>
    </section>
  )
}
