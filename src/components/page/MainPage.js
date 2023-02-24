import React from 'react';

import '../../assets/scss/main.scss';
import mImg from '../../assets/img/main.png';
import mImgW from '../../assets/img/main.webp';
import Button from '../elements/buttons/Button';
import { useSelector } from 'react-redux';

function MainPage() {
  const { languageRU } = useSelector((state) => state.lang);
  return (
    <div className="main">
      <div className="main__container">
        <picture>
          <source srcSet={mImgW} type="image/webp"></source>
          <img src={mImg} alt="фон"></img>
        </picture>
        <div className="main__content">
          <div className="main__title">
            {languageRU ? 'Добро пожаловать в Портфолио' : 'Welcome to Portfolio'}
          </div>
          <div className="main__suptitle">
            {languageRU
              ? 'Здесь я не много поделюсь тем, чем занимаюсь и что люблю'
              : 'Here I will not share much about what I do and what I love.'}
          </div>
          <div className="main__buttons-block">
            <Button location="/gallery" type="stroke">
              {languageRU ? 'Галерея' : 'Gallery'}
            </Button>
            <Button location="/contact" type="bg">
              {languageRU ? 'Обратная связь' : 'Feedback'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
