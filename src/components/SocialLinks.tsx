import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import styles from '../styles/SocialLinks.module.scss'

// Initialize Font Awesome library
library.add(faGithub, faLinkedin, faInstagram, faEnvelope)

const SocialLinks: FC = () => {
  const socialLinks = [
    {
      href: 'https://github.com/lior88844',
      icon: faGithub,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/lior-doron-2547b514b/',
      icon: faLinkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/dearliordoron/',
      icon: faInstagram,
      label: 'Instagram',
    },
    {
      href: 'mailto:dearliordoron@gmail.com',
      icon: faEnvelope,
      label: 'Email',
    },
  ]

  return (
    <div className={styles.socialLinks}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={link.label}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
