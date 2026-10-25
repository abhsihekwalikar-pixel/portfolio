import { motion } from 'framer-motion'
import ScrollRevealText from './ScrollRevealText.jsx'

export default function TeamMemberCard({ member, index }) {
  return (
    <motion.article
      className="team-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
    >
      {member.image ? (
        <div className={`team-card__avatar team-card__avatar--${index + 1} team-card__avatar--photo`}>
          <img className="team-card__portrait" src={member.image} alt={`${member.name}, ${member.role}`} />
          <i aria-hidden="true" />
        </div>
      ) : (
        <div className={`team-card__avatar team-card__avatar--${index + 1}`} aria-label={`${member.name} initials`}>
          <span>{member.initials}</span>
          <i aria-hidden="true" />
        </div>
      )}
      <div className="team-card__heading">
        <h2><ScrollRevealText text={member.name} /></h2>
        <span>{member.role}</span>
      </div>
      <p className="team-card__bio">{member.bio}</p>
      <div className="team-card__skills">
        {member.skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </motion.article>
  )
}
