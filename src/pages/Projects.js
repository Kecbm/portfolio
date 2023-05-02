import React, { Component } from 'react';
import newProjects from '../data/newProjects';
import '../css/Projects.css';

const imgStyle = {
  height: '100px',
  width: '100px',
  marginTop: '0px',
};

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1 className="h1Project"><a name="projetos">PROJETOS</a></h1>
        <div className="project-list">
          {
            newProjects.map((project) => (
              <div key={ project.title } className="card">
                <img src={ project.image } alt={ project.title } style={ imgStyle }/>
                <h3 className="titleProject">{ project.title }</h3>
                <p className="pProject">{ project.description }</p>
                {
                  project.deploy ? <button className="buttonProject"><a href={ project.deploy } target="_blank" className="linkProject">APLICAÇÃO</a></button> : null
                }
                <button className="buttonProject"><a href={ project.github } target="_blank" className="linkProject">REPOSITÓRIO</a></button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Projects;

