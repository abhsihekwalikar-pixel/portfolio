import { ArrowUpRight, Handshake, Lightbulb, ShieldCheck, SlidersHorizontal, Sparkles, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { label: 'EARN', title: 'Build experience that grows', text: 'Discuss paid project collaborations where the scope, responsibilities, and compensation are clear in advance.', icon: WalletCards },
  { label: 'CONNECT', title: 'Work with people who value craft', text: 'Collaborate directly with a small team that cares about thoughtful, dependable work.', icon: Handshake },
  { label: 'CONTROL', title: 'Agree on a sustainable scope', text: 'We discuss availability and expectations before accepting a commitment. No promises of guaranteed work.', icon: SlidersHorizontal },
  { label: 'OPTIMIZE', title: 'Make the work easier to deliver', text: 'Share ideas, tools, and practices that help the team collaborate effectively.', icon: Sparkles },
  { label: 'SECURE', title: 'Put agreements in writing', text: 'Project terms and payment milestones are agreed in writing before any work starts.', icon: ShieldCheck },
  { label: 'SUPPORT', title: 'Learn alongside the team', text: 'Take part in constructive reviews, knowledge-sharing, and honest conversations.', icon: Lightbulb },
]

export default function BecomeSeller() {
  return (
    <div className="partner-page section-wrap">
      <header className="partner-hero">
        <span className="eyebrow">Work with HIGH5</span>
        <h1 className="page-title">Turn your expertise into work worth sharing<span className="accent">.</span></h1>
        <p>We’re a five-person engineering team, not an open freelance marketplace. We’re interested in meeting thoughtful collaborators for projects that fit our skills, values, and availability.</p>
        <Link className="button button--light" to="/contact">Introduce yourself <ArrowUpRight size={15} /></Link>
      </header>
      <section className="partner-section">
        <div><span className="eyebrow">The right fit matters</span><h2>Work with a team that keeps it human<span className="accent">.</span></h2></div>
        <p>We don’t promise a steady flow of projects or guaranteed earnings. When a project calls for extra expertise, we’ll share the brief, discuss expectations, and agree together whether it makes sense.</p>
      </section>
      <section className="partner-values" aria-label="Ways we collaborate">
        {values.map(({ label, title, text, icon: Icon }) => <article key={label}><Icon size={21} /><span className="eyebrow">{label}</span><h2>{title}</h2><p>{text}</p></article>)}
      </section>
      <section className="partner-cta"><span className="eyebrow">Interested in collaborating?</span><h2>Tell us what you do<span className="accent">.</span></h2><p>Share your experience, portfolio, and the kind of work you enjoy. We’ll be clear about whether there’s a fit.</p><Link className="button button--light" to="/contact">Contact HIGH5 <ArrowUpRight size={15} /></Link></section>
    </div>
  )
}
