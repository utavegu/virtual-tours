import React from 'react'
import PropTypes from 'prop-types'

function Photos(props) {
  return (
    <section>
      <ul>
        <li>
          <picture>
            {/* <source media="(min-width: 1400px)" srcSet="http://placehold.it/1600x800" />
            <source media="(min-width: 768px)" srcSet="http://placehold.it/1400x700" />
            <source media="(min-width: 425px) and (max-width: 768px)" srcSet="http://placehold.it/760x400" /> */}
            <img src="http://placehold.it/420" alt="Название работы"/>
          </picture>
        </li>
        <li>
          <picture>
            {/* <source media="(min-width: 1400px)" srcSet="http://placehold.it/1600x800" />
            <source media="(min-width: 768px)" srcSet="http://placehold.it/1400x700" />
            <source media="(min-width: 425px) and (max-width: 768px)" srcSet="http://placehold.it/760x400" /> */}
            <img src="http://placehold.it/420" alt="Название работы"/>
          </picture>
        </li>
        <li>
          <picture>
            {/* <source media="(min-width: 1400px)" srcSet="http://placehold.it/1600x800" />
            <source media="(min-width: 768px)" srcSet="http://placehold.it/1400x700" />
            <source media="(min-width: 425px) and (max-width: 768px)" srcSet="http://placehold.it/760x400" /> */}
            <img src="http://placehold.it/420" alt="Название работы"/>
          </picture>
        </li>
      </ul>
    </section>
  )
}

Photos.propTypes = {

}

export default Photos

