//REGLAS PARA CREAR UN HOOK
//Custom Hook es una funsión que utiliza otros hooks de React...
//1. Simpre debemos usar la palabra "use" al nombrarlo, ej: useForm
//2. Simpre deben de ser funciones (A partir de React v16 usamos Hooks)
//3. Siempre debo de usar algún Hook de React, (ej: useState, useEffect, useRef,etc)
//4. Deben de ser reutilizables, no para casos especificos.

import { useState, useEffect } from "react";

//callback: función que se va a encargar de procesar el envio de form
//defaults: valores por defecto del formulario
function useForm (callback, defaults) {
    const[input, setInput]= useState (defaults) //Guardo los valores del formulario
    
    //Cargar los valores por defecto
    useEffect (() => {
        setInput({...defaults}) //spread operator
    },[defaults])

    const handleInputChange = (event) => {
        const{name, value} = event.target
        //Equivalente a:
        //const name = event.target.name
        //const value  = event.target.value

        console.log(name, value);
        setInput({...input, [name]: value }) //actualizo la data
    }

    const handleSubmit = (event) => {
        event.preventDefault() //Esto hace que no se recargue la página
        callback(input)
    }

    return {
        input,
        handleInputChange,
        handleSubmit
    }
}
export default useForm 