import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import s from './skillItem.module.scss';
import './transitionPopap.scss';

function SkillItemPopap({ text, setPopap, butRef, classesTransition, textEn, languageRU }) {
  const wrapperRef = useRef();

  const clickClose = (e) => {
    const path = e.composedPath();

    if (!path.includes(wrapperRef.current) && !path.includes(butRef)) {
      setPopap(false);
      document.removeEventListener('click', clickClose);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickClose);
  }, []);

  return (
    <div ref={wrapperRef} className={classNames(s.allTextWrapper, classesTransition)}>
      <span>...</span>
      {languageRU ? text : textEn}
    </div>
  );
}

export default SkillItemPopap;
