import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import PopapComponent from '../popup/PopapComponent';
function ProjectItem({ languageRU, item }) {
  const [activePopap, setActivePopap] = useState(false);

  return (
    <>
      <div className="media-block__item">
        <div className="media-block__pht">
          <picture>
            <source
              srcSet={`${process.env.REACT_APP_BASE_URL}/logos/${item.logo}.webp`}
              type="image/webp"></source>
            <img src={`${process.env.REACT_APP_BASE_URL}/logos/${item.logo}.png`} alt="фото"></img>
          </picture>
        </div>
        <div className="media-block__dsc-blc">
          <div onClick={() => setActivePopap(true)} className="media-block__title">
            {languageRU ? item?.name?.ru : item?.name?.en}
          </div>
          <div className="media-block__data">
            {languageRU ? item?.dataCreate?.ru : item?.dataCreate?.en}
          </div>
          <div className="media-block__dsc">
            {languageRU ? item?.subtitle?.ru : item?.subtitle?.en}
          </div>
          <div className="media-block__link">
            <a target="blank" href={item.gitLink}>
              github.com
            </a>
          </div>
        </div>
      </div>
      <Transition in={activePopap} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <PopapComponent
            languageRU={languageRU}
            classes={state}
            item={item}
            active={activePopap}
            setActivePopap={setActivePopap}
          />
        )}
      </Transition>
    </>
  );
}

export default ProjectItem;
