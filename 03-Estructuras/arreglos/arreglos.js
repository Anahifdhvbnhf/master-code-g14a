'use strict'

//--------------------0----1-----2
// const arregloBasico =[1,5,2,4,3,3,5];
//los arreglos inician apartir de 0
// arregloBasico.sort((a,b) =>{});
// console.log(arregloBasico[arregloBasico.length]);
// console.log(arregloBasico[arregloBasico.length - 1])
// const filtrado= arregloBasico.filter(arreglo => arreglo ===5);
// const filtrado1 = arregloBasico.filter(arreglo => arreglo ===9);
// const filtrado2 = arregloBasico.find(arreglo => arreglo ===9);
// const filtrado = arregloBasico.map(arreglo => arreglo);
// console.log(filtrado);

// const arreglo = [{
//     nombre: 'Amanda',
//     lugarNacimiento: {
//         Pais: '',
//         Ciudad: ''
//     }
// },{
//     nombre: 'Betyna',
//     apellido: 'Montes',
//     lugarNacimiento:[
//     {
//         Pais: '',
//         Ciudad: ''
//     },{
//     Pais: '',
//     Ciudad: ''
//     }
//     ]
// },{
//     nombre: 'Anahi',
//     lugarNacimiento:{
//         Pais: '',
//         Ciudad: ''
//     }
// },{
//     nombre: 'Isaac',
//     lugarNacimiento:{
//         Pais: '',
//         Ciudad: ''
//     }
// },];

const arreglo = [1, 2, 3, 4, 5];
const arreglo1 = arreglo.map(arr => arr);

arreglo[0] = 6;
arreglo1[1] = 7;

console.log(arreglo);
console.log(arreglo1);
//--------------------------
let arregloa = [
    {
        dato:1,
        info:{
            nombre:'Abraham'
        }
    },
    {dato:2}, {dato:3}];
// let arreglob = arregloa.map (arr => {
//     console.log('arr', arr);
//     return{...arr}
// });
let arreglob = arregloa.map (arr => ({...arr}));

arregloa[0].dato = 6;
arreglob[1].dato = 7;
arregloa[0].info.nombre = 'Omar';

console.log('arregloa', arregloa);
console.log('arreglob', arreglob);

//------------------------
let letra1 = 'a';
let letra2 = letra1;
letra1 = 'b';

console.log('letra1', letra1);
console.log('letra2', letra2);
