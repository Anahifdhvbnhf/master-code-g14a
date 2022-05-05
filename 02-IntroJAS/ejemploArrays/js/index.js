/*Desafio:
    1.Solicitar los nombres completos de los miembros de la familia separados por comas(,)
    2.Convertir esos nombres a un array de nombres de la familia y mostrarlo en consola.
    3.Convinar los dos arrays en uno solo y reordenarlo de atras hacia delante y lo vamos a mostrar al usuario.
    4.Agregar las validaciones que crean necesarias.
*/

// //variables y entradas
// var nombre, nombreHermanos, nombrePadres, nombresFamilia;
// var familia = [];
// var arrayFamiliares = [];

// nombre = prompt('Ingresa tu nombre completo');
// nombreHermanos = prompt('Ingresa los nombres completos de tus hermnos(as) separados por una coma(,)');
// nombrePadres = prompt('Ingresa los nombres de tus padres separados por una coma(,)');

// //logica
// familia.push(nombre);
// familia.push(nombreHermanos);
// familia.push(nombrePadres);

// arrayFamiliares = nombrePadres.split(',');
// familia.reverse();

// nombresFamilia = `Los nombres completos de tus familia son: ${familia[0]} ${familia[1]} ${familia[2]}`;

// //salidas
// console.log(arrayFamiliares);
// alert(nombresFamilia);

// //variables y entradas
var nombre, apellido1, apellido2, nombreCompleto, nombresMiembros;
var arrayNombre = []; //inicializo arreglo vacio
var arrayFamiliares = [];
var arrayCombinado = [];

nombre = prompt('Ingresa tu nombre');
apellido1 = prompt('Ingresa tu primer apellido');
apellido2 = prompt('Ingresa tu segundo apellido');
nombresMiembros =prompt('Ingresa los nombres de tus familiares separados por una coma(,)');

if(nombre === '' || apellido1 === '' || apellido2 === '' || nombresMiembros === '')
{
    alert('Porfavor rellena todos los datos solicitados');
}
else if(nombresMiembros.includes(',')=== false)
{
    alert('Olvidaste ingrsar los nombres separados por una coma(,)');
}
else
{
    //logica
    arrayNombre.push(nombre);
    arrayNombre.push(apellido1);
    arrayNombre.push(apellido2);

    arrayFamiliares = nombresMiembros.split(',');
    arrayCombinado = arrayNombre.concat(arrayFamiliares);

    nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;

    //salidas
    console.log(arrayNombre);
    console.log(arrayFamiliares);
    alert(nombreCompleto);
    alert(arrayCombinado.reverse());
}
