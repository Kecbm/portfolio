import React, { Component } from 'react';
import '../css/NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div id="not-found">
        <h1>Desculpe, essa página não existe</h1>
        <button>Voltar ao início</button>
      </div>
    );
  }
}

export default NotFound;
