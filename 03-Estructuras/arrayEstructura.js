'use strict'

//LOS ARREGLOS NO EXISTEN
//- NECESITO CREAR UN ARREGLO(UNA ESTRUCTURA)
//- HAY UNA ESTRUCTURA PARECIDA A LOS ARREGLOS (OSEA UN OBJETO)
//- ¿COMO USO UN OBJETO, PARA CREAR UN ARREGLO?

//- ENLISTANDO LAS CARACTERISTICAS
//- METODO CONSTRUCTOR
//- EL METDO CONTRUCTOR LO PUEDES UTILIZAR EN UNA CLASE

class MyArray{
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.data

    }
    pop() {
        const lastItem = this.data[this.length - 1]
        //keyword delete
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
    unshift(param) {

    }
    shift() {

    }
}

const arr1 = new MyArray()

console.log(arr1.push("Sigue vivo"));
console.log(arr1.push("a"));


console.log(arr1);
arr1.pop()
console.log(arr1.get(1));
console.log(arr1);
