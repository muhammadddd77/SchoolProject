import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const BentoStats = () => {
  const { t } = useLanguage();

  return (
    <section className="bento-stats-section" aria-label="Key Highlights">
      <div className="container">
        <div className="bento-grid">
          {/* Card 1: Reputation */}
          <div className="bento-card bento-accent-gold reveal">
            <div className="bento-icon">
              <i className="fa-solid fa-crown"></i>
            </div>
            <div className="bento-content">
              <h3>{t('bento_rank')}</h3>
              <p>{t('bento_rank_desc')}</p>
            </div>
            <div className="bento-bg-shine"></div>
          </div>

          {/* Card 2: University Admission */}
          <div className="bento-card reveal delay">
            <div className="bento-icon emerald">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="bento-content">
              <h3>{t('bento_graduates')}</h3>
              <p>{t('bento_graduates_desc')}</p>
            </div>
          </div>

          {/* Card 3: 3 Languages */}
          <div className="bento-card reveal">
            <div className="bento-icon blue">
              <i className="fa-solid fa-language"></i>
            </div>
            <div className="bento-content">
              <h3>{t('bento_langs')}</h3>
              <p>{t('bento_langs_desc')}</p>
            </div>
          </div>

          {/* Card 4: Olympiads */}
          <div className="bento-card bento-accent-purple reveal delay">
            <div className="bento-icon purple">
              <i className="fa-solid fa-medal"></i>
            </div>
            <div className="bento-content">
              <h3>{t('bento_olympiad')}</h3>
              <p>{t('bento_olympiad_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
