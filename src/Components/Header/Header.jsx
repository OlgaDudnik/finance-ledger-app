import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import style from './header.module.scss';

export const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Navigation />
    </div>
  );
};
