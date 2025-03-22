import { FC } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/MapNavigation.module.scss'

const MapNavigation: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.mapContainer}>
      <svg
        className={styles.trails}
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Summit swirl - starts from the point and swirls towards center */}
        <path
          className={styles.dottedPath}
          d="M 850,150
             C 800,150 750,200 700,250
             S 600,300 550,350
             S 500,400 500,350"
          fill="none"
          strokeDasharray="8,8"
        />
        {/* Meadow swirl - flows from point with natural curves */}
        <path
          className={styles.dottedPath}
          d="M 150,800
             C 200,750 250,700 300,650
             S 400,600 450,550
             S 500,500 480,480"
          fill="none"
          strokeDasharray="8,8"
        />
        {/* Swamp swirl - mysterious curve from point */}
        <path
          className={styles.dottedPath}
          d="M 850,850
             C 800,800 750,750 700,700
             S 600,650 550,600
             S 500,550 520,520"
          fill="none"
          strokeDasharray="8,8"
        />
      </svg>

      <motion.div
        className={`${styles.navigationPoint} ${styles.summit}`}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/about')}
      >
        <div className={styles.point} />
        <h2>The Summit</h2>
        <p>my path</p>
      </motion.div>

      <motion.div
        className={`${styles.navigationPoint} ${styles.meadow}`}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/projects')}
      >
        <div className={styles.point} />
        <h2>The Meadow</h2>
        <p>my projects</p>
      </motion.div>

      <motion.div
        className={`${styles.navigationPoint} ${styles.swamp}`}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/contact')}
      >
        <div className={styles.point} />
        <h2>The Swamp</h2>
        <p>contact me</p>
      </motion.div>
    </div>
  )
}

export default MapNavigation
