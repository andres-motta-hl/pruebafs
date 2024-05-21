import './Login.scss';
import {useForm} from 'react-hook-form';

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const submit = handleSubmit((data)=>{
        console.log(data)
    })

    return(
        <div className='content-login'>
            <form onSubmit={submit} className='form-login'>
                <h2>Iniciar sesión</h2>

                <label htmlFor="correo">Correo</label>
                <input 
                    type="email" 
                    {...register('correo', { 
                    required: { value: true, message: 'El correo es requerido' }, 
                    pattern: { 
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                        message: 'El correo debe ser una dirección de correo válida' 
                    } 
                    })} 
                />
                {errors.correo && <span>{errors.correo.message}</span>}

                <label htmlFor="clave">Contraseña</label>
                <input 
                    type="password" 
                    {...register('clave', { 
                    required: { value: true, message: 'La contraseña es requerida' }, 
                    minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' }, 
                    pattern: { 
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/, 
                        message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número' 
                    } 
                    })} 
                />
                {errors.clave && <span>{errors.clave.message}</span>}

                <button type='submit'>Crear cuenta</button>
            </form>
        </div>
    )
}