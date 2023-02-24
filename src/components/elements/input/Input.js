import classNames from 'classnames';
import React from 'react';

import s from './input.module.scss';
function Input({ placeholder, type, id, value, setValue, empty }) {
  placeholder = placeholder || 'задайте "placeholder"';
  type = type || 'text';
  id = id || 'name';
  if (type === 'textarea') {
    return (
      <div htmlFor={id} className={s.form__textarea}>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={id}
          name="message"
          placeholder={placeholder}></textarea>
      </div>
    );
  } else {
    return (
      <label htmlFor={id} className={classNames(s.form__input, empty && s.empty)}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          id={id}
          placeholder={placeholder}></input>
      </label>
    );
  }
}

export default Input;
