import React, { useState } from 'react';
import s from './Work.module.css';
import projectsData from '../data/projects.json';
import WorkContent from '../components/Work/WorkContent';
import Page404 from './Page404'

function findById(projects, id) {
  return projects.find(o => o.id === id);
}

function findByAlias(projects, alias) {
  return projects.find(o => o.alias.toLowerCase() === alias.toLowerCase());
}

export default function Work({ match }) {
  const project = match.params.id ?
    findById(projectsData, Number(match.params.id)) :
    findByAlias(projectsData, match.params.alias);

  return (
    <>
      {project ? <WorkContent project={project} /> : <Page404 />}
    </>
  )
}
