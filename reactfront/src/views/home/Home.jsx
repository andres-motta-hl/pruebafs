import React from 'react';
import './Home.scss' 
import Categories from './components/categories/Categories';
import FeatureBooks from './components/featuredBooks/FeatureBooks';

export default function Home() {

  return (
    <div>
      <img className='slider' src="https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fnw.png?alt=media&token=06e6d34e-b64f-468a-9b64-ecd090ad402a" alt="Slider"/>
      <Categories />
      <h2 className='subtitle-home'>Libros destacados</h2>
      <FeatureBooks />
    </div>
  );
}