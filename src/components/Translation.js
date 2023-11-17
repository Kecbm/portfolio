import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../css/Translation.css';

const Translation = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">🇺🇸</option>
        {/* <option value="es">🇪🇸 Espanhol</option> */}
        <option value="pt">🇧🇷</option>
      </select>
    </div>
  );
};

export default Translation;
