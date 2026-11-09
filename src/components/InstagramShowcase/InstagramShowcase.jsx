import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { instagramPosts } from '../../data/stories';

export const InstagramShowcase = ({ onOpenLightbox }) => {
  const { lang, t } = useLanguage();

  const getPostBadge = (post) => {
    if (lang === 'tj') return post.badge;
    if (lang === 'en') return post.badge_en;
    return post.badge_ru;
  };

  const getPostTitle = (post) => {
    if (lang === 'tj') return post.title;
    if (lang === 'en') return post.title_en;
    return post.title_ru;
  };

  const getPostCaption = (post) => {
    if (lang === 'tj') return post.caption;
    if (lang === 'en') return post.caption_en;
    return post.caption_ru;
  };

  return (
    <section className="insta-section section-dark" id="instagram">
      <div className="container">
        {/* Section Intro */}
        <div className="section-intro reveal">
          <div>
            <span className="tag insta-tag">
              <i className="fa-brands fa-instagram"></i> {t('insta_tag')}
            </span>
            <h2 dangerouslySetInnerHTML={{ __html: t('insta_h2') }} />
          </div>
          <p>{t('insta_p')}</p>
        </div>

        {/* Official Profile Banner */}
        <div className="insta-profile-card reveal">
          <div className="insta-profile-left">
            <div className="insta-avatar-wrap">
              <img src="images/sssa.jpg" alt="Логотип Instagram" className="insta-avatar" />
              <span className="insta-story-ring"></span>
            </div>
            <div className="insta-profile-info">
              <div className="insta-handle-row">
                <h3>@gym.asadullo.gulomov</h3>
                <span className="verified-badge" title="Официальная страница">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              </div>
              <p className="insta-profile-name">{t('director_name')}</p>
              <div className="insta-stats-row">
                <span>
                  <strong>1,860+</strong> <small>{t('insta_followers')}</small>
                </span>
                <span className="dot-sep">•</span>
                <span>
                  <strong>250+</strong> <small>{t('insta_posts_count')}</small>
                </span>
                <span className="dot-sep">•</span>
                <span><strong>Душанбе</strong></span>
              </div>
            </div>
          </div>
          <div className="insta-profile-right">
            <a
              href="https://www.instagram.com/gym.asadullo.gulomov/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-btn-gradient"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>{t('insta_follow_btn')}</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="insta-grid">
          {instagramPosts.map((post) => (
            <article key={post.id} className="insta-card reveal">
              <div
                className="insta-card-media"
                onClick={() => onOpenLightbox(post.image, getPostTitle(post), post.url)}
              >
                <img src={post.image} alt={getPostTitle(post)} loading="lazy" />
                <div className="insta-card-overlay">
                  <span className="insta-card-badge">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                  <div className="insta-card-actions">
                    <span className="insta-likes-pill">
                      <i className="fa-solid fa-heart"></i> {post.likes}
                    </span>
                    <span className="insta-preview-btn">
                      <i className="fa-solid fa-eye"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="insta-card-body">
                <div className="insta-card-meta">
                  <span className="insta-post-tag">{getPostBadge(post)}</span>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta-post-link"
                    title="Открыть в Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <h4 className="insta-card-title">{getPostTitle(post)}</h4>
                <p className="insta-card-caption">{getPostCaption(post)}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-inline-link"
                >
                  <span>{t('insta_view_post')}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="insta-section-footer reveal">
          <a
            href="https://www.instagram.com/gym.asadullo.gulomov/"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary insta-large-cta"
          >
            <i className="fa-brands fa-instagram"></i>
            <span>{t('contact_insta_btn')}</span>
            <b><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></b>
          </a>
        </div>
      </div>
    </section>
  );
};
