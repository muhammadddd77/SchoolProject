import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const SchoolLife = ({ onOpenLightbox }) => {
  const { t } = useLanguage();

  return (
    <section className="life section" id="life">
      <div className="container">
        <div className="section-intro reveal">
          <div>
            <span className="tag">{t('life_tag')}</span>
            <h2 dangerouslySetInnerHTML={{ __html: t('life_h2') }} />
          </div>
          <p>{t('life_intro')}</p>
        </div>

        <div className="life-layout">
          <div
            className="life-large reveal"
            onClick={() =>
              onOpenLightbox(
                'images/ass7.jpeg',
                'Мероприятия и праздники в гимназии',
                'https://www.instagram.com/gym.asadullo.gulomov/'
              )
            }
          >
            <img alt="Мероприятие гимназии" src="images/ass7.jpeg" loading="lazy" />
            <div className="life-overlay"></div>
            <div className="life-info">
              <span>{t('life1_tag')}</span>
              <h3 dangerouslySetInnerHTML={{ __html: t('life1_h') }} />
            </div>
            <span className="view-pill">
              <i className="fa-solid fa-expand"></i>
            </span>
          </div>

          <div className="life-dark reveal">
            <span className="card-number">{t('life2_tag')}</span>
            <div>
              <span className="tag light">{t('hero_edu')}</span>
              <h3 dangerouslySetInnerHTML={{ __html: t('life2_h') }} />
            </div>
            <a href="#about" className="circle-arrow" aria-label="Подробнее">
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>

          <div className="life-gold reveal">
            <span className="card-number">{t('life3_tag')}</span>
            <div>
              <span className="tag">{t('nav5')}</span>
              <h3 dangerouslySetInnerHTML={{ __html: t('life3_h') }} />
            </div>
            <a href="#achievements" className="circle-arrow" aria-label="Достижения">
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
