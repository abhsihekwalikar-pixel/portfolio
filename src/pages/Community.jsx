import { useState } from 'react'
import { ArrowUpRight, BookOpen, CalendarDays, MessageCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'

const communityCards = [
  { title: 'Local connections', text: 'Meet builders and makers in your area.', link: 'Find a project community', icon: Users },
  { title: 'Learning together', text: 'Share what you are learning and get a fresh perspective.', link: 'Meet the HIGH5 team', icon: BookOpen },
  { title: 'Conversations', text: 'Ask thoughtful questions about your digital project.', link: 'Send us a question', icon: MessageCircle },
  { title: 'Workshops & events', text: 'We are developing practical sessions for our community.', link: 'Suggest a topic', icon: CalendarDays },
]

const categories = ['All ideas', 'Programming & Tech', 'AI & Automation', 'Business Websites', 'Learning Platforms']
const projectIdeas = [
  { title: 'A clear business website', type: 'Illustrative project brief', category: 'Business Websites', description: 'Plan the pages, messaging, and enquiry journey for a growing service business.' },
  { title: 'An online learning space', type: 'Illustrative project brief', category: 'Learning Platforms', description: 'Organize courses, learning resources, and the experience for students.' },
  { title: 'A focused web application', type: 'Illustrative project brief', category: 'Programming & Tech', description: 'Turn a recurring workflow into a useful, purpose-built web tool.' },
  { title: 'A practical automation review', type: 'Illustrative project brief', category: 'AI & Automation', description: 'Map repetitive tasks and evaluate whether a small automation is appropriate.' },
]

export default function Community() {
  const [active, setActive] = useState(categories[0])
  const visibleIdeas = active === categories[0] ? projectIdeas : projectIdeas.filter((idea) => idea.category === active)
  return (
    <section className="community-page section-wrap">
      <header className="partner-hero">
        <span className="eyebrow">HIGH5 community</span>
        <h1 className="page-title">We grow better together<span className="accent">.</span></h1>
        <p>Useful conversations, shared learning, and a clearer path to your next digital project. We’re growing this community with the same thoughtful approach we bring to our work.</p>
      </header>
      <div className="community-grid">{communityCards.map(({ title, text, link, icon: Icon }, index) => <article key={title}><span className="community-card__number">0{index + 1}</span><Icon size={22} /><h2>{title}</h2><p>{text}</p><Link to={title === 'Conversations' ? '/contact' : '/team'}>{link} <ArrowUpRight size={14} /></Link></article>)}</div>
      <section className="opportunities-section">
        <span className="eyebrow">Explore possible project shapes</span>
        <h2 className="section-title">Opportunities start with a conversation<span className="accent">.</span></h2>
        <p className="opportunities-section__note">These are illustrative project briefs, not live job listings or guaranteed work. For availability, rates, and scope, please contact HIGH5 directly.</p>
        <div className="opportunity-tabs" role="tablist" aria-label="Filter project ideas">
          {categories.map((category) => <button key={category} type="button" role="tab" aria-selected={active === category} onClick={() => setActive(category)}>{category}</button>)}
        </div>
        <div className="project-idea-grid">{visibleIdeas.map((idea) => <ProjectCard key={idea.title} project={idea} />)}</div>
        <Link className="button button--outline" to="/contact">Discuss an idea <ArrowUpRight size={15} /></Link>
      </section>
    </section>
  )
}
