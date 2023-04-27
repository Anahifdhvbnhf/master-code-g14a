'use strict'

const pamela = {
    //estructuras de clave valor o tambien conocido como; key - value
    "primer Nombre": "Pamela",
    "apellido": "Ortega",
    "intereses": [
        'Natacion',
        'Green Day',
        'Harry Potter'
    ],
    "x1":"uno",
    "x2": "dos"
}

//NOTACION DE PUNTO
console.log(pamela.apellido);

//NOTACION DE CORCHETES O BRACKETS
console.log(pamela["primer Nombre"]);
let n= 0
n++
n++
console.log(pamela["x" + n]);

