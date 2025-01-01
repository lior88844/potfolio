import { FC } from 'react'
import { motion } from 'motion/react'
import styles from '../styles/AnimatedClouds.module.scss'
import cloud1 from '../assets/img/clouds/cloud-1.png'
import cloud2 from '../assets/img/clouds/cloud-2.png'
import cloud3 from '../assets/img/clouds/cloud-3.png'

const clouds = [
  { src: cloud1, speed: 20, delay: 0, scale: 1.5, top: '15%' },
  { src: cloud2, speed: 25, delay: 5, scale: 1.2, top: '35%' },
  { src: cloud3, speed: 15, delay: 2, scale: 1.8, top: '60%' },
]

const AnimatedClouds: FC = () => {
  return (
    <div className={styles.cloudsContainer}>
      {clouds.map((cloud, index) => (
        <motion.img
          key={index}
          src={cloud.src}
          className={styles.cloud}
          style={{
            top: cloud.top,
            transform: `scale(${cloud.scale})`,
          }}
          animate={{
            x: ['-100%', '100vw'],
          }}
          transition={{
            duration: cloud.speed,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedClouds
