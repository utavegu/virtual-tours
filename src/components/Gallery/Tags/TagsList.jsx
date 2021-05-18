import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './TagsList.module.css';
import Tag from './Tag'

function TagsList({tags, onGetTags: handleGetTags}) {
  const initialTags = {};
  tags.forEach(element => {
    initialTags[element] = false;
  });

  const [tagsCloud, setTagsCloud] = useState(initialTags);

  const handleChange = ({target}) => {
    setTagsCloud({...tagsCloud, [target.name]: target.checked});
    handleGetTags({...tagsCloud, [target.name]: target.checked});
  }
  
  return (
    <section className={s.tags}>
      <h2 className="visually-hidden">Облако тэгов</h2>
      <ul className={s.tags_cloud}>
        {tags.map(tag => <Tag tag={tag} key={tag} onChange={handleChange} state={tagsCloud} />)}
      </ul>
    </section>
  )
}

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onGetTags: PropTypes.func,
}

export default TagsList
