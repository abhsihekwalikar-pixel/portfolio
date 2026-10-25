import { ArrowUpRight, BookOpenCheck, Lightbulb, Store } from 'lucide-react'
import { Link } from 'react-router-dom'

const icons = [Lightbulb, Store, BookOpenCheck]

export default function GuideCard({ guide, index = 0 }) {
  const Icon = icons[index % icons.length]
  return (
    <article className="guide-card">
      <div className={`guide-card__art guide-card__art--${index + 1}`}><Icon size={30} strokeWidth={1.3} /></div>
      <span className="eyebrow">HIGH5 FIELD NOTES</span>
      <h3>{guide.title}</h3>
      <p>{guide.description}</p>
      <Link to="/contact">Talk it through <ArrowUpRight size={14} /></Link>
    </article>
  )
}
