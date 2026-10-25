import { useEffect, useState } from 'react'
import { ArrowUpRight, LoaderCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Replace these placeholders with the IDs and public key from your EmailJS account.
const EMAILJS_SERVICE_ID = 'service_49g4s9s'
const EMAILJS_TEMPLATE_ID = 'template_89w6f7q'
const EMAILJS_PUBLIC_KEY = 'S466tFz7YT0eiGhrp'

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const sendEmail = async (event) => {
    event.preventDefault()
    if (isLoading) return

    const form = event.currentTarget
    setIsLoading(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus({ type: 'success', message: "Thanks! We'll get back to you within 24 hours." })
      form.reset()
    } catch (error) {
      console.error('Failed to send contact form with EmailJS:', error)
      setStatus({ type: 'error', message: 'Something went wrong. Please email us directly.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
      <div className="contact-form__heading">
        <span className="eyebrow">Tell us about your idea</span>
        <span className="contact-form__required">* Required</span>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Name <i>*</i></span>
          <input name="from_name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="form-field">
          <span>Email <i>*</i></span>
          <input name="from_email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Project type</span>
          <select name="project_type" defaultValue="">
            <option value="" disabled>Select a project type</option>
            <option>Educational Platform</option>
            <option>Business Website</option>
            <option>Custom App</option>
            <option>Other</option>
          </select>
        </label>
        <label className="form-field">
          <span>Budget range</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option value="under-3k">Under ₹3,000</option>
            <option value="3k-5k">₹3,000 - ₹5,000</option>
            <option value="5k-8k">₹5,000 - ₹8,000</option>
            <option value="8k-10k">₹8,000 - ₹10,000</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>Project description</span>
        <textarea name="message" rows="4" placeholder="Tell us about your idea…" />
      </label>
      <button className="button button--light contact-form__submit" type="submit" disabled={isLoading}>
        {isLoading ? (
          <>Sending... <LoaderCircle size={15} className="spinner" /></>
        ) : (
          <>Send project details <ArrowUpRight size={15} /></>
        )}
      </button>
      {status && (
        <div className={`contact-form__status contact-form__status--${status.type}`} role="status" aria-live="polite">
          {status.message}
        </div>
      )}
    </form>
  )
}
