import { ArrowUpRight, CreditCard, Facebook, Instagram, Linkedin, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import high5Logo from '../assets/high5-logo.png'

const columns = [
  { title: 'Explore services', links: [['Website development', '/services'], ['Educational platforms', '/services'], ['Business websites', '/services'], ['E-commerce', '/services'], ['Web applications', '/services'], ['Automation discovery', '/services?search=automation']] },
  { title: 'For clients', links: [['How HIGH5 works', '/process'], ['Project enquiry', '/contact'], ['Frequently asked questions', '/faq'], ['Client stories', '/testimonials'], ['Guides & resources', '/community']] },
  { title: 'For collaborators', links: [['Work with HIGH5', '/become-a-seller'], ['Meet the team', '/team'], ['Community', '/community'], ['Open conversations', '/contact']] },
  { title: 'Business solutions', links: [['HIGH5 Pro', '/pro'], ['Project planning', '/process'], ['Web development', '/services'], ['Automation discovery', '/services?search=automation'], ['Contact the team', '/contact']] },
  { title: 'Company & legal', links: [['About HIGH5', '/about'], ['Help & FAQ', '/faq'], ['Terms of service', '/terms'], ['Privacy policy', '/privacy'], ['Cookie preferences', '/privacy#cookies'], ['Do not sell or share my information', '/privacy']] },
]

const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: Music2 },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: Facebook },
  { label: 'Pinterest', href: 'https://www.pinterest.com/', icon: null, symbol: 'P' },
  { label: 'X / Twitter', href: 'https://x.com/', icon: null, symbol: '𝕏' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main section-wrap">
        <div className="site-footer__brand">
          <Link className="wordmark" to="/" aria-label="HIGH5 home">
            <img className="wordmark__logo" src={high5Logo} alt="" />
            <strong className="wordmark__name">HIGH5<span>.</span></strong>
          </Link>
          <p>HIGH5 — High-performance web experiences.</p>
          <div className="site-footer__socials" aria-label="Social media">
            {socials.map(({ label, href, icon: Icon, symbol }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                {Icon ? <Icon size={16} /> : <span aria-hidden="true">{symbol}</span>}
              </a>
            ))}
          </div>
        </div>
        {columns.map((column) => (
          <nav className="site-footer__column" aria-label={column.title} key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map(([label, to]) => label === 'Cookie preferences' ? (
              <button className="site-footer__cookie-link" type="button" key={label} onClick={() => window.dispatchEvent(new Event('high5:open-cookie-preferences'))}>{label}</button>
            ) : <Link key={label} to={to}>{label}</Link>)}
          </nav>
        ))}
      </div>
      <div className="site-footer__bottom section-wrap">
        <span>© HIGH5 International 2024. All rights reserved.</span>
        <span className="site-footer__payment" aria-label="Payment methods arranged per project"><CreditCard size={15} /> Payments arranged per project · INR</span>
        <label className="site-footer__language">
          <span className="sr-only">Language</span>
          <select aria-label="Language"><option>English</option></select>
        </label>
        <label className="site-footer__currency">
          <span className="sr-only">Currency</span>
          <select aria-label="Currency"><option>₹ INR</option></select>
        </label>
      </div>
      <Link className="site-footer__contact" to="/contact">Start a project <ArrowUpRight size={14} /></Link>
    </footer>
  )
}
