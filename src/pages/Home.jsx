import Hero from '../components/Hero.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import TrustSection from '../components/TrustSection.jsx'
import HomeSections from '../components/HomeSections.jsx'
import FAQ from '../components/FAQ.jsx'
import Newsletter from '../components/Newsletter.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSections />
      <TrustSection />
      <HowItWorks />
      <FAQ compact />
      <Newsletter />
    </>
  )
}
