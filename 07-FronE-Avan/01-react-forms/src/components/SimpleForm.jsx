import {useState} from 'react'

const SimpleForm = () => {
/* Paso 1: Crear los estados donde guardare la información tecleada */
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

/* Paso 4: Manejo lo que sucedera uando envie mi formulario  */
const handleSubmit = (event) => {
    event.preventDefault() //Hacemos que no se recargue la página
    //Convertir mi data en un objeto JSON, aqui ya podria ir a mandar a la API
    const submittedData = JSON.stringify({email, password})
    
    console.log(submittedData);
}

/*Paso 2: Crear mi formulario base */
    return (
        <div className='login'>
        <div className='login-container'>
            
            <form className= 'form'>
                <label htmlFor= 'email'>Email</label>

                {/* Paso 3: Guardo cada cambio del input en su estado correspondiente */}
                <input
                    type= 'text'
                    name= 'email'
                    placeholder= 'correo@gamil.com'
                    onChange ={(event)=> setEmail(event.target.value) }
                />

                <label htmlFor= 'password'>Password</label>
                <input
                    type= 'password'
                    name= 'password'
                    placeholder= '********'
                    onChange = {(event)=> setPassword(event.target.value) }
                />

                <button onClick= {handleSubmit}>
                    Iniciar sesión
                </button>

            </form> 
        </div>
        </div>
    )
}

export default SimpleForm