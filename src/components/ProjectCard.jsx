import { ArrowUpRight, ClipboardList } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="project-brief-card">
      <span className="project-brief-card__icon"><ClipboardList size={18} /></span>
      <span className="eyebrow">{project.type}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to="/contact">Discuss a similar project <ArrowUpRight size={14} /></Link>
    </article>
  )
}
