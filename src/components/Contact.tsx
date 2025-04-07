import { FC } from 'react'
import styles from '../styles/Contact.module.scss'
import { useTheme } from '../context/ThemeContext'
import frogImage from '../assets/img/frog.gif'
import CurvedText from './CurvedText'

const Contact: FC = () => {
  const { isDarkMode } = useTheme()

  return (
    <section
      id="contact"
      className={`${styles.contact} ${isDarkMode ? styles.dark : ''}`}
    >
      <div className={styles.frogContainer}>
        <img src={frogImage} alt="Frog" className={styles.frog} />
      </div>
      <div className={styles.rainbowContainer}>
        <div className={styles.rainbowText}>
          <CurvedText />
        </div>
      </div>
    </section>
  )
}

export default Contact
