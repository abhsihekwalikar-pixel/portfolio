import { ArrowUpRight, Code2, Globe2, ShoppingBag, GraduationCap, AppWindow } from 'lucide-react'
import { Link } from 'react-router-dom'

const icons = { Code2, Globe2, ShoppingBag, GraduationCap, AppWindow }

export default function PopularServiceCard({ service }) {
  const Icon = icons[service.icon] || Code2
  return (
    <article className="popular-service-card">
      <div className={`popular-service-card__visual popular-service-card__visual--${service.theme}`}>
        <span className="popular-service-card__eyebrow">HIGH5 · WEB STUDIO</span>
        <Icon size={42} strokeWidth={1.1} aria-hidden="true" />
        <span className="popular-service-card__visual-label">{service.title}</span>
      </div>
      <div className="popular-service-card__content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to="/contact">Discuss your project <ArrowUpRight size={14} /></Link>
      </div>
    </article>
  )
}
