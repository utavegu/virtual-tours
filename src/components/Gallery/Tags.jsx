import React from 'react';
import PropTypes from 'prop-types';
import s from './Tags.module.css';

function Tags(props) {
  return (
    <section className={s.tags}>
      <h2 className="visually-hidden">Облако тэгов</h2>
      <ul className={s.tags_cloud}>

        <li>
          <label>
            <input className="visually-hidden" type="checkbox" checked />
            <span>#ТЭГ 1</span>
          </label>
        </li>

        <li>
          <label>
            <input className="visually-hidden" type="checkbox" checked />
            <span>#ТЭГ 2</span>
          </label>
        </li>

        <li>
          <label>
            <input className="visually-hidden" type="checkbox" />
            <span>#ТЭГ 3</span>
          </label>
        </li>

      </ul>
    </section>
  )
}

Tags.propTypes = {

}

export default Tags

