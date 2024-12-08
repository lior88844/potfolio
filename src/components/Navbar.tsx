import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'
import logoDay from '../assets/img/logo.png'
import logoNight from '../assets/img/logo-night.png'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Navbar: FC = () => {
  const navigate = useNavigate()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header>
      <nav className={styles.nav}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
        >
          <img
            style={{ height: '60px' }}
            src={isDarkMode ? logoNight : logoDay}
            alt="Logo"
          />
        </motion.div>
        <ul className={styles.navLinks}>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => navigate('/home')}
            >
              <h1>Home</h1>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => navigate('/about')}
            >
              <h1>About</h1>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => navigate('/projects')}
            >
              <h1>Projects</h1>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.9, rotate: 3 }}
              whileHover={{ scale: 1.2 }}
              className={styles.navLink}
              onClick={() => navigate('/contact')}
            >
              <h1>Contact</h1>
            </motion.button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
