import React from 'react';
import Tags from '../components/Gallery/Tags';
import Search from '../components/Gallery/Search';
import WorksList from '../components/Gallery/WorksList';
import s from './Gallery.module.css';

export default function Gallery() {
  return (
    <>
      <header className={s.main_header}>
        <h1>Виртуальные туры и видео 360</h1>
        <p><i>От съёмки до готового результата.</i></p>
        Почту иконкой, телефон цифрами.
      </header>
      <main>
        <Tags />
        <Search />
        <WorksList />
      </main>
    </>
  )
}
