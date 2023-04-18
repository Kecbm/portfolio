import React, { Component } from 'react';
import '../css/Header.css';

const imgStyle = {
  borderRadius: '60%',
  marginBottom: '20px',
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
          <a href="#inicio" className="linkHeader">INÍCIO</a>
          {' '}
          <a href="#sobre" className="linkHeader">SOBRE</a>
          {' '}
          <a href="#projetos" className="linkHeader">PROJETOS</a>
          {' '}
          <a href="#contato" className="linkHeader">CONTATO</a>
          {' '}
        </nav>
        <div>{' '}</div>
      </div>
    );
  }
}

export default Header;
