import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import s from './popapSlider.module.scss';
import './slider.scss';

import { EffectCards } from 'swiper';
import PhotoInSlide from './PhotoInSlide';

function PopapSlider({ imgArrey }) {
  return (
    <div className={s.sliderWrapper}>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {imgArrey.map((i) => (
          <SwiperSlide key={i}>
            <PhotoInSlide image={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopapSlider;

{
  /* <picture>
      <source
        srcSet={`http://localhost:3000/galeryPhoto/${imgArrey}.webp`}
        type="image/webp"></source>
      <img src={`http://localhost:3000/galeryPhoto/${imgArrey}.png`} alt="фото"></img>
    </picture> */
}
