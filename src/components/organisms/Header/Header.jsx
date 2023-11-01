import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.Header}>
      <nav className={styles.HeaderNav}>
        <NavLink to="goit-react-hw-05-movies/">Home</NavLink>
        <NavLink to="goit-react-hw-05-movies/movies">Movies</NavLink>
      </nav>
    </div>
  );
};

export default Header;
