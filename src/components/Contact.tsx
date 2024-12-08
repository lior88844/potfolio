import { FC } from 'react'
import styles from '../styles/Contact.module.scss'

const Contact: FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
