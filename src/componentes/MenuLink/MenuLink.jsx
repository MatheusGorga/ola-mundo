import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => [
        isActive ? `${styles.linkDestacado} ${styles.link}` : styles.link,
      ]}
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default MenuLink;
