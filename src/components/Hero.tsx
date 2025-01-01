import { FC } from 'react'
import { motion } from 'motion/react'
import styles from '../styles/Hero.module.scss'

const Hero: FC = () => {
  const handleEmailClick = () => {
    window.open(
      'mailto:dearliordoron@gmail.com?subject=Help%20Me%2C%20Obi-Wan%20Lior%2C%20You%E2%80%99re%20My%20Only%20Hope%21',
      '_blank'
    )
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Engineer
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={styles.tagline}
        >
          Your Vision, My Expertise.
        </motion.div>
        <motion.button
          onClick={handleEmailClick}
          className={styles.sendMessageButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
