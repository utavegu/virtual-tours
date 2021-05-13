import React from 'react';
import PropTypes from 'prop-types';
import s from './WorkItem.module.css';

function WorkItem({project}) {
  return (
    <li className={s.work_item}>
      <a href="#">
        <h3>{project.name}</h3>
        <picture>
          <source media="(min-width: 1400px)" srcSet="http://placehold.it/1600x800" />
          <source media="(min-width: 768px)" srcSet="http://placehold.it/1400x700" />
          <source media="(min-width: 425px) and (max-width: 768px)" srcSet="http://placehold.it/760x400" />
          <img src="http://placehold.it/420" alt="Название работы"/>
        </picture>
      </a>
      <p>{project.tags.map(tag => `#${tag} `)}</p>
    </li>
  )
}

WorkItem.propTypes = {

}

export default WorkItem

