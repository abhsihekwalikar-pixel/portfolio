import { ArrowUpRight, MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Testimonials() {
  return (
    <section className="testimonials-section section-wrap" aria-labelledby="testimonials-heading">
      <span className="eyebrow">Honest work, honest feedback</span>
      <h1 className="page-title" id="testimonials-heading">Client stories<span className="accent">.</span></h1>
      <div className="testimonial-empty">
        <MessagesSquare size={27} />
        <h2>Our client stories are still taking shape.</h2>
        <p>We don’t publish invented reviews or ratings. As we complete client projects and receive permission to share feedback, we’ll feature their real experiences here.</p>
        <Link to="/process">See how we work <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  )
}
