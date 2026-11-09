import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Achievements = () => {
  const { t } = useLanguage();
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const counters = entry.target.querySelectorAll('[data-target]');
          counters.forEach((c) => {
            const targetVal = Number(c.dataset.target);
            if (isNaN(targetVal)) return;
            let current = 0;
            const duration = 1600;
            const stepTime = Math.max(16, duration / targetVal);
            const increment = Math.max(1, Math.floor(targetVal / (duration / stepTime)));
            const timer = setInterval(() => {
              current += increment;
              if (current >= targetVal) {
                c.textContent = targetVal;
                clearInterval(timer);
              } else {
                c.textContent = current;
              }
            }, stepTime);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="numbers section-dark" id="achievements">
      <div className="container">
        <div className="numbers-top reveal">
          <span className="tag">{t('ach_tag')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('ach_h2') }} />
          <p>{t('ach_p')}</p>
        </div>

        <div className="stats" ref={statsRef}>
          <div className="stat reveal">
            <strong data-target="100">100</strong>
            <sup>%</sup>
            <span dangerouslySetInnerHTML={{ __html: t('stat1') }} />
          </div>

          <div className="stat reveal">
            <strong data-target="365">365</strong>
            <span dangerouslySetInnerHTML={{ __html: t('stat2') }} />
          </div>

          <div className="stat reveal">
            <strong data-target="1">1</strong>
            <span dangerouslySetInnerHTML={{ __html: t('stat3') }} />
          </div>

          <div className="stat reveal">
            <strong>
              <i className="fa-solid fa-infinity" aria-hidden="true"></i>
            </strong>
            <span dangerouslySetInnerHTML={{ __html: t('stat4') }} />
          </div>
        </div>
      </div>
    </section>
  );
};
