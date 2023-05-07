import style from './hero.module.scss';
import React from 'react';
import { BtnLink } from '../BtnLink/BtnLink';

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.inner}>
        <h1 className={style.title}>The Sky Is The Limit</h1>
        <p className={style.text}>
          We provide world class financial assistance
        </p>
        <BtnLink />
      </div>
    </section>
  );
};
