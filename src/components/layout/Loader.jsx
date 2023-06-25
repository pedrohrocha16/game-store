import styles from './Loader.module.css'
import loading from '../../assets/loading.svg'

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  )
}

export default Loader