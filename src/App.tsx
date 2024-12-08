import { FC } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { ThemeProvider } from './context/ThemeContext'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import { useTheme } from './context/ThemeContext'
import styles from './styles/App.module.scss'

const AppContent: FC = () => {
  const location = useLocation()
  const { isDarkMode } = useTheme()

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.dark : styles.light}`}>
      <NavBar />
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/home"
              element={
                <PageTransition>
                  <Hero />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/"
              element={
                <PageTransition>
                  <Hero />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

const App: FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
