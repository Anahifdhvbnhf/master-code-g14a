import { useRef } from "react"


const RefLogin = () => {
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault() //Este hace que no se recargue la pagina 
        const formData = new FormData(form.current)
        const data= {
            username:formData.get('email'),
            password:formData.get('password')

        }
        console.log(data)
    }

    return (
        <div className='login'>
        <div className='login-container'>
            
            <form className= 'form' ref= {form}>
                <label htmlFor= 'email'>Email</label>
                <input
                    type= 'text'
                    name= 'email'
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