import { FC, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'
import logoDay from '../assets/img/logo.png'
import logoNight from '../assets/img/logo-night.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const Navbar: FC = () => {
  const navigate = useNavigate()
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }

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
            style={{ height: '3.75rem' }}
            src={isDarkMode ? logoNight : logoDay}
            alt="Logo"
            onClick={() => handleNavigation('/')}
          />
        </div>

        {/* Hamburger Menu Button */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => handleNavigation('/about')}
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
              onClick={() => handleNavigation('/projects')}
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
              onClick={() => handleNavigation('/contact')}
            >
              <div className={styles.navLinkContent}>
                <motion.h1>The Swamp</motion.h1>
                <span className={styles.subLabel}>contact me</span>
              </div>
            </motion.button>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className={styles.mobileNavLinks}>
                <li>
                  <button onClick={() => handleNavigation('/about')}>
                    <h1>The Summit</h1>
                    <span>my path</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/projects')}>
                    <h1>The Meadow</h1>
                    <span>my projects</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/contact')}>
                    <h1>The Swamp</h1>
                    <span>contact me</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
