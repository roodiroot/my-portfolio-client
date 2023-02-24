import classNames from 'classnames';
import React, { useState } from 'react';

import { sendMessageTelegramBot } from '../../../http/sendMessageAPI';
import { yaMetric } from '../../../utils/utils';
import Button from '../buttons/Button';
import Input from '../input/Input';
import Salut from '../salut/Salut';
import s from './form.module.scss';

function Form({ languageRU }) {
  const [salut, setSalut] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);

  if (name.length > 0) {
    if (emptyName) {
      setEmptyName(false);
    }
  }
  if (email.length > 0) {
    if (emptyEmail) {
      setEmptyEmail(false);
    }
  }

  const senForm = () => {
    if (name === '') {
      return setEmptyName(true);
    } else if (email === '') {
      return setEmptyEmail(true);
    } else {
      setSalut(true);
      const feedback = `Обратная связь Портфолио!!! %0a
        Имя клиента: ${name}; %0a
        Почта для связи: ${email}; %0a
        Коментарий: ${message}; %0a`;
      sendMessageTelegramBot(feedback);
      yaMetric();
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <>
      <div className={classNames('contact__form', s.form)}>
        <div className={s.form__row}>
          <Input
            empty={emptyName}
            value={name}
            setValue={setName}
            id="name"
            type="text"
            placeholder={languageRU ? 'Имя' : 'Name'}
          />
          <Input
            empty={emptyEmail}
            value={email}
            setValue={setEmail}
            id="email"
            type="text"
            placeholder={languageRU ? 'Элекронная почта' : 'Email'}
          />
        </div>
        <Input
          value={message}
          setValue={setMessage}
          id="email"
          type="textarea"
          placeholder={languageRU ? 'Сообщение' : 'Message'}
        />
        <Button onClick={senForm} type="bg">
          {languageRU ? 'Обратная связь' : 'Feedback'}
        </Button>
      </div>
      {salut && <Salut />}
    </>
  );
}

export default Form;
