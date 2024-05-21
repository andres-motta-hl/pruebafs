import React from 'react';
import './Categories.scss'
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    const router = useNavigate();

    const navegate = (category) => {
        router(`/busqueda/${category}`)
    }

    return (
        <div className='categories-content'>
            <div onClick={()=> navegate('Ficción')}>Ficción</div>
            <div onClick={()=> navegate('Literatura')}>Literatura</div>
            <div onClick={()=> navegate('Infantiles')}>Infantiles</div>
            <div onClick={()=> navegate('Educación')}>Educación</div>
            <div onClick={()=> navegate('Auto ayuda')}>Auto ayuda</div>
            <div onClick={()=> navegate('Geografía')}>Geografía</div>
            <div onClick={()=> navegate('Psicología')}>Psicología</div>
            <div onClick={()=> navegate('Ciencias')}>Ciencias</div>
        </div>
    )
}