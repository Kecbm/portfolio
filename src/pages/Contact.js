import React, { Component } from 'react';
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';
import Twitter from '../assets/Twitter.png';
import Instagram from '../assets/Instagram.png';
import Gmail from '../assets/Gmail.png';
import thirdAvatar from '../assets/Avatar3.png';
import '../css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1 id="title-contact">Contatos</h1>
        <a href="https://www.linkedin.com/in/kecbm/" target="_blank"><img src={ Linkedin } alt="Meu LinkedIn" height="80" width="80" className="img-contact" /></a>
        <a href="https://github.com/Kecbm" target="_blank"><img src={ Github } alt="Meu GitHub" height="80" width="80" className="img-contact" /></a>
        <a href="https://twitter.com/Kecbm" target="_blank"><img alt="Meu Twitter" src={ Twitter } height="80" width="80" className="img-contact" /></a>
        <a href="https://www.instagram.com/kecbm/" target="_blank"><img alt="Meu Instagram" src={ Instagram } height="80" width="80" className="img-contact" /></a>
        <a href="mailto:kleciannymelo@gmail.com" target="_blank"><img alt="Meu Email" src={ Gmail } height="80" width="80" className="img-contact" /></a>
        
        <div id="third-avatar">
            <img alt="Avatar" src={thirdAvatar} />
        </div>
      </div>
    );
  }
}

export default Contact;