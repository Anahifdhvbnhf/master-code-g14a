// let carro = {
//     llantas : 4 , //int
//     color : "rojo", //string
//     puertas : 5,
//     usaGasolina : true
// };

// console.log(carro.color);
// console.log(carro.puertas);

// console.log(carro['usaGasolina']);
// console.log(carro['puertas']);

// let perro = {
//     nombre :"Canelo",
//     color : "Cafe",
//     edad : 3,
//     raza : "Doberman",
//     ladrar : function(){
//         return(`${this.nombre} puede ladrar wua wua`)
//     },

//     comer : function(){
//         console.log('yomi yomi')
//     }
// };

// console.log(perro.ladrar());
// console.log(perro.comer());

// // añadimos valores
// perro.tamaño = "grande";
// perro.macho = true;

// console.log(perro);

// // modificar valores
// perro.edad = 5;

// // eliminar un valor
// delete perro.raza;

// desestructuracion

const animales = ["Conejo", "Gato", "Perro", "Rana"];
const[animal1, animal2, animal3, animal4] = animales;

console.log(`Mi primer mascota:${animal1} y ahora tengo ${animal2}, ${animal3}, ${animal4}`);

//---- desestrutura lo que necesites ----

const nombres = ["Zanahoria", "Mei", "Taco", "Rene"];

const[nombre0, , nombre2] = nombres;

console.log(`Mis mascotas son: ${nombre0} y ${nombre2}`);

// Uso de operador rest

const empleado = ["Emilio", 24, "Puebla", "Desarrollador front (El chido)", true];

const[nombre, edad, ...rest] = empleado;

console.info(`${nombre} tiene ${edad}`);

console.info(`Los datos completos son: ${rest}`);

//ejercicio
const aninal = []


