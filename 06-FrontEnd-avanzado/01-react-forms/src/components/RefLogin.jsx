import {useRef} from 'react'
import logo from '../logo.svg'

const RefLogin = () => {
    const form = useRef(null)


    return (
        <div className='login'>RefLogin
        <div className='login-container'>
            <img src= {logo} alt= 'logo' className= 'logo'/>
        </div>
        </div>
    )
}

export default RefLogin