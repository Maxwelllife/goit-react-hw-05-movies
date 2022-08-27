import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
  return (
    <div>
      <header className={s.app}>
        <nav className={s.navList}>
          <NavLink className={s.link} to="/">
            HOME
          </NavLink>
          <NavLink className={s.link} to="/movies">
            MOVIES
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
