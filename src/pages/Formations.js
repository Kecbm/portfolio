import React from 'react';
import formations from '../data/Formations';
import '../css/Formations.css';

function Formations() {
  return (
    <div className='formations'>
      <h1 className='title-formations'>Formações</h1>
      <div id='section-formations'>
        {
            formations.map((formation, index) => (
                <div key={index} className='card-formation'>
                    <img src={formation.url} alt={formation.title} className='img-formation'/>
                    <p className='about-formation'>{formation.informations}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Formations;
