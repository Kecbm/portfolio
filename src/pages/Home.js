import React, { Component } from 'react';
import '../css/Home.css';
import firstAvatar from '../assets/Avatar 1.png';
import hand from '../assets/Hand.png';

class Home extends Component {
  render() {
    return (
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
        </section>
        <section id="content-avatar">
          <img alt="Avatar" src={firstAvatar} id="avatar-home" />
        </section>
      </div>
    );
  }
}

export default Home;
