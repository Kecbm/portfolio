import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Translation = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">🇺🇸 English</option>
        {/* <option value="es">🇪🇸 Espanhol</option> */}
        <option value="pt">🇧🇷 Português</option>
      </select>
    </div>
  );
};

export default Translation;
