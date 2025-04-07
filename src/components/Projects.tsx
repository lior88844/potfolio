import { FC, useRef } from 'react'
import styles from '../styles/Projects.module.scss'
import { useTheme } from '../context/ThemeContext'
import cow from '../assets/img/cow.png'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

const Projects: FC = () => {
  const { isDarkMode } = useTheme()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleCowClick = (githubUrl: string) => {
    // Play moo sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Reset the audio to the beginning
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error)
      })
    }

    // Open GitHub URL in a new tab
    window.open(githubUrl, '_blank')
  }

  return (
    <section
      id="projects"
      className={`${styles.projects} ${isDarkMode ? styles.dark : ''}`}
    >
      <h2>My Projects</h2>
      <div className={styles.cowContainer}>
        {projects.map((project, index) => {
          // Determine if cow should move left-to-right or right-to-left
          const isLeftToRight = index % 2 === 0

          // Calculate fixed starting position
          const startPosition = isLeftToRight ? '-10%' : '110%'

          // Calculate vertical position with fixed spacing
          const rowIndex = index % 3 // Use 3 rows
          const verticalSpacing = 150 // Fixed vertical spacing
          const bottomPosition = `${rowIndex * verticalSpacing + 100}px`

          // Calculate fixed horizontal offset for each cow in the same row
          const horizontalOffset = Math.floor(index / 3) * 20 // 20% offset for each cow in the same row
          const finalStartPosition = isLeftToRight
            ? `calc(${startPosition} + ${horizontalOffset}%)`
            : `calc(${startPosition} - ${horizontalOffset}%)`

          return (
            <motion.div
              key={project.id}
              className={`${styles.cowWrapper} ${
                isLeftToRight ? styles.leftToRight : styles.rightToLeft
              }`}
              style={{
                bottom: bottomPosition,
                left: finalStartPosition,
                animationDelay: `${(index % 3) * 2}s`,
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleCowClick(project.githubUrl)}
            >
              <div className={styles.projectName}>{project.name}</div>
              <img
                src={cow}
                alt={`${project.name} cow`}
                className={styles.cow}
                style={!isLeftToRight ? { transform: 'scaleX(-1)' } : undefined}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Audio element for moo sound */}
      <audio ref={audioRef} preload="auto">
        <source src="/audio/moo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  )
}

export default Projects
