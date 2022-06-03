import React, { Component } from 'react';
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';
import Twitter from '../assets/Twitter.png';
import Instagram from '../assets/Instagram.png';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
            <h4 className="name"><a name="contato">CONTATO</a></h4>
            {' '}
            <div className="description"> 
              <a href="https://www.linkedin.com/in/kecbm/" target="_blank"><img src={ Linkedin } alt="Meu LinkedIn" height="80" width="80" className="imgFooter" /></a>
              <a href="https://github.com/Kecbm" target="_blank"><img src={ Github } alt="Meu GitHub" height="80" width="80" className="imgFooter" /></a>
              <a href="https://twitter.com/Kecbm" target="_blank"><img alt="Meu Twitter" src={ Twitter } height="80" width="80" className="imgFooter" /></a>
              <a href="https://www.instagram.com/kecbm/" target="_blank"><img alt="Meu Instagram" src={ Instagram } height="80" width="80" className="imgFooter" /></a>
            </div>
            <h4 className="social">Desenvolvido por Klecianny Melo</h4>
        </footer>
      </div>
    );
  }
}

export default Footer;