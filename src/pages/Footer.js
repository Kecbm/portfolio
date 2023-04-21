import React, { Component } from 'react';
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';
import Twitter from '../assets/Twitter.png';
import Instagram from '../assets/Instagram.png';
import Gmail from '../assets/Gmail.png';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="contato">
        <div className="description"> 
          <a href="https://www.linkedin.com/in/kecbm/" target="_blank"><img src={ Linkedin } alt="Meu LinkedIn" height="80" width="80" className="imgFooter" /></a>
          <a href="https://github.com/Kecbm" target="_blank"><img src={ Github } alt="Meu GitHub" height="80" width="80" className="imgFooter" /></a>
          <a href="https://twitter.com/Kecbm" target="_blank"><img alt="Meu Twitter" src={ Twitter } height="80" width="80" className="imgFooter" /></a>
          <a href="https://www.instagram.com/kecbm/" target="_blank"><img alt="Meu Instagram" src={ Instagram } height="80" width="80" className="imgFooter" /></a>
          <a href="mailto:kleciannymelo@gmail.com" target="_blank"><img alt="Meu Email" src={ Gmail } height="80" width="80" className="imgFooter" /></a>
        </div>
        {/* <div>
          <h4 className="social">Desenvolvido por Klecianny Melo</h4>
        </div> */}
      </footer>
    );
  }
}

export default Footer;