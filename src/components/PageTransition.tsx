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
  const isAboutPage = location.pathname === '/about'

  const getPageClass = () => {
    if (isHomePage) return styles.homePage
    if (isAboutPage) return styles.aboutPage
    return ''
  }

  return (
    <motion.div
      className={`${styles.pageTransition} ${getPageClass()}`}
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <motion.div
        className={styles.pageContent}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        exit={{ scale: 2 }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default PageTransition
