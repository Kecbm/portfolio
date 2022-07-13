import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <section>
            <div>
              <h1 className="titleAbout"><a name="sobre">SOBRE</a></h1>
              <p className="pAbout"> 
              Olá, Eu sou Klecianny Melo, estudante de desenvolvimento web full stack e embaixadora da turma XP - Trybe, localizada em Garanhuns - Pernambuco. Fui monitora de algoritmos e programação de computadores durante minha graduação em engeharia de alimentos pela UFAPE (Universidade Federal do Agreste de Pernambuco). Também já desenvolvi diversos projetos para a web.
              {' '}
              Sou entusiasta da tecnologia e admiro o poder transformador que o ambiente digital proporciona ao mundo. Sinta-se à vontade para entrar em contato comigo.
              </p>
            </div>
            <div className="skills">
              <h1 className="titleAbout">SKILLS</h1>
              <img alt="C" height="60" width="60" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/c.svg"/>
              <img alt="Java" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <img title="HTML5" alt="HTML" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
              <img title="CSS3" alt="CSS" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
              <img title="JavaScript" alt="JavaScript" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
              <img title="React" alt="React" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
              <img title="Redux" alt="redux" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
              <img title="Jest" alt="Jest" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" />
              <img src="https://testing-library.com/img/logo-large.png" alt="testing-library" height="60" width="60"/>
              <img alt="Docker" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" height="60" width="60"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" height="60" width="60"/>
              <img alt="TypeScript.js" height="60" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb" height="60" width="60"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" height="60" width="60"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt="mocha" height="60" width="60"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="seuelize" height="60" width="60" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" height="60" width="60"/>
              <img alt="vercel" height="60" width="60" src="https://www.svgrepo.com/show/327408/logo-vercel.svg" />
              <img alt="heroku" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" height="60" width="60" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" height="60" width="60" />
              <img alt="terminal" height="60" width="60" src="https://cdn.svgporn.com/logos/terminal.svg" />
              <img alt="npm" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="eslint" height="60" width="60" />
              <img title="Vscode" alt="Vscode" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" height="60" width="60" />
              <img title="GitHub" alt="GitHub" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
