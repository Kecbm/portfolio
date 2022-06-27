import React, { Component } from 'react';
import Seta from '../assets/Seta.png';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <section>
            <h1 className="titleHome"><a name="inicio">OLÁ, EU SOU KLECIANNY MELO</a></h1>
            {' '}
            <p className="pHome"> 
              Estudante de desenvolvimento web full stack e embaixadora da Turma XP - Trybe
            </p>
            <a target="_blank" href="https://www.cvkeep.com/cv/7e863938f1cc31f1755d834316835807"><button className="button">CURRICULO</button></a>
            <img src={ Seta } className="seta" alt="seta" />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
