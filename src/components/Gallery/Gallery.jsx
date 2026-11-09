import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { galleryData } from '../../data/gallery';

export const Gallery = ({ onOpenLightbox }) => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredItems =
    filter === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  const getTitle = (item) => {
    if (lang === 'tj') return item.title_tj;
    if (lang === 'en') return item.title_en;
    return item.title_ru;
  };

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-intro reveal">
          <div>
            <span className="tag">{t('gallery_tag')}</span>
            <h2 dangerouslySetInnerHTML={{ __html: t('gallery_h2') }} />
          </div>
          <p>{t('gallery_p')}</p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters reveal">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t('filter_all')}
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'insta' ? 'active' : ''}`}
            onClick={() => setFilter('insta')}
          >
            {t('filter_insta')}
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'school' ? 'active' : ''}`}
            onClick={() => setFilter('school')}
          >
            {t('filter_school')}
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            {t('filter_events')}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item ${item.isBig ? 'gallery-big' : ''} reveal`}
              onClick={() => onOpenLightbox(item.image, getTitle(item), item.instaUrl)}
            >
              <img alt={getTitle(item)} src={item.image} loading="lazy" />
              <div className="gallery-item-hover">
                {item.instaUrl ? (
                  <span className="gallery-insta-pill">
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </span>
                ) : (
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
