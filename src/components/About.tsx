import { FC } from 'react'
import { motion } from 'motion/react'
import { FaEnvelope } from 'react-icons/fa'
import styles from '../styles/About.module.scss'
import meImage from '../assets/img/me.png'

const About: FC = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.imageContainer}>
          <img src={meImage} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.content}>
          <h2>About Me</h2>
          <h3>Full Stack Developer & Designer</h3>
          <p>
            Hello! I'm a passionate developer with a keen eye for design and a
            love for creating seamless user experiences. With expertise in
            modern web technologies, I bridge the gap between aesthetic design
            and functional development.
          </p>
          <p>
            My journey in tech has equipped me with a diverse skill set,
            allowing me to tackle complex challenges and transform ideas into
            reality. I believe in writing clean, maintainable code and creating
            intuitive user interfaces that make a difference.
          </p>
          <motion.a
            href="mailto:dearliordoron@gmail.com"
            className={styles.emailLink}
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            whileTap={{ scale: 0.95 }}
            style={{ cursor: 'pointer' }}
          >
            <FaEnvelope className={styles.icon} />
            dearliordoron@gmail.com
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default About
