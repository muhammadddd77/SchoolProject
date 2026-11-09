import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const BottomNav = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'instagram', 'gallery', 'contacts'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="mobile-bottom-dock" aria-label="Mobile Navigation">
      <div className="dock-inner">
        <a
          href="#home"
          className={`dock-item ${activeSection === 'home' ? 'active' : ''}`}
        >
          <div className="dock-icon">
            <i className="fa-solid fa-house"></i>
          </div>
          <span>{t('bottom_home')}</span>
        </a>

        <a
          href="#about"
          className={`dock-item ${activeSection === 'about' ? 'active' : ''}`}
        >
          <div className="dock-icon">
            <i className="fa-solid fa-school"></i>
          </div>
          <span>{t('bottom_about')}</span>
        </a>

        <a
          href="https://www.instagram.com/gym.asadullo.gulomov/"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item dock-item-insta"
        >
          <div className="dock-icon insta-badge">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <span>Instagram</span>
        </a>

        <a
          href="#gallery"
          className={`dock-item ${activeSection === 'gallery' ? 'active' : ''}`}
        >
          <div className="dock-icon">
            <i className="fa-solid fa-images"></i>
          </div>
          <span>{t('bottom_gallery')}</span>
        </a>

        <a
          href="#contacts"
          className={`dock-item ${activeSection === 'contacts' ? 'active' : ''}`}
        >
          <div className="dock-icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <span>{t('bottom_contacts')}</span>
        </a>
      </div>
    </nav>
  );
};
