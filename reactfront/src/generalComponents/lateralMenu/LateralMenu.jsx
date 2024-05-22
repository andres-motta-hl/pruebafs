import React from 'react';
import './LateralMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContexts';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

export default function LateralMenu({ changeLateralMenuShow }) {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        if (user) {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];
                await axios.get(`${endpoint}/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(null);
                document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                navigate('/');
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
            }
        }
    };

    return (
        <>
            <div className='lateral-menu-content'>
                <section className='header-lateral-menu'>
                    <h2>General</h2>
                </section>
                <ul>
                    <li><Link to="/loans">Libros prestados</Link></li>
                </ul>
                {!user ? (
                    <section className='buttons'>
                        <Link to="/login">Iniciar sesión</Link>
                        <Link to="/register">Crear cuenta</Link>
                    </section>
                ) : (
                    <section className='buttons'>
                        <button onClick={logout}>Cerrar sesión</button>
                    </section>
                )}
            </div>
            <div className='shadow-lateral-menu' onClick={changeLateralMenuShow}></div>
            <div className='close-lateral-menu' onClick={changeLateralMenuShow}>
                <FontAwesomeIcon icon={faClose} />
            </div>
        </>
    );
}
