import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Process from './pages/Process.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import MouseSpotlight from './components/MouseSpotlight.jsx'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="page-transition"
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="site-shell">
        <div className="grid-texture" aria-hidden="true" />
        <MouseSpotlight />
        <CustomCursor />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}
