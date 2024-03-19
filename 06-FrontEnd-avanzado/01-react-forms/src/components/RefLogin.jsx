import { useRef } from 'react'


const RefLogin = () => {
    const form = useRef(null)
    const handleSubmit = (event)=> {
        event.preventDefault() //Este hace que no se recargue la pagina 
    }

    return (
        <div className='login'>
        <div className='login-container'>
            
            <form className= 'form' ref= {form}>
                <label htmlFor= 'mail'>Email</label>
                <input
                    type= 'text'
                    name= 'mail'
                    placeholder= 'correo@gamil.com'
                />

                <label htmlFor= 'password'>Password</label>
                <input
                    type= 'password'
                    name= 'password'
                    placeholder= '********'
                />

                <button onClick= {handleSubmit}>
                    Iniciar sesión
                </button>

            </form> 
        </div>
        </div>
    )
}

export default RefLogin