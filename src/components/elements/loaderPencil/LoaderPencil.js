import React from 'react';
import s from './loader.module.scss';

function LoaderPencil() {
  return (
    <div className={s.pencilWrapper}>
      <div className={s.pencil}>
        <div className={s.pencil__ballPoint}></div>
        <div className={s.pencil__cap}></div>
        <div className={s.pencil__capBase}></div>
        <div className={s.pencil__middle}></div>
        <div className={s.pencil__eraser}></div>
      </div>
      <div className={s.line}></div>
      <div className={s.text}>Идет загрузка... Пожалуйста подождите</div>
    </div>
  );
}

export default LoaderPencil;
