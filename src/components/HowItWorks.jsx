import { motion } from 'framer-motion'
import { MessageCircle, ClipboardList, PenTool, Rocket } from 'lucide-react'

const steps = [
  { number: '01', title: 'Tell us the idea', text: 'We start with a conversation about your audience, goals, and what success should look like.', icon: MessageCircle },
  { number: '02', title: 'Shape the plan', text: 'Together we clarify scope, content, timing, and a project estimate before anything is built.', icon: ClipboardList },
  { number: '03', title: 'Design & build', text: 'We turn the agreed plan into a thoughtful, responsive experience and share progress along the way.', icon: PenTool },
  { number: '04', title: 'Review & launch', text: 'We test the finished work, make final refinements, and help you get ready to launch.', icon: Rocket },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works section-wrap">
      <div className="section-heading"><span className="eyebrow">A clear path from idea to launch</span><h2 className="section-title">How it works<span className="accent">.</span></h2></div>
      <div className="process-steps">
        {steps.map(({ number, title, text, icon: Icon }, index) => (
          <motion.article className="process-step" key={number} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <span className="process-step__number">{number}</span><span className="process-step__icon"><Icon size={20} strokeWidth={1.5} /></span><h3>{title}</h3><p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
