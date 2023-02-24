import React, { useState } from 'react';
import classNames from 'classnames';

import LoaderSlide from './LoaderSlide';
import s from './popapSlider.module.scss';

function PhotoInSlide({ image }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={s.wrapperPhotoModule}>
      <img
        className={classNames(s.img, !loading && s.active)}
        onLoad={(e) => setLoading(false)}
        src={`${process.env.REACT_APP_BASE_URL}/projects/${image}.png`}
        alt="фото"></img>
      {loading && <LoaderSlide />}
    </div>
  );
}

export default PhotoInSlide;
