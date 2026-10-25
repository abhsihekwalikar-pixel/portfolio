import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="service-detail-card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
    >
      <div className="service-detail-card__top">
        <span>{service.number}</span>
        {service.icon}
      </div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <ul>
        {service.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <div className="service-detail-card__tech">
        <span className="eyebrow">Typical tools</span>
        <p>{service.technology}</p>
      </div>
      <Link className="service-detail-card__link" to="/contact">
        Talk about your idea <ArrowUpRight size={15} />
      </Link>
    </motion.article>
  )
}
