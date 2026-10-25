import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import high5Logo from '../assets/high5-logo.png'

export default function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <Link className="wordmark" to="/" aria-label="High5 home">
        <img className="wordmark__logo" src={high5Logo} alt="" />
        <strong className="wordmark__name">HIGH5</strong>
      </Link>
      <span className="site-footer__note">Five collaborators · Building with intent</span>
      <Link className="site-footer__contact" to="/contact">
        Start a project <ArrowUpRight size={14} />
      </Link>
      <span className="site-footer__copyright">© High5 2026</span>
    </footer>
  )
}
