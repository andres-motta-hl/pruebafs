import React from 'react';
import './Register.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContexts';

const endpoint = 'http://localhost:8000/api';

export default function Register() {
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${endpoint}/register`, data);
            localStorage.setItem('authToken', response.data.access_token);
            setUser(response.data);
            document.cookie = `authToken=${response.data.access_token}; max-age=3600; path=/`;
            navigate('/');
        } catch (error) {
            console.error('Error al enviar la petición:', error);
        }
    };

    return (
        <div className='content-register'>
            <form onSubmit={handleSubmit(onSubmit)} className='form-register'>
                <h2>Crear cuenta</h2>
                <label htmlFor="name">Nombre</label>
                <input type="text" {...register('name', { required: 'El nombre es requerido', minLength: { value: 2, message: 'El nombre es demasiado corto' }, maxLength: { value: 40, message: 'El nombre debe tener como máximo 40 caracteres' }, pattern: { value: /^[a-zA-ZÀ-ÿ\s]+$/, message: 'El nombre solo puede contener letras y espacios' } })} />
                {errors.name && <span>{errors.name.message}</span>}

                <label htmlFor="email">Correo</label>
                <input type="email" {...register('email', { required: 'El correo es requerido', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'El correo debe ser una dirección de correo válida' } })} />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="password">Contraseña</label>
                <input type="password" {...register('password', { required: 'La contraseña es requerida', minLength: { value: 6, message: 'La contraseña debe tener al menos 8 caracteres' }, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/, message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número' } })} />
                {errors.password && <span>{errors.password.message}</span>}

                <label htmlFor="passwordConfirm">Confirmar contraseña</label>
                <input type="password" {...register('passwordConfirm', { required: 'Debes reconfirmar tu contraseña', validate: value => value === watch('password') || 'Las contraseñas deben coincidir' })} />
                {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}

                <div>
                    <label htmlFor="terms">Acepto términos y condiciones</label>
                    <input type="checkbox" {...register('terms', { required: 'Debes aceptar los términos' })} />
                </div>
                {errors.terms && <span>{errors.terms.message}</span>}

                <button type='submit'>Crear cuenta</button>
            </form>
        </div>
    );
}
