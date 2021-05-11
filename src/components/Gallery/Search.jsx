import React from 'react';
import PropTypes from 'prop-types';
import s from './Search.module.css';

function Search(props) {
  return (
    <section className={s.search}>
      <h2 className="visually-hidden">Поиск</h2>
      <form>
        <input name="search" placeholder="Поиск" />
      </form>
    </section>
  )
}

Search.propTypes = {

}

export default Search

