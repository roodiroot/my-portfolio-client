import React from 'react';
import { useSelector } from 'react-redux';

import '../../assets/scss/about.scss';
import { skills } from '../../utils/utils';
import AboutFooter from '../elements/aboutFooter/AboutFooter';
import SkillItem from '../elements/skillItem/SkillItem';

function AboutPage() {
  const { languageRU } = useSelector((state) => state.lang);

  return (
    <div className="about">
      <div className="about__head">
        <div className="about__container">
          <div className="about__title title-block">
            {languageRU ? 'Немного о том что мне нравиться' : 'A little about what I like'}
          </div>
          <div className="about__suptitle suptitle-block">
            {languageRU
              ? 'Здесь я описал то, чем люблю заниматься, в чем мне нравиться развиваться. То чему я посвщаю много времени и в чем действительно преуспел'
              : 'Here I described what I like to do, what I like to develop in. What I dedicate a lot of time to and what I really succeed in'}
          </div>
          <ul className="about__services-block">
            {skills.map((s, index) => (
              <SkillItem key={s.text} skill={s} languageRU={languageRU} />
            ))}
          </ul>
        </div>
      </div>
      <AboutFooter languageRU={languageRU} buttonText={{ ru: 'Консультация', en: 'Consultation' }}>
        {languageRU ? 'У Вас остались вопросы ?' : 'Do you have any questions?'}
      </AboutFooter>
    </div>
  );
}

export default AboutPage;
