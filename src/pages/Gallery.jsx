import React, { useState } from 'react';
import TagsList from '../components/Gallery/Tags/TagsList';
import Search from '../components/Gallery/Search/Search';
import WorksList from '../components/Gallery/Works/WorksList';
import s from './Gallery.module.css';
import projectsData from '../data/projects.json';

export default function Gallery() {
  const [projects, setProjects] = useState(projectsData);
  const [searchQuery, setSearchQuery] = useState('');

  const getUniqueTags = () => {
    const allTags = new Set();
    for (const project of projectsData) {
      project.tags.forEach(element => {
        allTags.add(element);
      });
    }
    return Array.from(allTags);
  }
  
  const handleGetTags = (receivedTags) => {
    let activeTags = [];
    for (let tag in receivedTags) if (receivedTags[tag]) activeTags.push(tag);
    const filtredProjects = projectsData
      .slice()
      .filter(project => project.tags.some(r => activeTags.includes(r)))
    setProjects(filtredProjects);
  }

  const foundProjects = projects
    .slice()
    .filter(item => item.name.toLowerCase().indexOf(searchQuery.toLowerCase().trim()) > -1)
    
  return (
    <>
      <header className={s.main_header}>
        <h1>Виртуальные туры и видео 360</h1>
        <p><i>От съёмки до готового результата</i></p>
        <address className={s.contacts}>
          <a className={s.mail} href="mailto:photo.largo@gmail.com">photo.largo@gmail.com</a>
          <a className={s.phone} href="tel:+7-985-836-69-16">+7 985 836 69 16</a>
        </address>

      </header>
      <main>
        <div className={s.sticky}>
          <TagsList tags={getUniqueTags()} onGetTags={handleGetTags} />
          <Search queryString={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <WorksList projects={foundProjects} />
      </main>
    </>
  )
}
