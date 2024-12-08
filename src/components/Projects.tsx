import { FC } from 'react'
import styles from '../styles/Projects.module.scss'

const Projects: FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {/* Add your project cards here */}
        <div className={styles.projectCard}>
          <h3>Project 1</h3>
          <p>Project description goes here</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
