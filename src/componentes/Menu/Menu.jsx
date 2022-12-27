import MenuLink from '../MenuLink/MenuLink';
import styles from './Menu.module.css';

function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to='/'>Inicio</MenuLink>
        <MenuLink to='/sobremim'> Sobre Mim</MenuLink>
      </nav>
    </header>
  );
}

export default Menu;
