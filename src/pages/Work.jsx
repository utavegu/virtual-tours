import React from 'react';
import s from './Work.module.css';

export default function Work() {
  return (
    <div>
      <h1>Название работы</h1>

      <div className={s.responsive_container}>
        <iframe
          width="900"
          height="500"
          src="http://test.photo-largo.lclients.ru/dudergof_master_2019_01_24/"
          title="Название работы"
          frameBorder="0"
        >
          Обновите ваш браузер!
        </iframe>
      </div>

      <p>Описание --- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sequi sit cumque optio, sapiente natus unde, nulla aperiam modi, minus debitis veniam laboriosam vel quas fuga consectetur perferendis? Voluptates, quod!</p>

      <div className={s.responsive_container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NnZaPcmEnNY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        >
          Обновите ваш браузер!
        </iframe>
      </div>
      <span>*видео интерактивно, вы можете его вращать</span>

      <p>Описание</p>

      <section>Галерея
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
        
      <button>Назад</button>
    </div>
  )
}
