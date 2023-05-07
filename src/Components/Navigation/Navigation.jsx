import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';

const setActive = ({ isActive }) =>
  isActive ? style.ActiveNavLink : style.NavLink;

export const Navigation = () => {
  return (
    <nav className={style.navList}>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About
      </NavLink>
      <NavLink to="/cases" className={setActive}>
        Cases
      </NavLink>
      <NavLink to="/blog" className={setActive}>
        Blog
      </NavLink>
      <NavLink to="/contact" className={setActive}>
        Contact
      </NavLink>
    </nav>
  );
};
