import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Work.module.css';
import projectsData from '../data/projects.json';
import Videos from '../components/Work/Videos/Videos';
import VirtualTours from '../components/Work/VirtualTours/VirtualTours';

function findById(projects, id) {
  return projects.find(o => o.id === id);
}

function findByAlias(projects, alias) {
  return projects.find(o => o.alias.toLowerCase() === alias.toLowerCase());
}

export default function Work({ match }) {
  const projects = projectsData;
  const project = match.params.id ?
    findById(projects, Number(match.params.id)) :
    findByAlias(projects, match.params.alias);

  const initialContent = project.tours.length > 0 ? "tours" : "videos"

  const [displayedContent, setDisplayedContent] = useState(initialContent);

  const handleChangeInput = ({target}) => {
    setDisplayedContent(target.id);
  }

  const changeDisplay = () => {
    switch (displayedContent) {
      case "tours":
        return (<VirtualTours tours={project.tours} />);
      case "videos":
        return (<Videos videos={project.videos} />);
      default:
        console.log("Ошибка входных данных!");
    }
  }

  return (
    <section className={s.work_page}>
      <h1>{project.name}</h1>

      <div className={s.container}>

        <p className={s.description}>{project.description}</p>

        

        {changeDisplay()}

        <Link to={`/`} className={s.back} title="Вернуться в галерею"> 
          <span className="visually-hidden">Вернуться в галерею</span>
        </Link>
          
        <ul>
          {/* В отдельный компонент */}
          {project.tours.length > 0 && <li>
            <label>
              <input
                className="visually-hidden"
                type="radio"
                name="displayedContent"
                id="tours"
                checked={displayedContent === "tours"}
                onChange={handleChangeInput}
              />
              <span className={`${s.custom_radio} ${s.tour}`} title="Виртуальные туры"></span>
              <span className="visually-hidden">Виртуальные туры</span>
            </label>
          </li>}
          {project.videos.length > 0 && <li>
            <label>
              <input
                className="visually-hidden"
                type="radio"
                name="displayedContent"
                id="videos"
                checked={displayedContent === "videos"}
                onChange={handleChangeInput}
              />
              <span className={`${s.custom_radio} ${s.video}`} title="3D-видео"></span>
              <span className="visually-hidden">3D-видео</span>
            </label>
          </li>}
          {/*
          ГАЛЕРЕЯ ФОТО
          {project.videos.length > 0 && <li>
            <input
              type="radio"
              name="displayedContent"
              id="videos"
              checked={displayedContent === "videos"}
              onChange={handleChangeInput}
            />
            <label htmlFor="videos">3D-видео</label>
          </li>}
          */}
        </ul>
          
      </div>
      
    </section>
  )
}
