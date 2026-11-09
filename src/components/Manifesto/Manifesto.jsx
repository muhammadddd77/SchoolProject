import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Manifesto = () => {
  const { t } = useLanguage();

  return (
    <section className="manifesto section">
      <div className="container manifesto-inner reveal">
        <span className="quote-symbol">“</span>
        <span className="tag">{t('manifesto_tag')}</span>
        <h2 dangerouslySetInnerHTML={{ __html: t('manifesto_h2') }} />
        <div className="manifesto-line"></div>
        <p>{t('manifesto_p')}</p>
      </div>
    </section>
  );
};
