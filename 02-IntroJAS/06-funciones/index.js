// function unaFuncion(){
//     console.log(1);
//     console.log(2);
//     console.log(3);

//     return 'Hola Mundo';
// }
// //unaFuncion();
// var mensaje = unaFuncion();
// console.log(mensaje);

//------
// console.log("2 x 0 =", 2 * 0);
// console.log("2 x 1 =", 2 * 1);
// console.log("2 x 2 =", 2 * 2);
// console.log("2 x 3 =", 2 * 3);
// console.log("2 x 4 =", 2 * 4);
// console.log("2 x 5 =", 2 * 5);
// console.log("2 x 6 =", 2 * 6);
// console.log("2 x 7 =", 2 * 7);
// console.log("2 x 8 =", 2 * 8);
// console.log("2 x 9 =", 2 * 9);
// console.log("2 x 10 =", 2 * 10);

//------funcion multiplicar
// function tablaDelDos(){
//     for (i = 0; i <=10; i++){
//         console.log("2 x ", i, "=", 2 * i)
//     }
// }

// tablaDelDos();

//------suma
// function Suma(num1, num2){
//     var resultado = num1 + num2;

//     alert('El resultado es:' + resultado);
// }


// Suma(5, 30);

//------return
// function sumatoria(num1, num2){
//     var total= num1 + num2;

//     return 'La sumatoria es:' + total;
// }

// var valorTotal = sumatoria(9, 8);
// console.log(valorTotal);

//------this
// function Saludo(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;

//     console.log("Hola yo soy:" + this.nombre + " " + "Mi edad es:" + this.edad);
// }

// Saludo('Jesus', 25);

//------otro ejercicio
// function diaActual(){
//     var fecha = new Date();
//     alert('Hoy es:' + fecha.getDate());
// }

// diaActual();


//------1ºDefinir si la cadena de texto es palindremo(izquierda ha derecha) 2º como parametro un entero y si pasa si es par o impar

var numero = prompt("Introduce un numero entero");


function numeroImpar(numero){
    if(numero % 2 ==0){
        return "par";

    }
    else{
        return "Impar";
    }
}
var resultado = numeroImpar(numero);
alert("El numero " + numero + "es" + resultado);
