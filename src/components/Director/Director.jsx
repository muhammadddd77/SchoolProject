import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Director = () => {
  const { t } = useLanguage();

  return (
    <section className="director section-dark" id="director">
      <div className="director-decoration"></div>
      <div className="container director-grid">
        <div className="director-photo reveal">
          <img alt="Руководство гимназии" src="images/ass6.jpg" />
          <div className="photo-number">02</div>
          <div className="photo-bottom">
            <span>{t('director_photo_label')}</span>
            <strong dangerouslySetInnerHTML={{ __html: t('director_photo_h') }} />
          </div>
        </div>

        <div className="director-text reveal">
          <span className="tag">{t('director_tag')}</span>
          <div className="gold-line"></div>
          <h2 dangerouslySetInnerHTML={{ __html: t('director_h2') }} />
          <p>{t('director_p')}</p>
          <div className="director-sign">
            <span>{t('director_name')}</span>
            <b>{t('director_role')}</b>
            <small>{t('director_note')}</small>
          </div>
        </div>
      </div>
    </section>
  );
};
