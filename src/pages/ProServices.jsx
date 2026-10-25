import { ArrowUpRight, Check, ClipboardCheck, Code2, MessagesSquare, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const inclusions = [
  { title: 'A considered discovery', text: 'We learn about your audience, goals, content, and technical constraints before suggesting a solution.', icon: MessagesSquare },
  { title: 'A written project plan', text: 'Scope, deliverables, responsibilities, and milestones are agreed before implementation.', icon: ClipboardCheck },
  { title: 'Direct collaboration', text: 'You can speak with the people designing and building your product.', icon: Code2 },
  { title: 'A careful handoff', text: 'We review the finished work with you and clarify what ongoing support would involve.', icon: ShieldCheck },
]

export default function ProServices() {
  return (
    <section className="pro-page section-wrap">
      <header className="partner-hero">
        <span className="eyebrow">HIGH5 Pro · A more guided project</span>
        <h1 className="page-title">A small team, a clear plan, and the right build<span className="accent">.</span></h1>
        <p>For projects that need a little more discovery and coordination, HIGH5 Pro offers a guided conversation and a custom scope. It’s a service from our team—not a marketplace or a guarantee of specific outcomes.</p>
        <Link className="button button--light" to="/contact">Request a project conversation <ArrowUpRight size={15} /></Link>
      </header>
      <div className="pro-page__grid">
        {inclusions.map(({ title, text, icon: Icon }) => <article key={title}><Icon size={21} /><h2>{title}</h2><p>{text}</p><Check size={15} className="pro-page__check" /></article>)}
      </div>
      <div className="pro-page__note"><span className="eyebrow">Good to know</span><p>We’re an early-stage, five-person team. Seniority, availability, delivery timing, pricing, and support are discussed honestly for each enquiry—nothing is represented as guaranteed in advance.</p></div>
    </section>
  )
}
