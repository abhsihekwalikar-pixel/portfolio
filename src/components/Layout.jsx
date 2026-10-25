import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Breadcrumb from './Breadcrumb.jsx'
import CookieBanner from './CookieBanner.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import SEO from './SEO.jsx'

const pageMeta = {
  '/': ['HIGH5 — High-performance web experiences', 'HIGH5 builds thoughtful websites, educational platforms, and custom web applications for growing businesses.'],
  '/about': ['Our Story — HIGH5', 'Meet the HIGH5 team and learn about our approach to thoughtful web design and development.'],
  '/services': ['What We Build — HIGH5', 'Explore HIGH5 custom websites, educational platforms, business sites, and web applications.'],
  '/process': ['How We Work — HIGH5', 'Learn how HIGH5 takes a web project from first conversation through review and launch.'],
  '/team': ['Meet the Team — HIGH5', 'Meet the people behind HIGH5 web design and development.'],
  '/contact': ['Start a Project — HIGH5', 'Tell HIGH5 about your project and discuss the right next steps.'],
  '/faq': ['FAQ — HIGH5', 'Answers to common questions about HIGH5 web design and development services.'],
  '/testimonials': ['Client stories — HIGH5', 'Client feedback and stories from HIGH5 web design and development projects.'],
  '/terms': ['Terms of Service — HIGH5', 'Terms that apply when you use the HIGH5 website or engage HIGH5 for a project.'],
  '/privacy': ['Privacy Policy — HIGH5', 'Learn what information HIGH5 collects, why it is used, and how to contact us about privacy.'],
  '/become-a-seller': ['Collaborate with HIGH5', 'Learn about project collaboration with the HIGH5 web development team.'],
  '/pro': ['HIGH5 Pro — Guided web projects', 'A guided project conversation, clear scope, and direct collaboration with HIGH5.'],
  '/community': ['Community & resources — HIGH5', 'Explore practical project ideas, shared learning, and resources from HIGH5.'],
}

export default function Layout({ children }) {
  const location = useLocation()
  const [title, description] = pageMeta[location.pathname] || ['Page not found — HIGH5', 'This page could not be found. Return to HIGH5 and find your way.']
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <>
      <SEO title={title} description={description} path={location.pathname} />
      <Navbar />
      <Breadcrumb />
      <main className="page-frame">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <ScrollToTop />
    </>
  )
}
