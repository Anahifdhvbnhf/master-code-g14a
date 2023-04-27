'use strict'

alert("Hola, adivinar el numero que estoy pensando ahora");

//Eventos
const titulo = document.getElementById('titulo')
titulo.addEventListener('mouseover', () => {
    titulo.classList.add('texto-azul')
})