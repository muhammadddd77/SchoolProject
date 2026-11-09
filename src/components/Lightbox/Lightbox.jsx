import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Lightbox = ({ item, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="lightbox-modal open" role="dialog" aria-modal="true">
      <div className="lightbox-backdrop" onClick={onClose}></div>
      <div className="lightbox-box">
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          &times;
        </button>

        <div className="lightbox-image-container">
          <img src={item.src} alt={item.caption || 'Фото гимназии'} />
        </div>

        <div className="lightbox-footer">
          <p className="lightbox-caption">{item.caption}</p>
          <a
            href={item.instaUrl || 'https://www.instagram.com/gym.asadullo.gulomov/'}
            target="_blank"
            rel="noopener noreferrer"
            className="lightbox-insta-link"
          >
            <i className="fa-brands fa-instagram"></i>
            <span>{t('insta_view_post')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
