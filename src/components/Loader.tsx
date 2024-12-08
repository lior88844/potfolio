import { FC } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import styles from '../styles/Loader.module.scss'

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
      <p>Loading...</p>
    </div>
  )
}

export default Loader
