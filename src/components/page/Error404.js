import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../assets/scss/error.scss';
import Cat from '../elements/cat/Cat';

function Error404() {
  return (
    <div className="error">
      <div className="error__container">
        <NavLink to="/" className="error__back">
          На главную
        </NavLink>
        <Cat />
      </div>
    </div>
  );
}

export default Error404;
