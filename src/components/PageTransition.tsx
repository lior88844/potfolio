import { FC, ReactNode, useRef, useEffect } from 'react'
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
  const previousPathRef = useRef(location.pathname)
  const isTransitioningToAbout = useRef(false)
  const isTransitioningFromAbout = useRef(false)

  useEffect(() => {
    isTransitioningToAbout.current = location.pathname === '/about'
    isTransitioningFromAbout.current = previousPathRef.current === '/about'
    previousPathRef.current = location.pathname
  }, [location.pathname])

  const getPageClass = () => {
    if (isHomePage) return styles.homePage
    if (isAboutPage) return styles.aboutPage
    return ''
  }

  const getTransitionVariants = () => {
    // Transitioning to About page
    if (isTransitioningToAbout.current) {
      return {
        initial: {
          opacity: 0,
          y: "100%"
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          scale: 0.6
        }
      }
    }
    // Transitioning from About page
    if (isTransitioningFromAbout.current) {
      return {
        initial: {
          opacity: 0,
          scale: 0.6
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        exit: {
          opacity: 0,
          y: "-100%"
        }
      }
    }
    // Default transitions for other pages
    return {
      initial: {
        opacity: 0,
        scale: 0.6
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: 2
      }
    }
  }

  const variants = getTransitionVariants()

  return (
    <motion.div
      className={`${styles.pageTransition} ${getPageClass()}`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <motion.div
        className={styles.pageContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default PageTransition
