import React from 'react';
import secondAvatar from '../assets/Avatar2.png';
import formations from '../data/Formations';
import '../css/About.css';
import { useLanguage } from '../context/LanguageContext';
import Translations from '../locales/Translations';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="about">
      <section>
        <div>
          <h1 className="titleAbout">{Translations[language].aboutTitle}</h1>
          <p className="text-about">{Translations[language].aboutText}</p>
        </div>
        <div className="skills">
          <h1 className="titleAbout">SKILLS</h1>
          <img title="C" alt="C" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/c.svg" />
          <img title="Java" alt="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          <img title="HTML" alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <img title="CSS" alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          <img title="JavaScript" alt="JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          <img title="TypeScript" alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
          <img title="Python" alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <img title="C Sharp" alt="C Sharp" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" />
          <img title="PHP" alt="PHP" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
          <img title="React" alt="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
          <img title="Redux" alt="Redux" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
          <img title="React Testing Library" alt="React Testing Library" src="https://testing-library.com/img/logo-large.png" />
          <img title="Bootstrap" alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          <img title="Styled Components" alt="Styled Components" src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4" />
          <img title="Tailwindcss" alt="Tailwindcss" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <img title="Figma" alt="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          <img title="Node.JS" alt="Node.JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img title="Laravel" alt="Laravel" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
          <img title="Nest.JS" alt="Nest.JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" /> 
          <img title="MySQL" alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <img title="MongoDB" alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img title="PostgreSQL" alt="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img title="Sequelize" alt="Sequelize" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
          <img title="Prisma" alt="Prisma" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
          <img title="Supabase" alt="Supabase" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />       
          <img title="Express" alt="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          <img title="Jest" alt="Jest" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" />
          <img title="Mocha" alt="Mocha" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />
          <img title="Pytest" alt="Pytest" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" />
          <img title="Swagger" alt="Swagger" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" />
          <img title="Linux" alt="Linux" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
          <img title="Debian" alt="Debian" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" />
          <img title="Terminal" alt="Terminal" src="https://cdn.svgporn.com/logos/terminal.svg" />
          <img title="Git" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <img title="GitHub" alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <img title="NPM" alt="NPM" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
          <img title="Eslint" alt="Eslint" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" />
          <img title="Docker" alt="Docker" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" />
          <img title="Vscode" alt="Vscode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
          <img title="Vercel" alt="Vercel" src="https://www.svgrepo.com/show/327408/logo-vercel.svg" />
          <img title="Heroku" alt="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" />
          <img title="AWS" alt="AWS" src="https://img.icons8.com/color/48/amazon-web-services.png"/>
          <img title="Markdown" alt="Markdown" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" />
          <img title="Trello" alt="Trello" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
          <img title="Notion" alt="Notion" src="https://img.icons8.com/glyph-neue/64/notion.png"/>
        </div>
        <div className="list-about">
        <h1 className="titleAbout">{Translations[language].aboutTitle_1}</h1>
        <ul className="text-about">
          <li>⚡ <span className="text-bold">{Translations[language].about_list}</span> - BR24 (05/2023)</li>
          <li>🏦 <span className="text-bold">Software Engineer 1</span> - XP Inc. (09/2022 - 03/2023)</li>
          <li>🎷 <span className="text-bold">{Translations[language].about_list_1}</span> - {Translations[language].about_list_2} (01/2017 - 12/2020)</li>
        </ul>
        </div>
        <div className="list-about">
        <h1 className="titleAbout">{Translations[language].aboutTitle_2}</h1>
        <ul className="text-about">
          <li>🖥 <span className="text-bold">{Translations[language].about_list_3}</span> - Trybe (10/2021 - 12/2022)</li>
          <li>👩🏽‍🔬 <span className="text-bold">{Translations[language].about_list_4}</span> - {Translations[language].about_list_5} (01/2014 - 05/2021)</li>
        </ul>
        </div>
        <img alt="Avatar" src={secondAvatar}  id="avatar-about" />
      </section>
      <div id='section-formations'>
      {
          formations.map((formation, index) => (
              <div key={index} className='card-formation'>
                  <img src={formation.url} alt={formation[language].title} className='img-formation'/>
                  <div id='card-formation-footer'>
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/c4c2bf/calendar.png" alt="calendar"/>
                    <p className='about-formation'>
                      {formation[language].informations}
                    </p>
                  </div>
              </div>
          ))
      }
      </div>
    </div>
  );
}

export default About;
