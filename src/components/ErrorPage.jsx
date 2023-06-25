import styles from './layout/ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <p className={styles.errorPage}>O servidor falhou em responder, tente recarregar a página.</p>
  )
}

export default ErrorPage