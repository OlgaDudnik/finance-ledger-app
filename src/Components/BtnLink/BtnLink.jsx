import style from './btnLink.module.scss';
import arrow from '../../images/sprite.svg';

export const BtnLink = () => {
  return (
    <a href="#" className={style.btn}>
      <svg width="9" height="18">
        <use href={`${arrow}#arrow-right`}></use>
      </svg>
      Read More
    </a>
  );
};
