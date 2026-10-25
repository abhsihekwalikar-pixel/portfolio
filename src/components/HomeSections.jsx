import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  AppWindow, ArrowLeft, ArrowRight, ArrowUpRight, Bot, BriefcaseBusiness, Code2,
  GraduationCap, Globe2, Handshake, Lightbulb, ShieldCheck, ShoppingBag, Sparkles,
  Users, WalletCards, Workflow, Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard.jsx'
import PopularServiceCard from './PopularServiceCard.jsx'
import GuideCard from './GuideCard.jsx'
import abhishekPortrait from '../assets/abhishek.png'
import umarPortrait from '../assets/umar-sharif.png'
import vikasPortrait from '../assets/vikas.png'
import dhanushPortrait from '../assets/dhanush.png'
import udayPortrait from '../assets/uday-p.png'

const categories = [
  { title: 'Website Development', description: 'Custom sites that make your next step clear.', icon: Code2, search: 'website' },
  { title: 'Educational Platforms', description: 'Organize lessons and make learning accessible.', icon: GraduationCap, search: 'educational' },
  { title: 'Business Websites', description: 'Present your services with focus and clarity.', icon: BriefcaseBusiness, search: 'business' },
  { title: 'E-commerce', description: 'Create a considered experience for your products.', icon: ShoppingBag, search: 'e-commerce' },
  { title: 'Web Applications', description: 'Build tools around the way your team works.', icon: AppWindow, search: 'web app' },
  { title: 'Product Design', description: 'Map user needs into useful digital journeys.', icon: Sparkles, search: 'design' },
  { title: 'Frontend Engineering', description: 'Responsive interfaces with thoughtful detail.', icon: Globe2, search: 'frontend' },
  { title: 'Automation Planning', description: 'Find practical opportunities to simplify work.', icon: Workflow, search: 'automation' },
]

const popularServices = [
  { title: 'Custom websites', description: 'A distinctive, responsive website shaped around your goals.', icon: 'Globe2', theme: 'green' },
  { title: 'Learning platforms', description: 'An organized digital home for your courses and community.', icon: 'GraduationCap', theme: 'violet' },
  { title: 'Business websites', description: 'A clear way to introduce your business and services.', icon: 'Code2', theme: 'amber' },
  { title: 'Web applications', description: 'Purpose-built features and workflows for your idea.', icon: 'AppWindow', theme: 'blue' },
  { title: 'E-commerce', description: 'A considered storefront for products and customers.', icon: 'ShoppingBag', theme: 'rose' },
]

const valueProps = [
  { title: 'Work directly with builders', text: 'Talk with the people designing and developing your project.', icon: Users },
  { title: 'Clear scope and pricing', text: 'Agree on deliverables and milestones before work begins.', icon: WalletCards },
  { title: 'A thoughtful build process', text: 'Review progress at clear stages and give feedback as we go.', icon: Zap },
  { title: 'Support that stays human', text: 'Ask questions, get context, and know who to reach out to.', icon: Handshake },
]

const guides = [
  { title: 'Starting a side project online', description: 'A short checklist to clarify the idea, audience, and first version.' },
  { title: 'Planning an online store', description: 'The product, content, and customer decisions worth making early.' },
  { title: 'Building your online presence', description: 'A practical way to make your website useful to the people you serve.' },
]

const teammates = [
  { name: 'Abhishek', role: 'Full-Stack Developer', image: abhishekPortrait },
  { name: 'Umar Sharif', role: 'Frontend Specialist', image: umarPortrait },
  { name: 'Vikas', role: 'Backend Engineer', image: vikasPortrait },
  { name: 'Dhanush', role: 'Creative Developer', image: dhanushPortrait },
  { name: 'Uday P', role: 'UI/UX & Product Designer', image: udayPortrait },
]

function PopularServices() {
  const rail = useRef(null)
  const scroll = (direction) => rail.current?.scrollBy({ left: direction * Math.max(300, rail.current.clientWidth * 0.72), behavior: 'smooth' })
  return (
    <section className="popular-section section-wrap">
      <div className="market-section-heading">
        <div><span className="eyebrow">Ways we can help</span><h2 className="section-title">Explore our services<span className="accent">.</span></h2></div>
        <div className="rail-controls"><button type="button" aria-label="Scroll services left" onClick={() => scroll(-1)}><ArrowLeft size={17} /></button><button type="button" aria-label="Scroll services right" onClick={() => scroll(1)}><ArrowRight size={17} /></button></div>
      </div>
      <div className="popular-service-rail" ref={rail}>{popularServices.map((service) => <PopularServiceCard key={service.title} service={service} />)}</div>
    </section>
  )
}

