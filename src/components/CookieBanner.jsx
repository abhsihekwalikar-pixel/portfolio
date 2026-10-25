import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'high5-cookie-preferences'

export default function CookieBanner() {
  const [choice, setChoice] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY)
    } catch (error) {
      console.error('Unable to read cookie preferences:', error)
      return null
    }
  })
  const [customizing, setCustomizing] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const openPreferences = () => {
      setChoice(null)
      setCustomizing(true)
    }
    window.addEventListener('high5:open-cookie-preferences', openPreferences)
    return () => window.removeEventListener('high5:open-cookie-preferences', openPreferences)
  }, [])

  const save = (preferences) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...preferences, savedAt: new Date().toISOString() }))
    } catch (error) {
      console.error('Unable to save cookie preferences:', error)
    }
    setChoice('saved')
    setCustomizing(false)
  }

  return (
    <AnimatePresence>
      {!choice && (
        <motion.aside className="cookie-banner" aria-label="Cookie preferences" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
          <div>
            <strong>Cookies, your call.</strong>
            <p>We use essential storage for site preferences. Optional analytics are off unless you choose to enable them. <Link to="/privacy#cookies">Cookie details</Link>.</p>
            {customizing && (
              <label className="cookie-banner__toggle">
                <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
                Allow optional analytics
              </label>
            )}
          </div>
          <div className="cookie-banner__actions">
            {customizing ? (
              <button type="button" onClick={() => save({ essential: true, analytics })}>Save preferences</button>
            ) : (
              <>
                <button type="button" onClick={() => save({ essential: true, analytics: false })}>Reject all</button>
                <button type="button" onClick={() => setCustomizing(true)}>Customize</button>
                <button type="button" onClick={() => save({ essential: true, analytics: true })}>Accept all</button>
              </>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
