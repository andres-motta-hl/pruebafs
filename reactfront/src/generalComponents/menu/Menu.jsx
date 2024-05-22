import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Menu.scss';
import Search from './components/search/Search';
import { useAuth } from '../../contexts/AuthContexts';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

export default function Menu({ changeLateralMenuShow }) {
    const { user, setUser } = useAuth();
    const [subMenuAuth, setSubMenuAuth] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleAuthClick = () => {
        setSubMenuAuth(!subMenuAuth);
    };

    useEffect(() => {
        // Cerrar el submenú de autenticación cuando se navega
        setSubMenuAuth(false);
    }, [location]);

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
        <div className="content">
            <div className="limiter-menu">
                <div className="left-menu" onClick={changeLateralMenuShow}>
                    <FontAwesomeIcon icon={faAlignJustify} />
                </div>
                <nav className='logo'>
                    <Link to="/">Librería</Link>
                </nav>
                <Search />
                {user && (
                    <div className="user-data">
                        <p>{user.data.name}</p>
                        <p>{user.data.role}</p>
                    </div>
                )}
                <div className="user-auth" onClick={handleAuthClick}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                {subMenuAuth && !user &&(
                    <div className="user-auth-options">
                        <Link to="/login">Iniciar sesión</Link>
                        <Link to="/register">Crear cuenta</Link>
                    </div>
                )}
                {subMenuAuth && user &&(
                    <div className="user-auth-options options-inUser">
                        <button onClick={logout}>Cerrar sesión</button>
                    </div>
                )}
            </div>
        </div>
    );
}
