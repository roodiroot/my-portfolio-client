import React from 'react';
import FireWork from './FireWork';

import './salut.scss';

function Salut() {
  const fires = new Array(9).fill(0);

  return (
    <div className="wrap">
      {fires.map((_, i) => (
        <FireWork key={i} />
      ))}
    </div>
  );
}

export default Salut;
