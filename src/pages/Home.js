import React, { Component } from 'react';
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
              Desenvolvedora Web Full Stack
            </p>
            <a target="_blank" href="https://www.cvkeep.com/cv/7e863938f1cc31f1755d834316835807"><button className="button">CURRICULO</button></a>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
