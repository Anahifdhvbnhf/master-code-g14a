let num = prompt("Ingresa los números que quieras que validemos si es PAR, separados por una coma");

Array = num.split(",")

document.write("Los números pares que hay son los siguientes:" + "<br>")

for(let validacion of Array) {
    if (Number(validacion) % 2 ==0){
        document.write(`${validacion}</br>`)
    }
}
