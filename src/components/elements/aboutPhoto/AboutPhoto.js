import classNames from 'classnames';
import React from 'react';

import s from './aboutPhoto.module.scss';
import m from '../../../assets/img/story/m.png';

function AboutPhoto() {
  return (
    <div className={s.photoStor}>
      <img src={m} alt="фото"></img>
    </div>
  );
}

export default AboutPhoto;
