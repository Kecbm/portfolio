import React, { useState, useEffect } from 'react';
import Translations from '../locales/Translations';
import { useLanguage } from '../context/LanguageContext';
import '../css/Footer.css';

const Footer = () => {
  const icons = ['https://img.icons8.com/emoji/48/cowboy-hat-face.png', 'https://img.icons8.com/emoji/48/cactus-emoji.png', 'https://img.icons8.com/emoji/48/horse-emoji.png', 'https://img.icons8.com/emoji/48/accordion-emoji.png', 'https://img.icons8.com/emoji/48/anatomical-heart.png', 'https://img.icons8.com/emoji/48/sun-emoji.png'];
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
              <img alt="Icon" src={icon} className='icon-footer' />
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