import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ShieldCheck, Gauge, Globe2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const benefits = [
  { icon: Gauge, title: 'A clear project plan', text: 'Know the scope, milestones, and next steps before we begin.' },
  { icon: ShieldCheck, title: 'Direct team access', text: 'Work directly with the people shaping and building your project.' },
  { icon: Globe2, title: 'Thoughtful collaboration', text: 'Share context and feedback in one straightforward conversation.' },
]

export default function AuthModal({ mode, onClose, onModeChange }) {
  const [notice, setNotice] = useState('')
  const closeButton = useRef(null)
  const modal = useRef(null)
  const title = mode === 'join' ? 'Create a new account' : 'Success starts here'

  useEffect(() => {
    if (!mode) return

    closeButton.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'Tab' && modal.current) {
        const focusable = [...modal.current.querySelectorAll('a[href], button:not([disabled])')]
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mode, onClose])

  return (
    <AnimatePresence>
      {mode && (
        <motion.div className="auth-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
          <motion.section ref={modal} className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }}>
            <button ref={closeButton} className="auth-modal__close" type="button" aria-label="Close dialog" onClick={onClose}><X size={19} /></button>
            <aside className="auth-modal__benefits">
              <span className="eyebrow">The HIGH5 approach</span>
              <h2>Work together.<br />Build with intent.</h2>
              {benefits.map(({ icon: Icon, title: benefitTitle, text }) => <div className="auth-benefit" key={benefitTitle}><Icon size={18} /><p><strong>{benefitTitle}</strong><span>{text}</span></p></div>)}
            </aside>
            <div className="auth-modal__form">
              <span className="eyebrow">Welcome to HIGH5</span>
              <h2 id="auth-title">{title}</h2>
              <p>{mode === 'join' ? 'Create a project profile to tell us what you want to build.' : 'Sign-in accounts are not available yet. Start a project or contact our team directly.'}</p>
              {mode === 'join' && <Link className="auth-modal__primary" to="/contact" onClick={onClose}>Create a project profile</Link>}
              <button className="auth-modal__secondary" type="button" onClick={() => setNotice('Social sign-in is not configured yet. Please contact us to get started.')}>Continue with Google</button>
              <button className="auth-modal__secondary" type="button" onClick={() => setNotice('Email sign-in is not configured yet. Please contact us to get started.')}>Continue with email</button>
              <p className="auth-modal__notice" role="status">{notice}</p>
              <p className="auth-modal__switch">{mode === 'join' ? 'Already have an account?' : 'New to HIGH5?'} <button type="button" onClick={() => onModeChange(mode === 'join' ? 'signin' : 'join')}>{mode === 'join' ? 'Sign in' : 'Join us'}</button></p>
              <small>By continuing, you agree to our <Link to="/terms" onClick={onClose}>Terms</Link> and acknowledge our <Link to="/privacy" onClick={onClose}>Privacy Policy</Link>.</small>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
