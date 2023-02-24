import React from 'react';
import SvgItem from '../svgComponent/SvgItem';
import s from './socialBlock.module.scss';

function SocialBlock({ sociallArray }) {
  return (
    <ul className={s.socialBlock}>
      {sociallArray.map((el, i) => (
        <li key={`${el.link}_${i}`} className={s.socialBlock__link}>
          <a href={el.link} target="blank">
            <SvgItem keys={el.symbol} fill="#fff" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialBlock;
