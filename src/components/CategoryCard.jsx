import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category, index = 0 }) {
  const Icon = category.icon
  return (
    <motion.article className="category-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
      <Link to={`/services?search=${encodeURIComponent(category.search || category.title)}`}>
        <Icon size={23} strokeWidth={1.5} />
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <ArrowUpRight size={16} className="category-card__arrow" />
      </Link>
    </motion.article>
  )
}
