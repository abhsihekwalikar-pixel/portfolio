import { motion } from 'framer-motion'
import TeamMemberCard from '../components/TeamMemberCard.jsx'
import abhishekPortrait from '../assets/abhishek.png'
import umarSharifPortrait from '../assets/umar-sharif.png'
import udayPortrait from '../assets/uday-p.png'
import vikasPortrait from '../assets/vikas.png'
import dhanushPortrait from '../assets/dhanush.png'

const members = [
  {
    name: 'Abhishek',
    initials: 'AB',
    role: 'Full-Stack Developer',
    bio: 'The problem solver. Focused on clean code and thinking through how the pieces fit together.',
    skills: ['React', 'Node.js', 'Database design'],
    image: abhishekPortrait,
  },
  {
    name: 'Umar Sharif',
    initials: 'UM',
    role: 'Frontend Specialist',
    bio: 'The detail enthusiast. Cares about considered interfaces, responsive layouts, and smooth motion.',
    skills: ['React', 'Tailwind CSS', 'UI / UX'],
    image: umarSharifPortrait,
  },
  {
    name: 'Vikas',
    initials: 'VK',
    role: 'Backend Engineer',
    bio: 'The systems thinker. Interested in dependable services, data, and APIs that make products work.',
    skills: ['Node.js', 'PostgreSQL', 'API design'],
    image: vikasPortrait,
  },
  {
    name: 'Dhanush',
    initials: 'DH',
    role: 'Creative Developer',
    bio: 'The experimenter. Turns early ideas into clear interactions and fast, polished experiences.',
    skills: ['JavaScript', 'Creative coding', 'Performance'],
    image: dhanushPortrait,
  },
  {
    name: 'Uday P',
    initials: 'UP',
    role: 'UI/UX & Product Designer',
    bio: 'The user advocate. Shapes intuitive interfaces and seamless journeys around real needs.',
    skills: ['UI / UX', 'Prototyping', 'Product thinking'],
    image: udayPortrait,
  },
]

const values = ['We communicate openly', 'We respect deadlines', 'We never stop learning', 'We care about your success']

export default function Team() {
  return (
    <section className="team-page section-wrap">
      <header className="page-intro">
        <span className="eyebrow">The people doing the work</span>
        <h1 className="page-title">Meet the Team<span className="accent">.</span></h1>
        <p className="page-intro__description">Five collaborators. One mission: earn your trust by doing thoughtful work.</p>
      </header>

      <div className="team-grid">
        {members.map((member, index) => (
          <TeamMemberCard member={member} index={index} key={member.name} />
        ))}
      </div>

      <motion.section
        className="team-together"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="team-together__graphic" aria-hidden="true">
          {members.map((member, index) => (
            <span className={`team-together__initial team-together__initial--${index + 1}`} key={member.initials}>
              {member.initials}
            </span>
          ))}
        </div>
        <div>
          <span className="eyebrow">Five minds, one build</span>
          <h2>Together, we make it work<span className="accent">.</span></h2>
          <p>
            No stock team portraits here. Just five students who show up, share
            the work, and keep learning as we go.
          </p>
        </div>
      </motion.section>

      <div className="team-values">
        <span className="eyebrow">How we show up</span>
        <div className="team-values__list">
          {values.map((value, index) => (
            <div className="team-value" key={value}>
              <span>0{index + 1}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
