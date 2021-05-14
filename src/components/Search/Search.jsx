import React from 'react';
import PropTypes from 'prop-types';
import s from './Search.module.css';

function Search({queryString, setSearchQuery}) {
  const handleQuery = ({target}) => {
    setSearchQuery(target.value);
  }
  return (
    <section className={s.search}>
      <h2 className="visually-hidden">Поиск</h2>
      <form onSubmit={evt => evt.preventDefault()}>
        <label htmlFor="search-products" className="visually-hidden">Поиск</label>
        <input
          value={queryString}
          onChange={handleQuery}
          className={s.search_field}
          type="search"
          id="search-products"
          placeholder="Поиск"
        />
      </form>
    </section>
  )
}

Search.propTypes = {

}

export default Search

