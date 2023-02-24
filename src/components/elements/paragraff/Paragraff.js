import React from 'react';

import s from './paragraff.module.scss';

function Paragraph({ children }) {
  return <p className={s.paragraph}>{children}</p>;
}

export default Paragraph;
