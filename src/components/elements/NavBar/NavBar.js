import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import s from './navBar.module.scss';
import SocialBlock from '../socialBlock/SocialBlock';
import LanguageItem from '../languageItem/LanguageItem';
import { sociallArray } from '../../../utils/utils';
import { useSelector } from 'react-redux';

function NavBar({ routes, active, setActive }) {
  const { languageRU } = useSelector((state) => state.lang);
  const { pathname } = useLocation();

  return (
    <div className={classNames(s.menu, active && s.active)}>
      <div className={s.menu__container}>
        <LanguageItem lengEn={languageRU} />
        <div className={s.menu__menuBlock}>
          <ul className={s.menu__list}>
            {languageRU ? (
              <h1 className={s.menu__header}>
                Борисов Максим
                <span>v 2.0.0075</span>
              </h1>
            ) : (
              <h1 className={s.menu__header}>
                Borisov Maxim
                <span>v 2.0.031</span>
              </h1>
            )}

            {routes?.map((rout, i) => (
              <NavLink key={`${i}_${rout.path}`} to={rout.path} onClick={() => setActive(false)}>
                <li className={classNames(s.menu__link, rout.path === pathname && s.active)}>
                  {languageRU ? rout.name : rout.nameEn}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <SocialBlock sociallArray={sociallArray} />
      </div>
      <div onClick={() => setActive(false)} className={s.menu__blur}></div>
    </div>
  );
}

export default NavBar;
