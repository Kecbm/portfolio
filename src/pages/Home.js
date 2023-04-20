import React, { Component } from 'react';
import '../css/Home.css';
import firstAvatar from '../assets/Avatar 1.png';
import hand from '../assets/Hand.png';
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';
import Twitter from '../assets/Twitter.png';
import Instagram from '../assets/Instagram.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <section id="content-home">
          <h1 className="titleHome"><a name="inicio">OLÁ! <img alt="Hand" src={hand} className="hand-home" />
          <br />
          EU SOU KLECIANNY MELO</a></h1>
          {' '}
          <div className="text-dinamic">
            <p className="static">Desenvolvedora</p>
            <ul className="dinamic">
              <li><span>Front-end</span></li>
              <li><span>Back-end</span></li>
              <li><span>Web Full Stack{' '}</span></li>
            </ul>
          </div>
          <div id="icons-home"> 
              <a href="https://www.linkedin.com/in/kecbm/" target="_blank"><img src={ Linkedin } alt="Meu LinkedIn" height="80" width="80" className="img-home" /></a>
              <a href="https://github.com/Kecbm" target="_blank"><img src={ Github } alt="Meu GitHub" height="80" width="80" className="img-home" /></a>
              <a href="https://twitter.com/Kecbm" target="_blank"><img alt="Meu Twitter" src={ Twitter } height="80" width="80" className="img-home" /></a>
              <a href="https://www.instagram.com/kecbm/" target="_blank"><img alt="Meu Instagram" src={ Instagram } height="80" width="80" className="img-home" /></a>
          </div>
          </section>
          <section id="content-avatar">
            <img alt="Avatar" src={firstAvatar} />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
