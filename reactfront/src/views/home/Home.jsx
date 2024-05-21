import React from 'react';
import './Home.scss' 
import Categories from './components/categories/Categories';
import FeatureBooks from './components/featuredBooks/FeatureBooks';
import { useAuth } from '../../contexts/AuthContexts';

export default function Home() {
  const {user} = useAuth();

  return (
    <div>
      <img src="https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2FCaptura%20de%20Pantalla%202024-05-20%20a%20la(s)%202.47.36%20p.m..png?alt=media&token=e90b9c0b-14ba-4ff9-8615-feb84f39adb6" alt="Slider"/>
      <Categories />
      <h2 className='subtitle-home'>Libros destacados</h2>
      <FeatureBooks />
    </div>
  );
}