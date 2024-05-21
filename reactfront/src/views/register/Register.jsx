import './Register.scss';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContexts';

const endpoint = 'http://localhost:8000/api';

export default function Register() {
    const {setUser} = useAuth();
    const navigate = useNavigate();

    const {register, handleSubmit,watch, formState: {errors}} = useForm();
    const submit = handleSubmit( async (data)=> {
        try {
            const {name, email, password} = data
            const response = await axios.post(`${endpoint}/register`, {name: name, email: email, password: password});
            localStorage.setItem('authToken', response.data.access_token);
            setUser(response.data);
            document.cookie = `authToken=${response.data.access_token}; max-age=3600; path=/`;
            navigate('/');
        } catch (error) {
            console.error('Error al enviar la petición:', error);
        }
    })

    return(
        <div className='content-register'>
            <form onSubmit={submit} className='form-register'>
                <h2>Crear cuenta</h2>
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    {...register('name', { 
                    required: { value: true, message: 'El nombre es requerido' }, 
                    minLength: { value: 2, message: 'El nombre es demaciado corto' }, 
                    maxLength: { value: 40, message: 'El nombre debe tener como máximo 40 caracteres' }, 
                    pattern: { 
                        value: /^[a-zA-ZÀ-ÿ\s]+$/, 
                        message: 'El nombre solo puede contener letras y espacios' 
                    } 
                    })} 
                />
                {errors.name && <span>{errors.name.message}</span>}

                <label htmlFor="email">Correo</label>
                <input 
                    type="email" 
                    {...register('email', { 
                    required: { value: true, message: 'El correo es requerido' }, 
                    pattern: { 
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                        message: 'El correo debe ser una dirección de correo válida' 
                    } 
                    })} 
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    {...register('password', { 
                    required: { value: true, message: 'La contraseña es requerida' }, 
                    minLength: { value: 6, message: 'La contraseña debe tener al menos 8 caracteres' }, 
                    pattern: { 
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/, 
                        message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número' 
                    } 
                    })} 
                />
                {errors.password && <span>{errors.password.message}</span>}

                <label htmlFor="passwordConfirm">Confirmar contraseña</label>
                <input type="password"  {...register('passwordConfirm', {
                    required: {value: true, message: 'Debes re confirmar tu contraseña'},
                    validate: (value)=>{
                        if(value === watch('password')){
                            return true
                        }else{
                            return 'Las contraseñas deben de coincidír'
                        }
                    }
                    })}/>
                { errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}

                <div>
                    <label htmlFor="terms">Acepto términos y condiciones</label>
                    <input type="checkbox" {...register('terms', {required: {value: true, message: 'Debes aceptar los términos'}})}/>
                </div>
                { errors.terms && <span>{errors.terms.message}</span>}

                <button type='submit'>Crear cuenta</button>
            </form>
        </div>
    )
}