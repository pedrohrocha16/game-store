import logo from '../../assets/logo.svg'
import styles from './NavBar.module.css'


const NavBar = ({onChange}) => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
      <h2>Game Store</h2>
      <input type="text" placeholder='Pesquisar' onChange={onChange}/>
    </nav>
  )
}

export default NavBar