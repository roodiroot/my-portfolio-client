import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './button.module.scss';

function Button({ type, children, location, onClick }) {
  const navigate = useNavigate();
  location = location || undefined;
  return (
    <div
      onClick={onClick ? onClick : () => navigate(location)}
      className={classNames(
        type === 'stroke' && s.buttonStrokeStyle,
        type === 'bg' && s.buttonBgStyle,
      )}>
      <span>{children}</span>
    </div>
  );
}

export default Button;
