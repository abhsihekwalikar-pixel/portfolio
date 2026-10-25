import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout.jsx'
import { PageSkeleton } from './components/Skeleton.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import MouseSpotlight from './components/MouseSpotlight.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Process = lazy(() => import('./pages/Process.jsx'))
const Team = lazy(() => import('./pages/Team.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const FAQ = lazy(() => import('./pages/FAQ.jsx'))
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const BecomeSeller = lazy(() => import('./pages/BecomeSeller.jsx'))
const ProServices = lazy(() => import('./pages/ProServices.jsx'))
const Community = lazy(() => import('./pages/Community.jsx'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="page-transition"
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        >
          <Suspense fallback={<PageSkeleton />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/process" element={<Process />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/become-a-seller" element={<BecomeSeller />} />
              <Route path="/pro" element={<ProServices />} />
              <Route path="/community" element={<Community />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
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
