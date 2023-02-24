import classNames from 'classnames';
import React from 'react';

import s from './burger.module.scss';

function BurgerMenu({ active, setActive }) {
  return (
    <div onClick={() => setActive(!active)} className={classNames(s.burger, active && s.active)}>
      <span></span>
    </div>
  );
}

export default BurgerMenu;
