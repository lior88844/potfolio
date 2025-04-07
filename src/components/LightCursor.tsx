import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import styles from '../styles/LightCursor.module.scss'

const LightCursor: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsHovering(isClickable)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <motion.div
      className={`${styles.cursor} ${isDarkMode ? styles.moon : styles.sun}`}
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        scale: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      }}
    />
  )
}

export default LightCursor
