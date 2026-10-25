import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setMessage('')
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error(`Subscription failed (${response.status})`)
      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('Newsletter endpoint returned an unexpected response')
      }
      const result = await response.json()
      if (result.success !== true) throw new Error('Newsletter endpoint did not confirm the subscription')
      setMessage('Thanks for subscribing. Please check your inbox.')
      setEmail('')
    } catch (error) {
      if (error instanceof TypeError) {
        setMessage('Newsletter sign-up is temporarily unavailable. Please try again later.')
      } else {
        console.error('Newsletter subscription failed:', error)
        setMessage('We could not complete your subscription. Please try again later.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="newsletter section-wrap">
      <div><span className="eyebrow">Occasional notes, useful ideas</span><h2>Good things, by email<span className="accent">.</span></h2><p>Project notes and web insights, only when we have something worth sharing.</p></div>
      <form onSubmit={submit}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <button type="submit" disabled={submitting}>{submitting ? 'Subscribing…' : <>Subscribe <ArrowUpRight size={15} /></>}</button>
        <small>We respect your privacy. Unsubscribe at any time.</small>
        {message && <span className="newsletter__status" role="status">{message}</span>}
      </form>
    </section>
  )
}
