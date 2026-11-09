import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Values = () => {
  const { t } = useLanguage();

  return (
    <section className="values section" id="values">
      <div className="container">
        <div className="section-intro reveal">
          <div>
            <span className="tag">{t('values_tag')}</span>
            <h2 dangerouslySetInnerHTML={{ __html: t('values_h2') }} />
          </div>
          <p>{t('values_intro')}</p>
        </div>

        <div className="values-grid">
          <article className="value-card reveal">
            <span className="value-index">01</span>
            <div className="value-icon">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <h3>{t('v1')}</h3>
            <p>{t('v1p')}</p>
            <span className="value-arrow">
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </span>
          </article>

          <article className="value-card featured reveal">
            <span className="value-index">02</span>
            <div className="value-icon">
              <i className="fa-solid fa-gem" aria-hidden="true"></i>
            </div>
            <h3>{t('v2')}</h3>
            <p>{t('v2p')}</p>
            <span className="value-arrow">
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </span>
          </article>

          <article className="value-card reveal">
            <span className="value-index">03</span>
            <div className="value-icon">
              <i className="fa-solid fa-compass" aria-hidden="true"></i>
            </div>
            <h3>{t('v3')}</h3>
            <p>{t('v3p')}</p>
            <span className="value-arrow">
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
};
