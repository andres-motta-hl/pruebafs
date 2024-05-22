import React from 'react';
import './Categories.scss';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    const navigate = useNavigate();

    const categories = [
        'Ficción',
        'Psicología',
        'Novelas',
        'Infantiles',
        'Literatura',
        'Educación',
        'Auto ayuda',
        'Geografía',
        'Ciencia'
    ];

    const handleNavigate = (category) => {
        navigate(`/busqueda/${category}`);
    }

    return (
        <div className='categories-content'>
            {categories.map(category => (
                <div key={category} onClick={() => handleNavigate(category)}>
                    {category}
                </div>
            ))}
        </div>
    );
}
