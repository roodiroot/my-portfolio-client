import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import s from './popapComponent.module.scss';
import './translateAnimation.scss';
import PopapSlider from '../popapSlider.js/PopapSlider';

function PopapComponent({ languageRU, setActivePopap, item, classes }) {
  const [x, setX] = useState(false);
  const wrapper = useRef();
  let skrollTop = document.documentElement.scrollTop;
  let heightDoc = document.documentElement.clientHeight;
  const st = {
    transform: `translateY(calc(${skrollTop + 40}px))`,
    height: `calc(${heightDoc - 100}px)`,
  };

  const closePopap = () => {
    setActivePopap(false);
    setX(true);
  };
  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  useEffect(() => {
    wrapper.current.addEventListener('wheel', preventScroll);
  }, []);

  return (
    <div ref={wrapper} className={classNames(s.popapWrapper, s.active, `${classes}_popap`)}>
      <div style={st} className={s.popapContent}>
        <div className={s.popapTopLIne}>
          <div className={s.popapHeaderTitle}>{languageRU ? item?.name?.ru : item?.name?.en}</div>
          <div onClick={closePopap} className={classNames(s.popapHeaderExit, x && s.active)}>
            <span></span>
          </div>
        </div>
        <div className={s.popapMediaBlock}>
          <div className={s.projImg}>
            <PopapSlider imgArrey={item.img} />
          </div>
          <div className={s.projContent}>
            <div className={s.projTitle}>{languageRU ? item?.title?.ru : item?.title?.en}</div>
            <div className={s.projData}>
              {languageRU ? item?.dataCreate?.ru : item?.dataCreate?.en}
            </div>
            <div className={s.projDes}>
              {languageRU ? item?.description?.ru : item?.description?.en}
            </div>
            <div className={s.projLink}>
              {item.site && (
                <a href={item.site} target="blank">
                  {languageRU ? 'Перейти на сайт' : 'Go to website'}
                </a>
              )}
            </div>
            {item.gitLink && (
              <div className={s.projGit}>
                <a href={item.gitLink} target="blank">
                  {languageRU ? 'Репозиторий github.com' : 'Repository github.com'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopapComponent;
