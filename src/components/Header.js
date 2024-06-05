import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Translation from './Translation';
import '../css/Header.css';

const imgStyle = {
  borderRadius: '60%'
};

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div>{' '}</div>
        <a href="https://github.com/Kecbm" target="_blank" rel="noopener noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/67391952?v=4"
            alt="Minha foto de perfil"
            height="70px"
            style={ imgStyle }
            className="imgHeader"
          />
        </a>
        <a href="https://github.com/Kecbm" target="_blank" rel="noopener noreferrer">
          <h1 className="titleHeader">KLECIANNY MELO</h1>
        </a>
        <nav>
          <Link to="/" className="link-rout">
            <a href="#inicio" className="linkHeader">
              <div className="img-container">
                <img title="Home" alt="Home" src="https://img.icons8.com/ios/50/7a7772/home--v1.png" className="icons-header" />
              </div>
            </a>
          </Link>
          {' '}
          <Link to="/about" className="link-rout">
            <a href="#sobre" className="linkHeader">
              <div className="img-container">
                <img title="Sobre" alt="Sobre" src="https://img.icons8.com/ios/50/7a7772/gender-neutral-user--v1.png" className="icons-header" />
              </div>
            </a>
          </Link>
          {' '}
          <Link to="/projects" className="link-rout">
            <a href="#projetos" className="linkHeader">
              <div className="img-container">
                <img title="Projetos" alt="Projetos" src="https://img.icons8.com/ios/50/7a7772/programming.png" className="icons-header" />
              </div>
            </a>
          </Link>
          {' '}
          <Link to="/articles" className="link-rout">
            <a href="#articles" className="linkHeader">
              <div className="img-container">
                <img title="Articles" alt="Articles" src="https://img.icons8.com/ios/50/7a7772/agreement.png" className="icons-header" />
              </div>
            </a>
          </Link>
          {' '}
          <Link to="/contact" className="link-rout">
            <a href="#contato" className="linkHeader">
              <div className="img-container">
                <img title="Contato" alt="Contato" src="https://img.icons8.com/ios/50/7a7772/contact-card.png" className="icons-header" />
              </div>
            </a>
          </Link>
          {' '}
        </nav>
        <Translation />
        <div>{' '}</div>
      </div>
    );
  }
}

export default Header;
