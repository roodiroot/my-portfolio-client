import React from 'react';
import { useSelector } from 'react-redux';

import { paragraphObj } from '../../utils/utils';
import AboutFooter from '../elements/aboutFooter/AboutFooter';
import AboutPhoto from '../elements/aboutPhoto/AboutPhoto';
import Paragraph from '../elements/paragraff/Paragraff';
import Quote from '../elements/quote/Quote';

function StoryPage() {
  const { languageRU } = useSelector((state) => state.lang);

  return (
    <div className="story">
      <div className="story__head">
        <div className="story__container">
          <div className="title-block">
            {languageRU ? 'Давайте знакомиться' : "let's get acquainted"}
          </div>
          <AboutPhoto />
          <div className="story__textItem">
            {paragraphObj.map((p, i) => (
              <Paragraph key={i}>{p}</Paragraph>
            ))}
            <div className="story__quoteBlock">
              <Quote />
            </div>
          </div>
        </div>
      </div>
      <AboutFooter languageRU={languageRU} buttonText={{ ru: 'Обратная связь', en: 'Feedback' }}>
        {languageRU ? 'Если есть вопрос, напишите!' : 'If you have a question, write!'}
      </AboutFooter>
    </div>
  );
}

export default StoryPage;
