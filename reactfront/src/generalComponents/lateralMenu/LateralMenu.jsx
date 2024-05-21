import './LateralMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function LateralMenu({changeLateralMenuShow}) {
    return (
        <div>
            <div className='lateral-menu-content'>
                <section className='header-lateral-menu'>
                    <h2>General</h2>
                </section>
                <ul>
                    <li>Categorías</li>
                    <li>Mis favoritos</li>
                    <li>Libros prestados</li>
                </ul>
                <section className='buttons'>
                    <Link to="/login">Iniciar sesión</Link>
                    <Link to="/register">Crear cuenta</Link>
                </section>
            </div>
            <div className='shadow-lateral-menu' onClick={changeLateralMenuShow}></div>
            <div className='close-lateral-menu' onClick={changeLateralMenuShow}><FontAwesomeIcon icon={faClose} /></div>
        </div>
    )
}