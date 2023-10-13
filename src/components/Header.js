import React, { Component } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const imgStyle = {
  borderRadius: '60%'
};

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div>{' '}</div>
        <img
          src="https://avatars.githubusercontent.com/u/67391952?v=4"
          alt="Minha foto de perfil"
          height="70px"
          style={ imgStyle }
          className="imgHeader"
        />
        <h1 className="titleHeader">KLECIANNY MELO</h1>
        <nav>
          <Link to="/" className="link-rout"><a href="#inicio" className="linkHeader"><img alt="Home" src="https://img.icons8.com/ios/50/7a7772/home--v1.png" className="icons-header" />{' '}INÍCIO</a></Link>
          {' '}
          <Link to="/about" className="link-rout"><a href="#sobre" className="linkHeader"><img alt="Usuário" src="https://img.icons8.com/ios/50/7a7772/gender-neutral-user--v1.png" className="icons-header" />{' '}SOBRE</a></Link>
          {' '}
          <Link to="/projects" className="link-rout"><a href="#projetos" className="linkHeader"><img alt="Projeto" src="https://img.icons8.com/ios/50/7a7772/programming.png" className="icons-header" />{' '}PROJETOS</a></Link>
          {' '}
          <Link to="/formations" className="link-rout"><a href="#formacoes" className="linkHeader"><img alt="Formações" src="https://img.icons8.com/ios/50/7a7772/graduation-cap.png" className="icons-header" />{' '}FORMAÇÕES</a></Link>
          {' '}
          <Link to="/blogposts" className="link-rout"><a href="#blogposts" className="linkHeader"><img alt="Blog Post" src="https://img.icons8.com/ios/50/7a7772/agreement.png" className="icons-header" />{' '}BLOG POSTS</a></Link>
          {' '}
          <Link to="/contact" className="link-rout"><a href="#contato" className="linkHeader"><img alt="Contato" src="https://img.icons8.com/ios/50/7a7772/contact-card.png" className="icons-header" />{' '}CONTATO</a></Link>
          {' '}
        </nav>
        <div>{' '}</div>
      </div>
    );
  }
}

export default Header;
