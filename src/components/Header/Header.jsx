import { NavLink } from 'react-router-dom';
import { menuItems } from './MenuItems';
import PropTypes from 'prop-types';
import s from './Header.module.css';

const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

function Header() {
  const elements = menuItems.map(({ id, to, text }) => (
    <li className={s.menu__item} key={id}>
      <NavLink to={to} className={getLinkClassName}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div>
      <header className={s.app}>
        <nav className={s.navList}>{elements}</nav>
      </header>
    </div>
  );
}

Header.propTypes = {
  isActive: PropTypes.bool,
};

export default Header;
