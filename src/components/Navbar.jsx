import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Globe2, Menu, Search, X } from 'lucide-react'
import high5Logo from '../assets/high5-logo.png'
import AuthModal from './AuthModal.jsx'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

const exploreLinks = [
  { label: 'Community', to: '/community', note: 'Ideas and ways to collaborate' },
  { label: 'Guides', to: '/community', note: 'Practical notes for your next build' },
  { label: 'Resources', to: '/community', note: 'Learn about working with HIGH5' },
]

const proLinks = [
  { label: 'I’m looking to hire', to: '/pro', note: 'Talk through your project' },
  { label: 'I want to collaborate', to: '/become-a-seller', note: 'Explore working with HIGH5' },
]

const menuVariants = {
  closed: { opacity: 0, y: '-2%', transition: { duration: 0.2, ease: 'easeOut' } },
  open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
}

const searchable = [
  { title: 'Home', detail: 'HIGH5 studio', to: '/' },
  { title: 'About us', detail: 'Our story and approach', to: '/about' },
  { title: 'Services', detail: 'Websites, platforms, and apps', to: '/services' },
  { title: 'How it works', detail: 'Our project process', to: '/process' },
  { title: 'Team', detail: 'Meet the people behind HIGH5', to: '/team' },
  { title: 'Contact', detail: 'Tell us about your project', to: '/contact' },
  { title: 'Frequently asked questions', detail: 'Answers about our services', to: '/faq' },
  { title: 'Client stories', detail: 'Testimonials and feedback', to: '/testimonials' },
  { title: 'Terms of service', detail: 'Website terms', to: '/terms' },
  { title: 'Privacy policy', detail: 'Privacy and cookies', to: '/privacy' },
  { title: 'HIGH5 Pro', detail: 'Project planning and team services', to: '/pro' },
  { title: 'Community and resources', detail: 'Collaborate and find helpful guides', to: '/community' },
  { title: 'Become a collaborator', detail: 'Explore working with HIGH5', to: '/become-a-seller' },
  { title: 'Custom websites', detail: 'Tailored web design and development', to: '/services' },
  { title: 'Educational platforms', detail: 'Learning websites and course platforms', to: '/services' },
  { title: 'Business sites', detail: 'Websites for growing businesses', to: '/services' },
  { title: 'Web apps', detail: 'Custom web applications', to: '/services' },
  { title: 'E-commerce', detail: 'Online shops and commerce', to: '/services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const [authMode, setAuthMode] = useState(null)
  const [query, setQuery] = useState('')
  const [recent, setRecent] = useState(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem('high5-recent-searches') || '[]')
      return Array.isArray(stored) ? stored.filter((item) => typeof item === 'string') : []
    } catch {
      return []
    }
  })
  const searchInput = useRef(null)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const closeAuth = useCallback(() => setAuthMode(null), [])

  const closeSearch = () => {
    setSearchOpen(false)
    setQuery('')
  }

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 20)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdown(null)
    closeSearch()
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen || Boolean(authMode))
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen, authMode])

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      } else if (event.key === 'Escape') {
        setMenuOpen(false)
        closeSearch()
        setDropdown(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setDropdown(null)
    }
    document.addEventListener('mousedown', closeDropdown)
    return () => document.removeEventListener('mousedown', closeDropdown)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const results = query.trim()
    ? searchable.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6)
    : []
  const recordSearch = (value) => {
    const updated = [value, ...recent.filter((item) => item !== value)].slice(0, 5)
    setRecent(updated)
    try {
      window.localStorage.setItem('high5-recent-searches', JSON.stringify(updated))
    } catch (error) {
      console.error('Unable to save recent searches:', error)
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="wordmark" to="/" onClick={closeMenu} aria-label="High5 home">
          <img className="wordmark__logo" src={high5Logo} alt="" />
          <strong className="wordmark__name">HIGH5<span>.</span></strong>
        </Link>
        <div className="nav-links" ref={dropdownRef}>
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              to={link.to}
              key={link.label}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-dropdown__trigger" aria-expanded={dropdown === 'explore'} onClick={() => setDropdown(dropdown === 'explore' ? null : 'explore')}>Explore <ChevronDown size={13} /></button>
            {dropdown === 'explore' && <motion.div className="nav-dropdown__panel" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>{exploreLinks.map((link) => <Link to={link.to} key={link.label} onClick={() => setDropdown(null)}><strong>{link.label}</strong><small>{link.note}</small></Link>)}</motion.div>}
          </div>
          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-dropdown__trigger" aria-expanded={dropdown === 'pro'} onClick={() => setDropdown(dropdown === 'pro' ? null : 'pro')}>HIGH5 Pro <ChevronDown size={13} /></button>
            {dropdown === 'pro' && <motion.div className="nav-dropdown__panel" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>{proLinks.map((link) => <Link to={link.to} key={link.label} onClick={() => setDropdown(null)}><strong>{link.label}</strong><small>{link.note}</small></Link>)}</motion.div>}
          </div>
        </div>
        <button className="nav-search" type="button" aria-label="Search (Ctrl+K)" onClick={() => setSearchOpen(true)}>
          <Search size={17} /><span>Search</span><kbd>⌘K</kbd>
        </button>
        <Link className="nav-seller" to="/become-a-seller">Become a collaborator</Link>
        <button className="nav-signin" type="button" onClick={() => setAuthMode('signin')}>Sign in</button>
        <button className="nav-join" type="button" onClick={() => setAuthMode('join')}>Join</button>
        <button className="nav-language" type="button" aria-label="Language: English"><Globe2 size={15} /><span>EN</span></button>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
            role="navigation"
            aria-label="Mobile navigation"
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
            <Link className="mobile-menu__link" to="/pro" onClick={closeMenu}><span>07</span>HIGH5 Pro</Link>
            <Link className="mobile-menu__link" to="/become-a-seller" onClick={closeMenu}><span>08</span>Become a collaborator</Link>
            <button className="mobile-menu__link" type="button" onClick={() => { closeMenu(); setAuthMode('signin') }}><span>09</span>Sign in / Join</button>
            <span className="mobile-menu__note">Five engineering students · One shared ambition</span>
          </motion.div>
        )}
      </AnimatePresence>
      <AuthModal mode={authMode} onClose={closeAuth} onModeChange={setAuthMode} />
      <AnimatePresence>
        {searchOpen && (
          <motion.div className="search-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) closeSearch() }}>
            <motion.section className="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-heading" initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }}>
              <h2 className="sr-only" id="search-heading">Search HIGH5</h2>
              <div className="search-dialog__input"><Search size={18} /><input ref={searchInput} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pages and services…" aria-label="Search pages and services" /><kbd>ESC</kbd><button type="button" onClick={closeSearch} aria-label="Close search"><X size={17} /></button></div>
              <div className="search-dialog__results">
                {query.trim() ? (results.length ? results.map((item) => {
                  const destination = item.to === '/services' ? `/services?search=${encodeURIComponent(item.title)}` : item.to
                  return <Link key={`${item.title}-${item.to}`} to={destination} onClick={() => { recordSearch(query.trim()); closeSearch() }}><span>{item.title}</span><small>{item.detail}</small></Link>
                }) : <p>No results found. Try “services” or “contact”.</p>) : (
                  <>{recent.length > 0 && <div className="search-dialog__recent"><span>Recent searches</span>{recent.map((item) => <button type="button" key={item} onClick={() => setQuery(item)}>{item}</button>)}</div>}<span className="search-dialog__hint">Try: services, educational platforms, contact</span></>
                )}
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
