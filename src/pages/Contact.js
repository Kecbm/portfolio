import React, { Component } from 'react';
import thirdAvatar from '../assets/Avatar3.png';
import '../css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1 id="title-contact">Contato</h1>
        <a href="https://www.linkedin.com/in/kecbm/" target="_blank"  rel="noreferrer"><img src="https://img.icons8.com/stickers/100/linkedin.png" alt="Meu LinkedIn" height="80" width="80" className="img-contact" /></a>
        <a href="https://github.com/Kecbm" target="_blank"  rel="noreferrer"><img alt="Meu GitHub" src="https://img.icons8.com/stickers/100/github.png" height="80" width="80" className="img-contact" /></a>
        <a href="https://www.figma.com/@kecbm" target="_blank"  rel="noreferrer"><img alt="Meu Figma" src="https://img.icons8.com/stickers/100/figma.png" height="80" width="80" className="img-contact" /></a>
        <a href="https://twitter.com/Kecbm" target="_blank"  rel="noreferrer"><img alt="Meu Twitter" src="https://img.icons8.com/stickers/100/twitter-squared.png" height="80" width="80" className="img-contact" /></a>
        <a href="https://www.instagram.com/kecbm/" target="_blank"  rel="noreferrer"><img alt="Meu Instagram" src="https://img.icons8.com/stickers/100/instagram-new--v1.png" height="80" width="80" className="img-contact" /></a>
        <a href="mailto:kleciannymelo@gmail.com" target="_blank"  rel="noreferrer"><img alt="Meu Email" src="https://img.icons8.com/stickers/100/gmail.png" height="80" width="80" className="img-contact" /></a>
        
        <div id="third-avatar">
            <img alt="Avatar" src={thirdAvatar} />
        </div>
      </div>
    );
  }
}

export default Contact;