import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-intro reveal">
          <div>
            <span className="tag">{t('about_tag')}</span>
            <h2 dangerouslySetInnerHTML={{ __html: t('about_h2') }} />
          </div>
          <p>{t('about_intro')}</p>
        </div>

        <div className="about-grid">
          <div className="about-number reveal">01</div>
          <div className="about-main reveal">
            <span className="vertical-word">{t('about_word')}</span>
            <h3 dangerouslySetInnerHTML={{ __html: t('about_h3') }} />
            <p>{t('about_p')}</p>
            <a className="text-link" href="#values">
              <span>{t('about_link')}</span>
              <span className="arrow-box">
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="about-side reveal">
            <div className="side-line"></div>
            <p>{t('about_side')}</p>
          </div>
        </div>

        <div className="about-photo reveal">
          <img alt="Гимназия имени Асадулло Гуломова" src="images/ass2.webp" />
        </div>
      </div>
    </section>
  );
};
