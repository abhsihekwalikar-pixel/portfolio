import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
  { label: 'HIGH5 Pro', to: '/pro', highlighted: true },
  { label: 'Become a collaborator', to: '/become-a-seller' },
]

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.24, ease: 'easeOut' } },
  open: { opacity: 1, transition: { duration: 0.28, ease: 'easeOut' } },
}

const listVariants = {
  closed: { transition: { staggerChildren: 0.035, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.08, staggerChildren: 0.1 } },
}

const itemVariants = {
  closed: { opacity: 0, y: 18, transition: { duration: 0.16, ease: 'easeIn' } },
  open: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
}

/**
 * @param {{ isOpen: boolean, setIsOpen: (isOpen: boolean) => void, onAuthOpen: (mode: 'signin' | 'join') => void }} props
 */
export default function MobileMenu({ isOpen, setIsOpen, onAuthOpen }) {
  const previousOverflow = useRef('')
  const closeFromBackdrop = (event) => {
    if (!event.target.closest('.mobile-menu__items')) setIsOpen(false)
  }

  useEffect(() => {
    const desktopViewport = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false)
    }

    desktopViewport.addEventListener('change', closeOnDesktop)
    return () => desktopViewport.removeEventListener('change', closeOnDesktop)
  }, [setIsOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    previousOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.querySelector('#mobile-navigation a')?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsOpen(false)
      }

      if (event.key === 'Tab') {
        const menu = document.getElementById('mobile-navigation')
        const focusable = menu?.querySelectorAll('a[href], button:not([disabled])')
        if (!focusable?.length) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow.current
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, setIsOpen])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-backdrop"
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          onMouseDown={closeFromBackdrop}
        >
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            aria-modal="true"
            role="dialog"
            initial="closed"
            animate="open"
            exit="closed"
            variants={listVariants}
            onMouseDown={closeFromBackdrop}
          >
            <div className="mobile-menu__items">
              {menuItems.map((item, index) => (
                <motion.div key={item.to} variants={itemVariants}>
                  <NavLink
                    className={({ isActive }) =>
                      `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}${item.highlighted ? ' mobile-menu__link--highlighted' : ''}`
                    }
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <button
                  className="mobile-menu__link"
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    onAuthOpen('signin')
                  }}
                >
                  <span>09</span>
                  Sign in / Join
                </button>
              </motion.div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
