import { FC } from 'react'
import styles from '../styles/Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <div className={styles.social}>
        {/* Add your social media links here */}
      </div>
    </footer>
  )
}

export default Footer
