import { BookOpen, Code2, GalleryHorizontal, Globe2 } from 'lucide-react'
import ServiceCard from '../components/ServiceCard.jsx'

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
]

export default function Services() {
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
      <div className="service-detail-grid">
        {services.map((service, index) => (
          <ServiceCard service={service} index={index} key={service.number} />
        ))}
      </div>
    </section>
  )
}
