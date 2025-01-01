import { FC, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Hero.module.scss'
import { useTheme } from '../context/ThemeContext'

const words = ['Engineer', 'Designer', 'Creator']

const Hero: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % words.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleEmailClick = () => {
    window.open(
      'mailto:dearliordoron@gmail.com?subject=Help%20Me%2C%20Obi-Wan%20Lior%2C%20You%E2%80%99re%20My%20Only%20Hope%21',
      '_blank'
    )
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.wordContainer}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={words[currentIndex]}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{
                x: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }, // Smooth cubic-bezier curve
                opacity: { duration: 1.2, ease: 'easeInOut' }, // Smooth fade effect
              }}
            >
              {words[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 2,
            ease: 'easeInOut',
          }}
          className={`${styles.tagline} ${
            isDarkMode ? styles.darkShine : styles.lightShine
          }`}
        >
          Your Vision, My Expertise.
        </motion.div>
        <motion.button
          onClick={handleEmailClick}
          className={styles.sendMessageButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
        >
          Send Message
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
