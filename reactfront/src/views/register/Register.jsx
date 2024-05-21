import './Register.scss';
import {useForm} from 'react-hook-form';

export default function Register() {
    const {register, handleSubmit,watch, formState: {errors}} = useForm();
    const submit = handleSubmit((data)=>{
        console.log(data)
    })

    return(
        <div className='content-register'>
            <form onSubmit={submit} className='form-register'>
                <h2>Crear cuenta</h2>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    {...register('nombre', { 
                    required: { value: true, message: 'El nombre es requerido' }, 
                    minLength: { value: 2, message: 'El nombre es demaciado corto' }, 
                    maxLength: { value: 40, message: 'El nombre debe tener como máximo 40 caracteres' }, 
                    pattern: { 
                        value: /^[a-zA-ZÀ-ÿ\s]+$/, 
                        message: 'El nombre solo puede contener letras y espacios' 
                    } 
                    })} 
                />
                {errors.nombre && <span>{errors.nombre.message}</span>}

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

                <label htmlFor="confirmarClave">Confirmar contraseña</label>
                <input type="password"  {...register('claveConfirm', {
                    required: {value: true, message: 'Debes re confirmar tu contraseña'},
                    validate: (value)=>{
                        if(value === watch('clave')){
                            return true
                        }else{
                            return 'Las contraseñas deben de coincidír'
                        }
                    }
                    })}/>
                { errors.claveConfirm && <span>{errors.claveConfirm.message}</span>}

                <div>
                    <label htmlFor="terminos">Acepto términos y condiciones</label>
                    <input type="checkbox" {...register('terminos', {required: {value: true, message: 'Debes aceptar los términos'}})}/>
                </div>
                { errors.terminos && <span>{errors.terminos.message}</span>}

                <button type='submit'>Crear cuenta</button>
            </form>
        </div>
    )
}