import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const pageTitles = {
      '/': 'High5 — Websites built with intent',
      '/about': 'Our Story — High5',
      '/services': 'What We Build — High5',
      '/process': 'How We Work — High5',
      '/team': 'Meet the Team — High5',
      '/contact': 'Start a Project — High5',
    }
    document.title = pageTitles[location.pathname] ?? pageTitles['/']
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main className="page-frame">
        {children}
      </main>
      <Footer />
    </>
  )
}
