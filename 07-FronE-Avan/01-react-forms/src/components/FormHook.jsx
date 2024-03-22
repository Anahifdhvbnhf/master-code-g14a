import {useState, useEffect} from 'react'
import useForm from '../hooks/useForm'

const FormHook = () => {
    /*Paso 1: Crear unico estado  con toda la informacion en forma de objeto */
    const[datos, setDatos]= useState({
        nombre: '',
        apellido: '',
        edad: '0',
        gennero: '',
        email: '',
        password: ''
    })

    /*Paso 2:  Voy a simIlar traer data de una API y prerrellenar el formulario */
    useEffect (() => {
        setTimeout (() => { 
            const info ={
                //JSON que manda el BackEnd
                nombre: 'Anahi',
                apellido: 'Aguilar',
                edad: '27',
                gennero: 'F',
                email: 'anahiam@gamil.com',
                password: 'passwordmuySeguro'
            }
            setDatos(info)
        }, 2000)
    },[])

    const sendData = (data) => {
        console.log('Esta es mi data final', data);
    }
    const {input, handleInputChange, handleSubmit} = useForm (sendData, datos) //necesita pasar 2 parametro

    /*Paso 3: Crear mi formulario */
    return (
        <div className='login'>
        <div className='login-container'>    
    
        <h1>Form Hook</h1>      
            <form className= 'form'>

            <label htmlFor= 'nombre'>Nombre</label>
                <input
                    type= 'text'
                    name= 'nombre'
                    placeholder= 'Tu nombre'
                    onChange ={handleInputChange}
                    value= {input.nombre}
                />

                <label htmlFor= 'apellido'>Apellido</label>
                <input
                    type= 'text'
                    name= 'apellido'
                    placeholder= 'Tu apellido'
                    onChange ={handleInputChange}
                    value= {input.apellido}
                />

                <label htmlFor= 'edad'>Edad</label>
                <input
                    type= 'number'
                    name= 'edad'
                    placeholder= 'Tu edad'
                    onChange ={handleInputChange}
                    value= {input.edad}
                />

                <label htmlFor= 'genero'>Genero</label>
                <select 
                    name='genero'
                    onChange = {handleInputChange}
                    value= {input.gennero}
                >
                    <option value=''>Elige un genero</option>
                    <option value='M'>Masculino</option>
                    <option value='F'>Femenino</option> 
                    <option value='F'>Otro</option>
                </select>
 
                <label htmlFor= 'email'>Email</label>
                <input
                    type= 'text'
                    name= 'email'
                    placeholder= 'correo@gamil.com'
                    onChange ={handleInputChange}
                    value= {input.email}
                />

                <label htmlFor= 'password'>Password</label>
                <input
                    type= 'password'
                    name= 'password'
                    placeholder= '********'
                    onChange = {handleInputChange}
                    value= {input.password}
                />

                <button onClick= {handleSubmit}>
                    Iniciar sesión
                </button>

            </form> 
        </div>
        </div>
    )
}

export default FormHook