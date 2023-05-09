import React, { Component } from 'react';
import secondAvatar from '../assets/Avatar2.png';
import '../css/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <section>
          <div>
            <h1 className="titleAbout"><a name="sobre">SOBRE</a></h1>
            <p className="text-about"> 
            Olá, Eu sou Klecianny Melo, tenho 27 anos e moro em Garanhuns, Pernambuco. Sou paixonada por tecnologia e acredito no poder da educação para transformar vidas. Além disso, pratico ciclismo e crossfit para me manter saudável, gosto de ler livros de diversas categorias e jogar videogame. Participo ativamente da Bolha Dev no Twitter, uma comunidade de desenvolvedores que compartilha conhecimentos e experiências sobre o universo tecnológico.
            </p>
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
            <img title="Linux" alt="Linux" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
            <img title="Debian" alt="Debian" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" />
            <img title="Terminal" alt="Terminal" src="https://cdn.svgporn.com/logos/terminal.svg" />
            <img title="Git" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <img title="GitHub" alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <img title="NPM" alt="NPM" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            <img title="Eslint" alt="Eslint" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" />
            <img title="Vscode" alt="Vscode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <img title="Vercel" alt="Vercel" src="https://www.svgrepo.com/show/327408/logo-vercel.svg" />
            <img title="Heroku" alt="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" />
            <img title="Trello" alt="Trello" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
            <img title="Jest" alt="Jest" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" />
            <img title="Docker" alt="Docker" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" />
            <img title="Pytest" alt="Pytest" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" />
            <img title="React" alt="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
            <img title="Redux" alt="Redux" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
            <img title="React Testing Library" alt="React Testing Library" src="https://testing-library.com/img/logo-large.png" />
            <img title="Node.JS" alt="Node.JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <img title="Express" alt="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <img title="MySQL" alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <img title="MongoDB" alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <img title="Mocha" alt="Mocha" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />
            <img title="Sequelize" alt="Sequelize" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
          </div>
          <div className="list-about">
          <h1 className="titleAbout">Atuação Profissional</h1>
          <ul className="text-about">
            <li>⚡ <span className="text-bold">Desenvolvedora PHP Full Stack</span> - BR24 (05/2023)</li>
            <li>🏦 <span className="text-bold">Software Engineer 1</span> - XP Inc. (09/2022 - 03/2023)</li>
            <li>🎷 <span className="text-bold">Saxofonista na Orquestra Manoel Rabelo</span> - Prefeitura Municipal de Garanhuns (01/2017 - 12/2020)</li>
          </ul>
          </div>
          <div className="list-about">
          <h1 className="titleAbout">Formação Acadêmica</h1>
          <ul className="text-about">
            <li>🖥 <span className="text-bold">Desenvolvimento Web Full Stack</span> - Trybe (10/2021 - 12/2022)</li>
            <li>👩🏽‍🔬 <span className="text-bold">Engenharia de Alimentos</span> - Universidade Federal do Agreste de Pernambuco (01/2014 - 05/2021)</li>
          </ul>
          </div>
          <img alt="Avatar" src={secondAvatar}  id="avatar-home" />
        </section>
      </div>
    );
  }
}

export default About;
