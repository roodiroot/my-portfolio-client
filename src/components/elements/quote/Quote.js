import React from 'react';

import s from './quote.module.scss';

function Quote() {
  return (
    <div className={s.quote}>
      Я не люблю фатального исхода <br />
      От жизни никогда не устаю <br />
      Я не люблю любое время года <br />
      Когда веселых песен не пою <br />
      <span>Владимир Высоцкий</span>
    </div>
  );
}

export default Quote;
