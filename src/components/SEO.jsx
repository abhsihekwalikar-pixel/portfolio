import { useEffect } from 'react'

const defaults = {
  title: 'HIGH5 — High-performance web experiences',
  description: 'HIGH5 builds thoughtful websites, educational platforms, and custom web applications for growing businesses.',
}

export default function SEO({ title, description = defaults.description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title || defaults.title
    document.title = fullTitle
    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        document.head.appendChild(element)
      }
      element.setAttribute(attribute, value)
    }
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="keywords"]', 'content', 'web design, web development, custom websites, educational platforms, HIGH5')
    setMeta('meta[name="author"]', 'content', 'HIGH5')
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[property="og:url"]', 'content', `${window.location.origin}${path}`)
    setMeta('meta[name="twitter:card"]', 'content', 'summary')
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description, path])

  return null
}
