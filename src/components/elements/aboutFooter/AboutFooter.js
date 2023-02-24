import React from 'react';

import Button from '../buttons/Button';
import s from './aboutFooter.module.scss';

function AboutFooter({ languageRU, children, buttonText }) {
  return (
    <div className={s.about__footer}>
      <div className={s.about__containerFooter}>
        <div className={s.about__action}>{children}</div>
        <Button location="/contact" type="stroke">
          {languageRU ? buttonText.ru : buttonText.en}
        </Button>
      </div>
    </div>
  );
}

export default AboutFooter;
