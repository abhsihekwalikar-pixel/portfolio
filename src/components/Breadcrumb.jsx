import { Link, useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const labels = {
  about: 'About', services: 'Services', process: 'How it works', team: 'Team',
  contact: 'Contact', faq: 'FAQ', testimonials: 'Testimonials', terms: 'Terms of service',
  privacy: 'Privacy policy',
  'become-a-seller': 'Collaborate with HIGH5',
  pro: 'HIGH5 Pro',
  community: 'Community',
}

export default function Breadcrumb() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  if (!segments.length) return null
  return (
    <nav className="breadcrumb section-wrap" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        {segments.map((segment, index) => {
          const to = `/${segments.slice(0, index + 1).join('/')}`
          const current = index === segments.length - 1
          const label = labels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
          return (
            <li key={to}>
              <ChevronRight size={13} aria-hidden="true" />
              {current ? <span aria-current="page">{label}</span> : <Link to={to}>{label}</Link>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
