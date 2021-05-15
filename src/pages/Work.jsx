import React from 'react';
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

  return (
    <div>
      <h1>{project.name}</h1>
      <Link to={`/`}>Вернуться в галерею</Link>
      <p>{project.description}</p>
      {project.tours.length > 0 && <VirtualTours tours={project.tours} />}
      {project.videos.length > 0 && <Videos videos={project.videos} />}
      
    </div>
  )
}
