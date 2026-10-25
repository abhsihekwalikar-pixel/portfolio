import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const questions = [
  ['What services do you offer?', 'We design and build custom websites, educational platforms, business sites, and web applications. See our services page for more detail.'],
  ['How much does a website cost?', 'The cost depends on the scope, functionality, and content. Share your goals with us and we’ll provide a clear, project-specific estimate before work begins.'],
  ['How long does it take to build a website?', 'Timelines depend on the size of the project and how quickly content and feedback are available. We’ll agree on milestones and a realistic schedule before starting.'],
  ['Do you provide ongoing support?', 'Yes. We can discuss post-launch maintenance and support options that fit your needs as part of your project plan.'],
  ['Can you redesign an existing website?', 'Absolutely. We can review your current site, understand what is and isn’t working, and plan a redesign around your goals.'],
  ['What technologies do you use?', 'We choose tools to fit the project. Our current work includes React, Next.js, Node.js, and modern hosting platforms.'],
  ['Do you offer payment plans?', 'Payment milestones are discussed and agreed before a project starts. Get in touch and we’ll outline the options for your scope.'],
  ['How do we get started?', 'Send us a note through the contact page with a short description of your idea. We’ll get back to you to discuss next steps.'],
]

export default function FAQ({ compact = false }) {
  const [openIndex, setOpenIndex] = useState(0)
  const items = compact ? questions.slice(0, 5) : questions
  return (
    <section className={`faq-section section-wrap${compact ? ' faq-section--compact' : ''}`} aria-labelledby="faq-heading">
      <div className="section-heading">
        <span className="eyebrow">Good questions</span>
        <h2 className="section-title" id="faq-heading">{compact ? 'Before we get started' : 'Frequently asked'}<span className="accent">.</span></h2>
      </div>
      <div className="faq-list">
        {items.map(([question, answer], index) => {
          const isOpen = openIndex === index
          const panelId = `faq-answer-${compact ? 'home-' : ''}${index}`
          return (
            <article className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={question}>
              <h3>
                <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span>{question}</span><ChevronDown size={17} />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && <motion.div id={panelId} className="faq-item__answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><p>{answer}</p></motion.div>}
              </AnimatePresence>
            </article>
          )
        })}
      </div>
    </section>
  )
}
