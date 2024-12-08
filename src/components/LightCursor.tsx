import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LightCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: mousePosition.y,
        left: mousePosition.x,
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // glowing light effect
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    />
  )
}

export default LightCursor
