import React from 'react';
import '../css/Home.css';
import firstAvatar from '../assets/Avatar 1.png';
import hand from '../assets/Hand.png';
import { useLanguage } from '../context/LanguageContext';
import Translations from '../locales/Translations';

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className="home">
      <section id="content-home">
        <h1 className="titleHome">{Translations[language].homeTitle} <img alt="Hand" src={hand} className="hand-home" />
        <br />
        {Translations[language].homeTitle_1} <a href="https://github.com/Kecbm" target="_blank" rel="noopener noreferrer"><span id="name-home">KLECIANNY MELO</span></a></h1>
        <img alt="Avatar" src={firstAvatar} id="avatar-home" />
      </section>
    </div>
  );
}

export default Home;
