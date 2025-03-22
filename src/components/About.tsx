import { FC } from 'react'
import Timeline from './Timeline'
import { timelineData } from '../data/timeline'
import styles from '../styles/About.module.scss'

const About: FC = () => {
  return (
    <section id="about" className={styles.about}>
      <Timeline data={timelineData} />
    </section>
  )
}

export default About
