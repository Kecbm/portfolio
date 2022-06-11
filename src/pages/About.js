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
              Sou intusiasta da tecnologia e admiro o poder transformador que o ambiente digital proporciona ao mundo. Sinta-se à vontade para entrar em contato comigo.
              </p>
            </div>
            <div className="skills">
              <h1 className="titleAbout">SKILLS</h1>
              <img alt="C" height="50" width="50" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/c.svg"/>
              <img alt="Java" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <img title="HTML5" alt="HTML" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
              <img title="CSS3" alt="CSS" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
              <img title="JavaScript" alt="JavaScript" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
              <img title="React" alt="React" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
              <img title="Redux" alt="redux" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
              <img title="Jest" alt="Jest" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" />
              <img src="https://testing-library.com/img/logo-large.png" alt="testing-library" height="50" width="50"/>
              <img alt="Docker" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" height="50" width="50"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" height="50" width="50"/>
              <img alt="TypeScript.js" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" height="50" width="50"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" height="50" width="50"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt="mocha" height="50" width="50"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="seuelize" height="50" width="50" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" height="50" width="50"/>
              <img alt="vercel" height="50" width="50" src="https://www.svgrepo.com/show/327408/logo-vercel.svg" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" height="50" width="50" />
              <img alt="terminal" height="50" width="50" src="https://cdn.svgporn.com/logos/terminal.svg" />
              <img alt="npm" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="eslint" height="50" width="50" />
              <img title="Vscode" alt="Vscode" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" height="50" width="50" />
              <img title="GitHub" alt="GitHub" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;