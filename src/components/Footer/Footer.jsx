import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <a className="logo" href="#home" aria-label="На главную">
          <span className="logo-circle">
            <img alt="Герб" src="images/sssa.jpg" />
          </span>
          <span className="logo-title">
            <b>{t('footer1')}</b>
            <small>{t('footer2')}</small>
          </span>
        </a>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/gym.asadullo.gulomov/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            title="Instagram: @gym.asadullo.gulomov"
          >
            <i className="fa-brands fa-instagram"></i>
            <span>@gym.asadullo.gulomov</span>
          </a>
        </div>

        <span>{t('footer_copy')}</span>
      </div>
    </footer>
  );
};
