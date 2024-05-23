import {useState} from 'react';
import { useAuth } from '../../contexts/AuthContexts';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

export default function Login() {
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState({value: false, error: {}})

    const {register, handleSubmit} = useForm();
    const submit = handleSubmit( async (data)=> {
        try {
            const {email, password} = data;
            const response = await axios.post(`${endpoint}/login`, {email: email, password: password});
            localStorage.setItem('authToken', response.data.access_token);
            setUser(response.data);
            document.cookie = `authToken=${response.data.access_token}; max-age=3600; path=/`;
            navigate('/');
        } catch (error) {
            if (error.response) {
                setErrorLogin({value: true, ...error.response.data});
                console.error('Error en la respuesta del servidor:', error.response.data.message);
            } else {
                setErrorLogin({value: true, message: 'Error al iniciar sesión', dataError: 'general'});
                console.error('Error al enviar la petición:', error.message);
            }
        }
    })

    return(
        <div className='content-login'>
            <form onSubmit={submit} className='form-login'>
                <h2>Iniciar sesión</h2>

                <label htmlFor="correo">Correo</label>
                <input 
                    type="email" 
                    {...register('email', { 
                    required: { value: true, message: 'El correo es requerido' }
                    })} 
                />
                {errorLogin.value && errorLogin.dataError ==='email' && <span>{errorLogin.message}</span>}

                <label htmlFor="clave">Contraseña</label>
                <input 
                    type="password" 
                    {...register('password', { 
                    required: { value: true, message: 'La contraseña es requerida' }
                    })} 
                />
                {errorLogin.value && errorLogin.dataError ==='password' && <span>{errorLogin.message}</span>}

                <button type='submit'>Iniciar sesión</button>
                {errorLogin.value && errorLogin.dataError ==='general' && <span>{errorLogin.message}</span>}
            </form>
        </div>
    )
}