import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './Menu.scss';
import Search from './components/search/Search';

export default function Menu({changeLateralMenuShow}) {
    const [subMenuAuth, setSubMenuAuth] = useState(false);
    const location = useLocation();

    const handleAuthClick = () => {
        setSubMenuAuth(!subMenuAuth);
    };

    useEffect(() => {
        // Establecer subMenuAuth en false cuando se navega
        setSubMenuAuth(false);
    }, [location]);

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
                <div className="user-auth" onClick={handleAuthClick}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                {subMenuAuth && (
                    <div className="user-auth-options">
                        <Link to="/login">Iniciar sesión</Link>
                        <Link to="/register">Crear cuenta</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
