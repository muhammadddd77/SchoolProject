import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Contacts = () => {
  const { t } = useLanguage();

  return (
    <section className="contact section" id="contacts">
      <div className="container contact-box reveal">
        <div className="contact-title">
          <span className="tag">{t('contact_tag')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('contact_h2') }} />
        </div>

        <div className="contact-items">
          {/* Main Instagram Interactive Contact Card */}
          <a
            className="contact-insta-card"
            href="https://www.instagram.com/gym.asadullo.gulomov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-insta-icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="contact-insta-details">
              <span>{t('contact_insta_label')}</span>
              <strong>
                @gym.asadullo.gulomov
                <b><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></b>
              </strong>
              <small>{t('contact_insta_desc')}</small>
            </div>
          </a>

          <div>
            <span>{t('contact_city')}</span>
            <strong>{t('contact_place')}</strong>
          </div>

          <div>
            <span>{t('contact_page')}</span>
            <strong>{t('contact_name')}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
