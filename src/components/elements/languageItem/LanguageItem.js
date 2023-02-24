import React from 'react';
import classNames from 'classnames';

import s from './languageTem.module.scss';
import { useDispatch } from 'react-redux';
import { languageSlice } from '../../../store/reducers/languageSlice';

function LanguageItem({ lengEn }) {
  const dispatch = useDispatch();
  const { changeLeng } = languageSlice.actions;

  return (
    <div className={s.languageBlock}>
      <div className={s.langCheckBox}>
        <div className={s.langCheckBox_legend}>
          <div className={s.langCheckBox_ru}>ru</div>
          <div className={s.langCheckBox_en}>en</div>
        </div>
        <div
          onClick={(e) => dispatch(changeLeng())}
          className={classNames(s.langCheckBox_circle, lengEn && s.active)}></div>
      </div>
    </div>
  );
}

export default LanguageItem;
