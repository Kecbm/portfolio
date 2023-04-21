import React, { Component } from 'react';
import '../css/Header.css';
import home from '../assets/Casa.png';
import user from '../assets/Usuário.png';
import project from '../assets/Projeto.png';
import contact from '../assets/Contato.png';
import { Link } from 'react-router-dom';

const imgStyle = {
  borderRadius: '60%',
  marginBottom: '4px',
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
          <Link to="/" className="link-rout"><a href="#inicio" className="linkHeader"><img alt="Home" src={home} className="icons-header" />{' '}INÍCIO</a></Link>
          {' '}
          <Link to="/about" className="link-rout"><a href="#sobre" className="linkHeader"><img alt="Usuário" src={user} className="icons-header" />{' '}SOBRE</a></Link>
          {' '}
          <Link to="/projects" className="link-rout"><a href="#projetos" className="linkHeader"><img alt="Projeto" src={project} className="icons-header" />{' '}PROJETOS</a></Link>
          {' '}
          <a href="#contato" className="linkHeader"><img alt="Contato" src={contact} className="icons-header" />{' '}CONTATO</a>
          {' '}
        </nav>
        <div>{' '}</div>
      </div>
    );
  }
}

export default Header;
