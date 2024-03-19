import { useRef } from 'react'
import reactLogo from './assets/react.svg'

const RefLogin = () => {
    const form = useRef(null)

    return (
        <div className='login'>
        <div className='login-container'>
            <img src={reactLogo} className="logo react" alt="React logo" width= '200px' height= '200px' />   
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