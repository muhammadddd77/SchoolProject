import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { storiesData } from '../../data/stories';

export const StoriesBar = ({ onOpenStory }) => {
  const { lang, t } = useLanguage();

  const getTag = (story) => {
    if (lang === 'tj') return story.tag;
    if (lang === 'en') return story.tag_en;
    return story.tag_ru;
  };

  return (
    <section className="stories-bar-section" aria-label="Stories & Highlights">
      <div className="container">
        <div className="stories-header">
          <div className="stories-title-wrap">
            <span className="live-dot-pulse"></span>
            <h4>{t('stories_title')}</h4>
          </div>
          <span className="stories-subtitle">{t('stories_subtitle')}</span>
        </div>

        <div className="stories-scroll-container">
          {storiesData.map((story) => (
            <button
              key={story.id}
              type="button"
              className="story-circle-item"
              onClick={() => onOpenStory(story)}
              title={story.title_ru}
            >
              <div className="story-ring-wrap">
                <div className="story-ring-gradient"></div>
                <div className="story-avatar-inner">
                  <img src={story.avatar} alt={story.tag} loading="lazy" />
                </div>
              </div>
              <span className="story-tag-name">{getTag(story)}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
