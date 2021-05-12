import React from 'react';
import PropTypes from 'prop-types';
import s from './WorksList.module.css';

function WorksList(props) {
  return (
    <section className={s.works}>
      <h2 className="visually-hidden">Галерея</h2>
      <ul className={s.work_list}>

        <li>
          <a href="#">
            <h3>Название работы</h3>
            <picture>
              <source media="(min-width: 1400px)" srcSet="http://placehold.it/1600x800" />
              <source media="(min-width: 768px)" srcSet="http://placehold.it/1400x700" />
              <source media="(min-width: 425px) and (max-width: 768px)" srcSet="http://placehold.it/760x400" />
              <img src="http://placehold.it/420" alt="Название работы"/>
            </picture>
          </a>
          <p>#тэг1 #тэг2 #тэг3</p>
        </li>

        <li>
          <a href="#">
            <h3>Название работы</h3>
            <picture>
              <source media="(min-width: 1400px)" srcSet="http://placehold.it/1600x800" />
              <source media="(min-width: 768px)" srcSet="http://placehold.it/1400x700" />
              <source media="(min-width: 425px) and (max-width: 768px)" srcSet="http://placehold.it/760x400" />
              <img src="http://placehold.it/420" alt="Название работы"/>
            </picture>
          </a>
          <p>#тэг1 #тэг2 #тэг3</p>
        </li>

        <li>
          <a href="#">
            <h3>Название работы</h3>
            <picture>
              <source media="(min-width: 1400px)" srcSet="http://placehold.it/1600x800" />
              <source media="(min-width: 768px)" srcSet="http://placehold.it/1400x700" />
              <source media="(min-width: 425px) and (max-width: 768px)" srcSet="http://placehold.it/760x400" />
              <img src="http://placehold.it/420" alt="Название работы"/>
            </picture>
          </a>
          <p>#тэг1 #тэг2 #тэг3</p>
        </li>

      </ul>
    </section>
  )
}

WorksList.propTypes = {

}

export default WorksList

