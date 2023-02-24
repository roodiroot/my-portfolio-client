import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import s from './skillItem.module.scss';
import SkillItemPopap from './SkillItemPopap';

function SkillItem({ skill, languageRU }) {
  const [popap, setPopap] = useState(false);
  const showRef = useRef();

  return (
    <li className={s.serviceItem}>
      <div className={classNames(s.serviceItem__logo, skill.icon)}></div>
      <div className={s.serviceItem__title}>{languageRU ? skill.title : skill.titleEn}</div>
      <div className={s.serviceItem__discription}>{languageRU ? skill.text : skill.textEn}</div>
      {languageRU ? (
        <div ref={showRef} onClick={() => setPopap(!popap)} className={s.serviceItem__add}>
          {popap ? 'Закрыть ...' : 'Далее ...'}
        </div>
      ) : (
        <div ref={showRef} onClick={() => setPopap(!popap)} className={s.serviceItem__add}>
          {popap ? 'Close ...' : 'Next ...'}
        </div>
      )}

      <Transition mountOnEnter unmountOnExit in={popap} timeout={500}>
        {(state) => (
          <SkillItemPopap
            classesTransition={state}
            languageRU={languageRU}
            text={skill.text}
            textEn={skill.textEn}
            setPopap={setPopap}
            butRef={showRef.current}
          />
        )}
      </Transition>
    </li>
  );
}

export default SkillItem;
