import { FC } from 'react'
import { TypeAnimation } from 'react-type-animation'
import styles from '../styles/Hero.module.scss'
import { motion } from 'motion/react'

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
        <TypeAnimation
          sequence={['Engineer', 1000, 'Designer', 1000, 'Creator', 1000]}
          wrapper="h1"
          speed={50}
          style={{ display: 'inline-block', marginBottom: '1rem' }}
          repeat={Infinity}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 3 }}
          className={styles.tagline}
        >
          Your Vision, My Expertise.
        </motion.div>
        <motion.button
          onClick={handleEmailClick}
          className={styles.sendMessageButton}
          whileHover={{ scale: 1.4 }}
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
