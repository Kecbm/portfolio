import React, { Component } from 'react';
import '../css/Home.css';
import firstAvatar from '../assets/Avatar 1.png';
import hand from '../assets/Hand.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <section id="content-home">
          <h1 className="titleHome"><a name="inicio">OLÁ! <img alt="Hand" src={hand} className="hand-home" />
            <br />
            EU SOU KLECIANNY MELO</a></h1>
            {' '}
            <p className="pHome"> 
              Desenvolvedora Web Full Stack
            </p>
            <a target="_blank" href="https://www.cvkeep.com/cv/7e863938f1cc31f1755d834316835807"><button className="button">CURRICULO</button></a>
          </section>
          <section id="content-avatar">
            <img alt="Avatar" src={firstAvatar} />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