function ProSection() {
  const teamRail = useRef(null)
  const scrollTeam = (direction) => teamRail.current?.scrollBy({ left: direction * 220, behavior: 'smooth' })
  return (
    <section className="pro-section section-wrap">
      <div className="pro-section__intro">
        <span className="eyebrow">A close-knit build team</span>
        <h2>Let’s find the right people for your project<span className="accent">.</span></h2>
        <p>HIGH5 is a five-person engineering team. We’ll match your brief to the skills and availability we can genuinely offer, and tell you early if it isn’t the right fit.</p>
        <ul><li><ShieldCheck size={16} /> Direct access to the team doing the work</li><li><BriefcaseBusiness size={16} /> A project plan shaped to your scope</li><li><Handshake size={16} /> Clear communication from first call to handoff</li></ul>
        <Link className="button button--light" to="/pro">Discover HIGH5 Pro <ArrowUpRight size={15} /></Link>
      </div>
      <div className="pro-team">
        <div className="pro-team__heading"><span className="eyebrow">Five people, one shared build</span><div className="rail-controls"><button type="button" aria-label="Scroll team left" onClick={() => scrollTeam(-1)}><ArrowLeft size={15} /></button><button type="button" aria-label="Scroll team right" onClick={() => scrollTeam(1)}><ArrowRight size={15} /></button></div></div>
        <div className="pro-team__rail" ref={teamRail}>
          {teammates.map((member, index) => <Link className="pro-team__member" key={member.name} to="/team"><img src={member.image} alt="" loading="lazy" /><span>0{index + 1}</span><strong>{member.name}</strong><small>{member.role}</small><ArrowUpRight size={15} /></Link>)}
        </div>
        <Link className="pro-team__all" to="/team">Meet everyone <ArrowUpRight size={14} /></Link>
      </div>
    </section>
  )
}

function AutomationSection() {
  return (
    <section className="automation-section section-wrap">
      <div className="automation-section__copy">
        <span className="eyebrow">Practical automation, carefully scoped</span>
        <h2>Make the repetitive parts work smarter<span className="accent">.</span></h2>
        <p>Explore where small automations or AI-assisted workflows might reduce busywork. We’ll help assess the use case, privacy needs, and technical fit before recommending an approach.</p>
        <Link className="button button--outline" to="/services?search=automation">Discuss an automation idea <ArrowUpRight size={15} /></Link>
      </div>
      <div className="automation-cards" aria-label="Automation ideas">
        <article><span><Workflow size={17} /></span><div><strong>Booking workflows</strong><small>Enquiry → calendar → confirmation</small></div><i>IDEA</i></article>
        <article><span><Bot size={17} /></span><div><strong>Routine admin</strong><small>Review repetitive tasks for automation</small></div><i>IDEA</i></article>
        <article><span><Lightbulb size={17} /></span><div><strong>AI-assisted experiences</strong><small>Prototype only where it helps people</small></div><i>SCOPED</i></article>
      </div>
    </section>
  )
}

function SuccessPreview() {
  return (
    <section className="success-preview section-wrap">
      <div className="market-section-heading">
        <div><span className="eyebrow">Care in every detail</span><h2 className="section-title">What good collaboration looks like<span className="accent">.</span></h2></div>
      </div>
      <div className="success-preview__content">
        <div className="success-preview__visual"><span className="success-preview__play" aria-hidden="true">H5</span><span className="eyebrow">PROJECT STORIES COMING SOON</span></div>
        <div><span className="eyebrow">A promise we can make</span><blockquote>Clear conversations. A considered plan. Work you can review at every step.</blockquote><p>We’re building our portfolio of client stories. Until then, explore our approach and meet the team behind the work.</p><Link to="/process">See how we work <ArrowUpRight size={15} /></Link></div>
      </div>
    </section>
  )
}

export default function HomeSections() {
  return (
    <>
      <section className="category-section section-wrap">
        <div className="market-section-heading"><div><span className="eyebrow">Find the right starting point</span><h2 className="section-title">What are you building?<span className="accent">.</span></h2></div><Link className="text-link" to="/services">All services <ArrowUpRight size={15} /></Link></div>
        <div className="category-grid">{categories.map((category, index) => <CategoryCard key={category.title} category={category} index={index} />)}</div>
      </section>
      <PopularServices />
      <section className="value-section section-wrap">
        <div><span className="eyebrow">Better work starts with a good process</span><h2 className="section-title">Make your next step happen with HIGH5<span className="accent">.</span></h2></div>
        <div className="value-grid">{valueProps.map(({ title, text, icon: Icon }, index) => <motion.article key={title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}><Icon size={21} /><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
      </section>
      <ProSection />
      <AutomationSection />
      <SuccessPreview />
      <section className="guides-section section-wrap">
        <div className="market-section-heading"><div><span className="eyebrow">Ideas for your next step</span><h2 className="section-title">Guides to help you grow<span className="accent">.</span></h2></div><Link className="text-link" to="/community">More resources <ArrowUpRight size={15} /></Link></div>
        <div className="guide-grid">{guides.map((guide, index) => <GuideCard guide={guide} index={index} key={guide.title} />)}</div>
      </section>
      <section className="market-final-cta section-wrap">
        <span className="eyebrow">Your idea, your next move</span><h2>Freelance development services at your fingertips<span className="accent">.</span></h2><p>A focused team for websites, platforms, and web applications. Let’s see if we’re a fit.</p><Link className="button button--light" to="/contact">Start your project <ArrowUpRight size={15} /></Link>
      </section>
    </>
  )
}
