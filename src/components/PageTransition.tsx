import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/PageTransition.module.scss'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname === '/home'

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isHomePage ? 0 : 100 }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing function
      }}
      className={styles.pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
