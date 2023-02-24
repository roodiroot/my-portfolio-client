import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/scss/contact.scss';
import Form from '../elements/form/Form';

function ContactsPage() {
  const { languageRU } = useSelector((state) => state.lang);

  return (
    <div className="contact">
      <div className="contact__head">
        <div className="contact__container">
          <div className="contact__title title-block">
            {languageRU ? 'Форма обатной связи' : 'Feedback form'}
          </div>
          <div className="contact__suptitle suptitle-block">
            {languageRU
              ? 'Обязательно оставьте свои конткты для связи если вам нужна моя помощь. И даже если не нужны, а вы просто хотите мило поболтать! Буду рад каждому!'
              : 'Be sure to leave your contacts for communication if you need my help. And even if not needed, but you just want to have a nice chat! I will be glad to everyone!'}
          </div>
        </div>
        <Form languageRU={languageRU} />
      </div>
      <div className="contact__footer">
        <span>Copyright Borisov Maxim. Made in Mars.</span>
      </div>
    </div>
  );
}

export default ContactsPage;
