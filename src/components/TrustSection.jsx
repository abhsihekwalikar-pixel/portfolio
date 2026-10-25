import { motion } from 'framer-motion'

const tools = ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Vercel']

export default function TrustSection() {
  return (
    <section className="trust-section section-wrap" aria-label="HIGH5 capabilities">
      <div className="trust-section__heading">
        <span className="eyebrow">Built on modern foundations</span>
        <p>Tools chosen for your project, not logos chosen for show.</p>
      </div>
      <div className="trust-tools" aria-label="Technologies used">
        {tools.map((tool, index) => <motion.span key={tool} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>{tool}</motion.span>)}
      </div>
      <div className="trust-stats">
        <div><strong>05</strong><span>Team members</span></div>
        <div><strong>4</strong><span>Project stages</span></div>
        <div><strong>1:1</strong><span>Direct collaboration</span></div>
      </div>
    </section>
  )
}
