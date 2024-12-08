import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaUser,
} from 'react-icons/fa'
import styles from '../styles/About.module.scss'
import meImage from '../assets/img/me.png'
import { useTheme } from '../context/ThemeContext'

const tabs = [
  {
    icon: <FaUser />,
    label: 'About Me',
    content: (
      <>
        <p>
          Hey there! I'm Lior, a passionate developer who loves turning ideas
          into reality 🌟. Whether it’s building apps, debugging code, or
          designing intuitive user interfaces, I’m all in! 💻✨
        </p>
        <br />
        <br />
        <p>
          My journey started with a love for learning. From teaching myself to
          code 🧐, completing an intensive 6-month bootcamp 🏋️‍♂️, to juggling
          freelance projects, I’ve embraced every challenge to grow my skills.
          Let’s create something awesome together! 🤝
        </p>
      </>
    ),
  },
  {
    icon: <FaGraduationCap />,
    label: 'Education',
    content: (
      <>
        <p>
          🧠 Bachelor’s in Psychology: Learned how people think and behave,
          which now helps me build user-friendly applications!
        </p>
        <p>
          💻 Coding Bootcamp Graduate: Completed an intensive 6-month full-stack
          program, mastering front-end and back-end development.
        </p>
        <p>
          📚 Self-Learner Extraordinaire: Whether it's a new programming
          language or the latest tech trend, I dive in and figure it out! 🚀
        </p>
      </>
    ),
  },
  {
    icon: <FaBriefcase />,
    label: 'Experience',
    content: (
      <>
        <p>
          🚀 Head Programmer at Plannie (Movement Group): Managed everything
          from bug fixes to feature development during an exciting acquisition
          phase. Worked closely with clients to deliver customized solutions and
          kept things running smoothly. 💡
        </p>
        <p>
          🧑‍🏫 Statistics Tutor: Simplified complex concepts for students and
          helped them feel confident in their studies.
        </p>
        <p>
          🎨 Freelance Web & Graphic Designer: Designed stunning websites and
          digital assets for clients, blending creativity with functionality.
        </p>
      </>
    ),
  },
]

const About: FC = () => {
  const defaultTab = tabs.find((tab) => tab.label === 'About Me') || tabs[0]
  const [selectedTab, setSelectedTab] = useState(defaultTab)
  const { isDarkMode } = useTheme()
  const handleEmailClick = () => {
    window.open('mailto:dearliordoron@gmail.com', '_blank')
  }

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={`${styles.card} ${
          styles[isDarkMode ? 'darkMode' : 'lightMode']
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.imageContainer}>
          <img src={meImage} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.content}>
          <h2>About Me</h2>
          <nav className={styles.tabsNav}>
            <ul>
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={item === selectedTab ? styles.selected : ''}
                  onClick={() => setSelectedTab(item)}
                >
                  <span className={styles.tabContent}>
                    {item.icon}
                    {item.label}
                  </span>
                  {item === selectedTab && (
                    <motion.div
                      className={styles.underline}
                      layoutId="underline"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.tabPanel}
            >
              {selectedTab.content}
            </motion.div>
          </AnimatePresence>

          <motion.a
            onClick={handleEmailClick}
            className={styles.emailLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className={styles.icon} />
            Come say hi!
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default About
