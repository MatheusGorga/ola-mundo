import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <Link className={styles.links} to='/'>
          Inicio
        </Link>
        <Link className={styles.links} to='/sobremim'>
          Sobre Mim
        </Link>
      </nav>
    </header>
  );
}

export default Menu;
