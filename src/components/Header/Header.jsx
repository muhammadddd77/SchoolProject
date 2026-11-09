import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container nav">
        <a className="logo" href="#home" onClick={closeMenu} aria-label="Home">
          <span className="logo-circle">
            <img alt="Герб гимназии" src="images/sssa.jpg" />
          </span>
          <span className="logo-title">
            <b>{t('logo1')}</b>
            <small>{t('logo2')}</small>
          </span>
        </a>

        {/* Desktop & Mobile Navigation Menu */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} id="navMenu">
          <a href="#home" onClick={closeMenu}>{t('bottom_home')}</a>
          <a href="#about" onClick={closeMenu}>{t('nav1')}</a>
          <a href="#director" onClick={closeMenu}>{t('nav2')}</a>
          <a href="#values" onClick={closeMenu}>{t('nav3')}</a>
          <a href="#life" onClick={closeMenu}>{t('nav4')}</a>
          <a href="#instagram" onClick={closeMenu}>{t('nav_insta')}</a>
          <a href="#achievements" onClick={closeMenu}>{t('nav5')}</a>
          <a href="#gallery" onClick={closeMenu}>{t('nav6')}</a>
          <a href="#contacts" onClick={closeMenu}>{t('nav7')}</a>

          {/* Mobile Drawer Actions */}
          <div className="nav-mobile-actions">
            <a
              className="nav-insta-pill full-width"
              href="https://www.instagram.com/gym.asadullo.gulomov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>@gym.asadullo.gulomov</span>
            </a>

            {/* Mobile Theme Toggle Row */}
            <div className="nav-mobile-theme-row">
              <span className="nav-mobile-theme-title">{t('theme_label')}</span>
              <button
                type="button"
                className="mobile-theme-toggle-pill"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? t('theme_light') : t('theme_dark')}
              >
                <span className="mobile-theme-pill-track">
                  <i className="fa-solid fa-moon mobile-theme-icon moon"></i>
                  <i className="fa-solid fa-sun mobile-theme-icon sun"></i>
                  <span className="mobile-theme-thumb"></span>
                </span>
                <span className="theme-status-text">
                  {theme === 'dark' ? t('theme_dark') : t('theme_light')}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          {/* Direct Instagram Header Button */}
          <a
            className="nav-insta-pill"
            href="https://www.instagram.com/gym.asadullo.gulomov/"
            target="_blank"
            rel="noopener noreferrer"
            title="Наш Instagram: @gym.asadullo.gulomov"
          >
            <i className="fa-brands fa-instagram"></i>
            <span>{t('nav_insta_btn')}</span>
          </a>

          {/* 3-Language Segmented Switcher */}
          <div className="language-switcher" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
              onClick={() => setLang('ru')}
              aria-pressed={lang === 'ru'}
              title="Русский"
            >
              RU
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'tj' ? 'active' : ''}`}
              onClick={() => setLang('tj')}
              aria-pressed={lang === 'tj'}
              title="Тоҷикӣ"
            >
              TJ
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button (Dark / Light) */}
          <button
            type="button"
            className="theme-toggle-btn"
            id="themeToggleBtn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme_light') : t('theme_dark')}
            title={theme === 'dark' ? t('theme_light') : t('theme_dark')}
            data-theme-active={theme}
          >
            <span className="theme-icon-track">
              <i className="fa-solid fa-sun theme-icon sun"></i>
              <i className="fa-solid fa-moon theme-icon moon"></i>
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className={`menu-btn ${menuOpen ? 'active' : ''}`}
            id="menuBtn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
