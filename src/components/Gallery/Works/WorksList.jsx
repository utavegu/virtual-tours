import React from 'react';
import PropTypes from 'prop-types';
import s from './WorksList.module.css';
import WorkItem from './WorkItem'

function WorksList({projects}) {
  return (
    <section className={s.works}>
      <h2 className="visually-hidden">Галерея</h2>
      <ul className={s.work_list}>
        {projects.map(project => <WorkItem project={project} key={project.id} />)}
      </ul>
    </section>
  )
}

WorksList.propTypes = {

}

export default WorksList

