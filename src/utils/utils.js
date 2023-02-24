import { createRef } from 'react';

import AboutPage from '../components/page/AboutPage';
import MainPage from '../components/page/MainPage';
import GalleryPage from '../components/page/GalleryPage';
import ContactsPage from '../components/page/ContactsPage';
import PacmanPage from '../components/page/PacmanPage';
import StoryPage from '../components/page/StoryPage';

export const routes = [
  {
    path: '/',
    name: 'приветствие',
    nameEn: 'greetings',
    element: <MainPage />,
    nodeRef: createRef(),
  },
  // {
  //   path: '/story',
  //   name: 'обо мне',
  //   nameEn: 'about me',
  //   element: <StoryPage />,
  //   nodeRef: createRef(),
  // },
  {
    path: '/about',
    name: 'skill stack',
    nameEn: 'skill stack',
    element: <AboutPage />,
    nodeRef: createRef(),
  },
  {
    path: '/gallery',
    name: 'галерея проектов',
    nameEn: 'portfolio',
    element: <GalleryPage />,
    nodeRef: createRef(),
  },
  {
    path: '/contact',
    name: 'обратная связь',
    nameEn: 'feedback',
    element: <ContactsPage />,
    nodeRef: createRef(),
  },
  // {
  //   path: '/pacman',
  //   name: 'Pacman (Bonus)',
  //   nameEn: 'Pacman (Bonus)',
  //   element: <PacmanPage />,
  //   nodeRef: createRef(),
  // },
];

export const sociallArray = [
  { link: process.env.REACT_APP_BEHANCE_URL, symbol: 'be' },
  { link: process.env.REACT_APP_GITHUB, symbol: 'github' },
  { link: process.env.REACT_APP_INSTA_URL, symbol: 'insta' },
  { link: process.env.REACT_APP_VK_URL, symbol: 'vk' },
  { link: process.env.REACT_APP_TELEGRAM_URL, symbol: 'telegram' },
  { link: process.env.REACT_APP_MAIL_URL, symbol: 'mail', subject: 'Вопрос по сайту' },
];

export const skills = [
  {
    title: 'Web-разработка',
    titleEn: 'web development',
    text: 'Одно из моих любимых наравлений разработка сайтов, приложений, игр. Разработкой и внедрением CRM-систем для бизнеса. Програмирование и изучение новых технологий - это то, что постоянно заставляет двигаться вперед. Искрене верю в то что бизнес не может существовать без всемирной паутины. Это помогает объединять страны народы людей!',
    textEn:
      'One of my favorite directions is the development of websites, applications, games. Development and implementation of CRM-systems for business. Programming and learning new technologies is what keeps moving forward. I sincerely believe that business cannot exist without the World Wide Web. It helps to unite countries, peoples of people!',
    icon: 'icon-window',
  },
  {
    title: 'Дизайн',
    titleEn: 'Design',
    text: 'Так же мне нравится развиться в области дизайна. Я люблю рисовать создавать новые образы, новые сайты которые остаются в сердце. Дизайн не менее важен в создании приложения - ведь это то что в первую очередь бросается в глаза. Я всегда стараюсь внедрять новые инструменты в свои работы. И получать новые знания в этой области.',
    textEn:
      'I also like to develop in the field of design. I love to draw to create new images, new sites that remain in the heart. Design is equally important in creating an application - after all, this is what catches the eye in the first place. I always try to introduce new tools into my work. And gain new knowledge in this area.',
    icon: 'icon-camera',
  },
  {
    title: 'Сервера',
    titleEn: 'Servers',
    text: 'Настройка и ведение серверного обслуживания, администрирование, является не отъемлимой частью любого бизнеса. По этому важно учитывать все ньюансы работы современного серверного програмного обеспечения. Это не менее важно и интересно для меня.',
    textEn:
      'Setting up and maintaining server maintenance, administration, is an integral part of any business. Therefore, it is important to take into account all the nuances of modern server software. This is no less important and interesting for me.',
    icon: 'icon-meh',
  },
  {
    title: 'Маркетинг',
    titleEn: 'Marketing',
    text: 'Реклама - это то что помогает реализовать весь потенциал моей или Ваше работы. Тонкая настрока рекламной компании. Качественное управление - всегда помогают избежать излишних трат. И главное найти верную целевую аудиторию. От грамотно распределенного бюджета и правильно настроенной компании, напрямую зависит доход.',
    textEn:
      'Advertising is what helps to realize the full potential of my or your work. Fine tuning of the advertising company. Quality management - always helps to avoid unnecessary spending. And most importantly, find the right target audience. From a well-distributed budget and a properly configured company, income directly depends.',
    icon: 'icon-cloud',
  },
];

export const yaMetric = () => {
  window.ym(91379049, 'reachGoal', 'sendForm');
};

export const paragraphObj = [
  '“Привет👋” Я Макс. Здесь постараюсь в крадце с тобой познакомиться)). Я много что люблю и чем занимаюсь в жизни, но одно из моих любимых занятий это web разработка. Создание различных web приложений, web портфолио, сайтов, интернет магазинов, мини игр. Вообщем и целом могу сказать что я обажаю код. 😍 Обажаю решать различные математические задачи. По этому постоянно занимаюсь саморазвитием. И изучаю различные библиотеки.',
  'По мимо кода я так же люблю классный дизайн. 🎨 Ведь это первое, что видит человек когда переходит на мой ресурс. Многие пренебригают качественным дизайном, и пытаются стандартезировать и упростить все решения связанные с этим. Я же полный противник этого и творчество в целом не отъемлимая часть моей жизнии.',
  'Обожаю горы🏔️, обожаю snowboard🏂, люблю классную танцевальную музыку 🕺 ! И если тебе нужна моя помощь в дизайне, или разработке приложений, или ты просто хочешь круто покататься с горки, оставляй свои контакты. Свяжемся и все обсудим)) Всех благ 🙌',
];
