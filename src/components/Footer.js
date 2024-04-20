import React, { useState, useEffect } from 'react';
import Translations from '../locales/Translations';
import { useLanguage } from '../context/LanguageContext';
import '../css/Footer.css';

const Footer = () => {
  const icons = ['🤠', '🌵', '🐎', '🪗', '🪨', '🫀', '☀️'];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [icons.length]);

  return (
    <footer>
      <h4 id="text-footer">{Translations[language].footerText} 
        {' '}
        {icons.map((icon, index) => (
            <span
              key={index}
              style={{ display: index === currentIconIndex ? "inline-block" : "none" }}
              className={`icon ${index === currentIconIndex ? 'beat-animation' : ''}`}
            >
              {icon}
            </span>
        ))}
        {' '}
        {Translations[language].footerText_1} 
        {' '}
        <a href="https://github.com/Kecbm" target="_blank" rel="noopener noreferrer">
          <span id="name-footer">Klecianny Melo</span>
        </a>
      </h4>
    </footer>
  );
}

export default Footer;