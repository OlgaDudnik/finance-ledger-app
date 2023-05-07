import logo from '../../images/sprite.svg';
import style from './logo.module.scss';

export const Logo = () => {
  return (
    <div className={style.logo}>
      <svg width="40" height="35">
        <use href={`${logo}#logo`}></use>
      </svg>
      <span>
        Finance <span className={style.text}>Ledger</span>
      </span>
    </div>
  );
};
