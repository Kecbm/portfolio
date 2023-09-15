import React, { Component } from 'react';
import '../css/Home.css';
import firstAvatar from '../assets/Avatar 1.png';
import hand from '../assets/Hand.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section id="content-home">
          <h1 className="titleHome">OLÁ! <img alt="Hand" src={hand} className="hand-home" />
          <br />
          EU SOU <span id="name-home">KLECIANNY MELO</span></h1>
          <img alt="Avatar" src={firstAvatar} id="avatar-home" />
        </section>
      </div>
    );
  }
}

export default Home;
