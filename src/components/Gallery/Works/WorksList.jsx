import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './WorksList.module.css';
import WorkItem from './WorkItem'

function WorksList({projects}) {
  const [displayedProjects, setDisplayedProjects] = useState(6);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [displayedProjects])

  const scrollHandler = ({target}) => {
    if (
      target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100
      &&
      displayedProjects <= projects.length
    ) setDisplayedProjects(displayedProjects + 3);
    if (displayedProjects >= projects.length) document.removeEventListener('scroll', scrollHandler);
  }

  return (
    <section className={s.works}>
      <h2 className="visually-hidden">Галерея</h2>
      <ul className={s.work_list}>
        {projects
          .slice(0, displayedProjects)
          .map(project => <WorkItem project={project} key={project.id} />)
        }
      </ul>
    </section>
  )
}

WorksList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
}

export default WorksList
