import React from 'react';
import PropTypes from 'prop-types';
import s from './Tag.module.css';

function Tag({tag, onChange: handleChange, state}) {
  return (
    <li className={s.tag_item}>
      <label>
        <input
          className="visually-hidden"
          type="checkbox"
          name={tag}
          checked={state[tag]}
          onChange={handleChange}
        />
        <span>#{tag}</span>
      </label>
    </li>
  )
}

Tag.propTypes = {
  tag: PropTypes.string,
  onChange: PropTypes.func,
  state: PropTypes.object,
}

export default Tag
