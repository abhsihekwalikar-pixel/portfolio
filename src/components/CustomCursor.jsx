import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const pointerQuery = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 38, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 500, damping: 38, mass: 0.35 })
  const ringScale = useSpring(1, { stiffness: 260, damping: 22 })
  const ringOpacity = useSpring(0.62, { stiffness: 260, damping: 24 })

  useEffect(() => {
    const media = window.matchMedia(pointerQuery)
    const updateEnabled = () => setEnabled(media.matches)

    updateEnabled()
    media.addEventListener('change', updateEnabled)
    return () => media.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('has-custom-cursor')
      return undefined
    }

    document.body.classList.add('has-custom-cursor')

    const updatePointer = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
      const target = event.target instanceof Element
        ? event.target.closest('a, button, [role="button"], [data-cursor="hover"], .team-card')
        : null
      setHovered(Boolean(target))
    }

    const handlePointerLeave = () => {
      setVisible(false)
    }

    window.addEventListener('pointermove', updatePointer)
    document.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', updatePointer)
      document.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [enabled, x, y])

  useEffect(() => {
    ringScale.set(hovered ? 1.7 : 1)
    ringOpacity.set(hovered ? 0.9 : 0.62)
  }, [hovered, ringOpacity, ringScale])

  if (!enabled) return null

  return (
    <motion.div
      className="custom-cursor"
      aria-hidden="true"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      <motion.span
        className="custom-cursor__ring"
        style={{ x: springX, y: springY, scale: ringScale, opacity: ringOpacity }}
      />
      <motion.span
        className="custom-cursor__dot"
        style={{ x, y }}
      />
    </motion.div>
  )
}
