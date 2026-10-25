import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const pointerQuery = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export default function MouseSpotlight() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const springX = useSpring(x, { stiffness: 75, damping: 28, mass: 0.8 })
  const springY = useSpring(y, { stiffness: 75, damping: 28, mass: 0.8 })

  useEffect(() => {
    const media = window.matchMedia(pointerQuery)
    const updateEnabled = () => setEnabled(media.matches)

    updateEnabled()
    media.addEventListener('change', updateEnabled)
    return () => media.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const updatePosition = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('pointermove', updatePosition, { passive: true })
    return () => window.removeEventListener('pointermove', updatePosition)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="mouse-spotlight"
      aria-hidden="true"
      style={{ x: springX, y: springY }}
    />
  )
}
