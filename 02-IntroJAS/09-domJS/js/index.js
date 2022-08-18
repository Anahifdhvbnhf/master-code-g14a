
let txtNombre, añoNac, edad, añoActual, mesNac, mesActual;

function capturaNombre()
{
    txtNombre= document.getElementById('nombre');

    alert(' Tu nombre es ' + txtNombre.value);
}

function calcularEdad()
{
    let fecha = new Date();
    añoNac = Number(document.getElementById('fecha').value.slice(0,4));
    añoActual = fecha.getFullYear();

    console.log(document.getElementById('fecha').value);
    // mesNac = Number(document.getElementById('fecha').value.slice(5,7));
    // mesActual = fecha.getFullYear();

    if(añoActual < añoNac)
    {
        alert('Elige un año de Nacimiento valido');
    }
    else
    {   //obtener la edad con los meses ncluidos
        edad = añoActual - añoNac;

        document.getElementById('edad').innerText ='Tu edad es : ' + edad;
    }
}

document.getElementById('calcular').addEventListener('click', calcularEdad);

function cambiarColor()
{
    //vuelva a tener el primer color con  el boton
    document.getElementById('cuerpo').style.backgroundColor = '#ec407a';
}
