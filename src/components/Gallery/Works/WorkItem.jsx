import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './WorkItem.module.css';

function WorkItem({project}) {
  return (
    <li className={s.work_item}>
      <Link to={`/${project.alias}`}>
        <h3>{project.shownTitle && project.name}</h3>
        <picture>
          {/*
          <source media="(min-width: 1400px)" srcSet={project.preview.desktop} />
          <source media="(min-width: 768px)" srcSet={project.preview.desktop} />
          <source media="(min-width: 425px) and (max-width: 768px)" srcSet={project.preview.desktop} />
          */}
          <img src={project.preview.mobile}/>
        </picture>
      </Link>
      <p>{project.tags.map(tag => `#${tag} `)}</p>
    </li>
  )
}

WorkItem.propTypes = {
  project: PropTypes.object,
}

export default WorkItem

