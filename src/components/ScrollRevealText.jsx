import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollRevealText({
  text,
  lines,
  split = 'none',
  maskClassName = '',
  lineClassName = '',
  stagger = 0.08,
}) {
  const shouldReduceMotion = useReducedMotion()
  const items = lines ?? (
    split === 'words'
      ? String(text ?? '').split(/(\s+)/).filter(Boolean)
      : [text ?? '']
  )
  const isMultiLine = Boolean(lines)
  let wordIndex = 0

  return (
    <span className={`scroll-reveal${isMultiLine ? ' scroll-reveal--lines' : ''}`}>
      {items.map((item, index) => {
        if (split === 'words' && /^\s+$/.test(item)) return item
        const animationIndex = split === 'words' ? wordIndex++ : index

        return (
          <span className={`scroll-reveal__mask ${maskClassName}`} key={`${item}-${index}`}>
            <motion.span
              className={`scroll-reveal__line ${lineClassName}`}
              initial={{ y: shouldReduceMotion ? 0 : '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 115, damping: 20, delay: animationIndex * stagger }
              }
            >
              {item}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
