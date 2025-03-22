import { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'
import logoDay from '../assets/img/logo.png'
import logoNight from '../assets/img/logo-night.png'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar: FC = () => {
  const navigate = useNavigate()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <div className={styles.toggleSwitch} onClick={toggleTheme}>
            <motion.div
              className={styles.handle}
              layout
              animate={{
                x: isDarkMode ? 32 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 700,
                damping: 30,
              }}
            >
              {isDarkMode ? (
                <FaMoon className={styles.icon} />
              ) : (
                <FaSun className={styles.icon} />
              )}
            </motion.div>
          </div>
          <img
            style={{ height: '60px' }}
            src={isDarkMode ? logoNight : logoDay}
            alt="Logo"
            onClick={() => navigate('/')}
          />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => navigate('/about')}
            >
              <div className={styles.navLinkContent}>
                <motion.h1>The Summit</motion.h1>
                <span className={styles.subLabel}>my path</span>
              </div>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => navigate('/projects')}
            >
              <div className={styles.navLinkContent}>
                <motion.h1>The Meadow</motion.h1>
                <span className={styles.subLabel}>my projects</span>
              </div>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => navigate('/contact')}
            >
              <div className={styles.navLinkContent}>
                <motion.h1>The Swamp</motion.h1>
                <span className={styles.subLabel}>contact me</span>
              </div>
            </motion.button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
