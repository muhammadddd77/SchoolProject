import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-lines"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container hero-content">
        <div className="hero-text reveal">
          {/* Status Badge */}
          <div className="hero-admission-badge">
            <span className="live-dot-pulse green"></span>
            <span>{t('badge_admission')}</span>
          </div>

          <div className="mini-label">
            <i></i>
            <span>{t('hero_label')}</span>
          </div>

          <h1 dangerouslySetInnerHTML={{ __html: t('hero_h1') }} />

          <p className="hero-desc">{t('hero_p')}</p>

          <div className="hero-buttons">
            <a className="button primary" href="#about">
              <span>{t('hero_more')}</span>
              <b><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></b>
            </a>

            <a className="button secondary" href="#life">
              <span>{t('hero_life')}</span>
            </a>

            {/* High-visibility direct Instagram button */}
            <a
              className="button instagram"
              href="https://www.instagram.com/gym.asadullo.gulomov/"
              target="_blank"
              rel="noopener noreferrer"
              title="Перейти в официальный Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>{t('hero_insta')}</span>
              <b><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></b>
            </a>
          </div>

          <div className="hero-bottom">
            <span>{t('hero_city')}</span>
            <i></i>
            <span>{t('hero_edu')}</span>
            <i></i>
            <span>{t('hero_dev')}</span>
          </div>
        </div>

        <div className="hero-image-wrap reveal delay">
          <div className="hero-image">
            <img alt="Гимназия имени Асадулло Гуломова" src="images/ass9.webp" />
            <div className="image-gradient"></div>
            <div className="hero-photo-caption">
              <span>{t('photo_label')}</span>
              <strong>{t('photo_text')}</strong>
            </div>
          </div>

          <div className="hero-card">
            <div className="star">
              <i className="fa-solid fa-award" aria-hidden="true"></i>
            </div>
            <div>
              <small>{t('goal_label')}</small>
              <strong>{t('goal_text')}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <span></span>
        {t('scroll')}
      </div>
    </section>
  );
};
