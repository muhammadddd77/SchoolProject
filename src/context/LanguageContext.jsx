import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ru');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('gymnasium-language');
      if (saved && (saved === 'ru' || saved === 'tj' || saved === 'en')) {
        setLang(saved);
      }
    } catch (e) {
      // storage unavailable
    }
  }, []);

  const switchLanguage = (newLang) => {
    if (newLang === 'ru' || newLang === 'tj' || newLang === 'en') {
      setLang(newLang);
      try {
        localStorage.setItem('gymnasium-language', newLang);
      } catch (e) {}
      document.documentElement.lang = newLang === 'tj' ? 'tg' : newLang;
      document.title = translations[newLang]?.doc_title || translations.ru.doc_title;
    }
  };

  const t = (key) => {
    return translations[lang]?.[key] ?? translations.ru[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: switchLanguage, t, translations: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
