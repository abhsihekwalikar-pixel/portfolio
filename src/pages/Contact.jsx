import { ArrowUpRight, Dribbble, Github, Linkedin } from 'lucide-react'
import ContactForm from '../components/ContactForm.jsx'

const socials = [
  { name: 'X / Twitter', href: 'https://x.com/', icon: <span className="social-x">𝕏</span> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: <Linkedin size={18} /> },
  { name: 'GitHub', href: 'https://github.com/', icon: <Github size={18} /> },
  { name: 'Dribbble', href: 'https://dribbble.com/', icon: <Dribbble size={18} /> },
]

export default function Contact() {
  return (
    <section className="contact-page section-wrap">
      <header className="contact-heading">
        <span className="eyebrow">Get in touch</span>
        <h1 className="page-title">
          Let’s build something
          <br />
          together<span className="accent">.</span>
        </h1>
        <p className="page-intro__description">
          Have an idea for a learning platform, business site, or something
          completely different? Tell us about it.
        </p>
      </header>

      <div className="contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">A direct line</span>
          <a className="footer__email contact-direct-email" href="mailto:contacthigh5creations@gmail.com">
            contacthigh5creations@gmail.com
            <ArrowUpRight className="footer__email-icon" size={23} strokeWidth={1.4} />
          </a>
          <div className="contact-facts">
            <div>
              <span className="eyebrow">Response time</span>
              <p>We respond within 24 hours.</p>
            </div>
            <div>
              <span className="eyebrow">Location</span>
              <p>Working with clients everywhere.</p>
            </div>
          </div>
          <div className="contact-social-group">
            <span className="eyebrow">Or connect with us on</span>
            <div className="contact-socials">
              {socials.map((social) => (
                <a href={social.href} key={social.name} target="_blank" rel="noreferrer" aria-label={social.name}>
                  {social.icon}
                  <span>{social.name}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </aside>
        <ContactForm />
      </div>
    </section>
  )
}
