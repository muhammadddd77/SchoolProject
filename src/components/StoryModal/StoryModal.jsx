import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const StoryModal = ({ story, onClose }) => {
  const { lang, t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!story) return;
    setProgress(0);

    const startTime = Date.now();
    const duration = 7000; // 7 seconds per story

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        onClose();
      }
    }, 40);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  const getStoryTitle = () => {
    if (lang === 'tj') return story.title;
    if (lang === 'en') return story.title_en;
    return story.title_ru;
  };

  return (
    <div className="story-viewer-modal open" role="dialog" aria-modal="true">
      <div className="story-viewer-backdrop" onClick={onClose}></div>

      <div className="story-viewer-container">
        {/* Progress Bar */}
        <div className="story-progress-bar">
          <div
            className="story-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Top Header */}
        <div className="story-viewer-header">
          <div className="story-author-info">
            <img src="images/sssa.jpg" alt="Асадулло Гуломов" className="story-author-avatar" />
            <div>
              <div className="story-author-row">
                <span className="story-author-name">gym.asadullo.gulomov</span>
                <i className="fa-solid fa-circle-check verified-icon"></i>
              </div>
              <span className="story-time-ago">{story.time}</span>
            </div>
          </div>

          <button
            type="button"
            className="story-close-btn"
            onClick={onClose}
            aria-label="Закрыть"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Media */}
        <div className="story-media-wrapper">
          <img src={story.media} alt={getStoryTitle()} className="story-media-image" />
          <div className="story-media-gradient"></div>
        </div>

        {/* Caption & Actions */}
        <div className="story-viewer-footer">
          <h4 className="story-footer-title">{getStoryTitle()}</h4>
          <p className="story-footer-desc">{story.desc}</p>

          <a
            href={story.instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="story-cta-btn"
          >
            <i className="fa-brands fa-instagram"></i>
            <span>{t('stories_open_insta')}</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
