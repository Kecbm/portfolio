import React, { useState } from 'react';
import projects from '../data/Projects';
import '../css/Projects.css';
import { useLanguage } from '../context/LanguageContext';
import Translations from '../locales/Translations';


function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTag, setSelectedTag] = useState('todos');
  const { language } = useLanguage();

  const imgStyle = {
    height: '100px',
    width: '100px',
    marginTop: '0px',
  };
  
  const handleTagClick = (tags) => {
    setSelectedTag(tags[0]);

    if (tags.includes('todos')) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => 
        project.type && tags.some((tag) => project.type.includes(tag))
      );

      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="projects">
      <h1 className="h1Project">PROJETOS</h1>
      <div id="btn-filter">
        <button
          onClick={() => handleTagClick(['todos'])}
          className={selectedTag === 'todos' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          Todos
        </button>
        <button
          onClick={() => handleTagClick(['design'])}
          className={selectedTag === 'design' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          Design
        </button>
        <button
          onClick={() => handleTagClick(['frontend'])}
          className={selectedTag === 'frontend' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          Frontend
        </button>
        <button
          onClick={() => handleTagClick(['backend'])}
          className={selectedTag === 'backend' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          Backend
        </button>
        <button
          onClick={() => handleTagClick(['full stack'])}
          className={selectedTag === 'full stack' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          Full Stack
        </button>
      </div>
      <div className="project-list">
        {
          filteredProjects.map((project) => (
            <div key={ project[language].title } className={project.isSideProject ? "card side-project-card" : "card all-cards"}>
              <img src={ project.image } alt={ project[language].title } style={ imgStyle }/>
              <h3 className="titleProject">{ project[language].title }</h3>
              <p className="pProject">{ project[language].description }</p>
              {
                project.deploy ? <button className="buttonProject"><a href={ project.deploy } target="_blank" className="linkProject" rel="noreferrer"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/0c0d11/web.png" alt="web"/></a></button> : null
              }
              {
                project.type && project.type.includes('design') ? (
                  <button className="buttonProject"><a href={ project.github } target="_blank" className="linkProject" rel="noreferrer"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/0c0d11/figma.png" alt="figma"/></a></button>
                ) : (
                  <button className="buttonProject"><a href={ project.github } target="_blank" className="linkProject" rel="noreferrer"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/0c0d11/github.png" alt="github"/></a></button>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Projects;

