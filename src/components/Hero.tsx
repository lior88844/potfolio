import { FC, Suspense } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import styles from '../styles/Hero.module.scss'
import { useTheme } from '../context/ThemeContext'

const AnimatedBackground: FC = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  )
}

const Hero: FC = () => {
  const { isDarkMode } = useTheme()
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <Suspense fallback={null}>
          {isDarkMode && <AnimatedBackground />}
        </Suspense>
      </div>
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
      </div>
    </section>
  )
}

export default Hero
