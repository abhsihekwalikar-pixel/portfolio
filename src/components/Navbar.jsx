import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import high5Logo from '../assets/high5-logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

const menuVariants = {
  closed: { opacity: 0, y: '-5%', transition: { duration: 0.2, ease: 'easeOut' } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 20)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="wordmark" to="/" onClick={closeMenu} aria-label="High5 home">
          <img className="wordmark__logo" src={high5Logo} alt="" />
          <strong className="wordmark__name">HIGH5</strong>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              to={link.to}
              key={link.label}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {links.map((link, index) => (
              <NavLink
                className={({ isActive }) =>
                  `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
                }
                to={link.to}
                key={link.label}
                onClick={closeMenu}
                style={{ '--item-index': index }}
              >
                <span>0{index + 1}</span>
                {link.label}
              </NavLink>
            ))}
            <span className="mobile-menu__note">Five engineering students · One shared ambition</span>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
