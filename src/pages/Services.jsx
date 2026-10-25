import { BookOpen, Code2, GalleryHorizontal, Globe2 } from 'lucide-react'
import { useSearchParams, Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import SearchBar from '../components/SearchBar.jsx'

const services = [
  {
    number: '01',
    title: 'Educational Platforms',
    description: 'For teachers, coaches, and educators. Upload lectures, organize content, and give students a clear place to learn.',
    features: ['Video hosting', 'Course organization', 'Student management', 'Progress tracking'],
    technology: 'React · Node.js · Cloud storage',
    icon: <BookOpen size={20} strokeWidth={1.4} />,
  },
  {
    number: '02',
    title: 'Business & Advertising Sites',
    description: 'Showcase your products, services, or brand with a focused website that helps potential customers find you.',
    features: ['Responsive design', 'Search-friendly structure', 'Contact forms', 'Analytics integration'],
    technology: 'Next.js · Tailwind CSS · Vercel',
    icon: <Globe2 size={20} strokeWidth={1.4} />,
  },
  {
    number: '03',
    title: 'Custom Web Applications',
    description: 'Have a specific problem or idea? We’ll work through the requirements and build the right tool for the job.',
    features: ['Custom functionality', 'Database integration', 'User authentication', 'Real-time features'],
    technology: 'Full-stack · PostgreSQL · GraphQL',
    icon: <Code2 size={20} strokeWidth={1.4} />,
  },
  {
    number: '04',
    title: 'Portfolio & Personal Sites',
    description: 'A distinct place on the web for your work, ideas, and personality—without forcing you into a template.',
    features: ['Custom motion', 'Gallery sections', 'Blog integration', 'Contact systems'],
    technology: 'React · Framer Motion · CMS',
    icon: <GalleryHorizontal size={20} strokeWidth={1.4} />,
  },
  {
    number: '05',
    title: 'E-commerce Websites',
    description: 'A thoughtful storefront for product-led businesses, with clear product discovery and a simple route to enquiry or checkout.',
    features: ['Product catalogues', 'Responsive storefronts', 'Payments integration planning', 'Order journey design'],
    technology: 'React · Commerce integrations · Analytics',
    icon: <Globe2 size={20} strokeWidth={1.4} />,
  },
]

const serviceSearchAliases = {
  'website development': ['custom websites', 'business & advertising sites', 'portfolio & personal sites'],
  'custom websites': ['custom websites', 'business & advertising sites', 'portfolio & personal sites'],
  'business sites': ['business & advertising sites'],
  'web apps': ['custom web applications'],
  'frontend engineering': ['custom web applications', 'portfolio & personal sites'],
  'product design': ['portfolio & personal sites'],
  'e-commerce': ['e-commerce websites'],
}

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('search') || ''
  const normalizedQuery = query.trim().toLowerCase()
  const aliases = serviceSearchAliases[normalizedQuery] || []
  const filteredServices = normalizedQuery
    ? services.filter((service) => {
      const searchableText = `${service.title} ${service.description} ${service.features.join(' ')} ${service.technology}`.toLowerCase()
      return searchableText.includes(normalizedQuery) || aliases.some((alias) => searchableText.includes(alias))
    })
    : services

  return (
    <section className="services-page section-wrap">
      <header className="page-intro">
        <span className="eyebrow">What we build</span>
        <h1 className="page-title">Websites with<br />a job to do<span className="accent">.</span></h1>
        <p className="page-intro__description">
          We create personalized websites for educators, entrepreneurs, and
          business owners. Tell us what you need; we’ll work out how to build it.
        </p>
      </header>
      <div className="services-page__search">
        <SearchBar />
        {query && <button type="button" onClick={() => setSearchParams({})}>Clear search: “{query}”</button>}
      </div>
      <div className="service-detail-grid">
        {filteredServices.map((service, index) => (
          <ServiceCard service={service} index={index} key={service.number} />
        ))}
      </div>
      {filteredServices.length === 0 && <div className="services-empty"><h2>No exact matches yet.</h2><p>Tell us what you have in mind and we can discuss whether it fits our team.</p><Link to="/contact">Talk to HIGH5 <span aria-hidden="true">↗</span></Link></div>}
    </section>
  )
}
