//varianles globales
let numero, operador;

//permite la suma de 2 numeros
function Calculo(data){
    let resultado = 0;
    let operacion = '';

    for(i = 0; i < data.length; i++)
    {
        if(data[i] === "+" || data[i] === "-" || data[i] === "x" || data[i] === "/")
        {
            operacion = data[i];
        }
        else
        {
            if(operacion === '' )
            {
                resultado = Number(data[i]);
            }
            else
            {
                if(operacion === '+')
                {
                    resultado = resultado + Number(data[i]);
                }
                if(operacion === '-')
                {
                    resultado = resultado - Number(data[i]);
                }
                if(operacion === 'x')
                {
                    resultado = resultado * Number(data[i]);
                }
                if(operacion === '/')
                {
                    resultado = resultado / Number(data[i]);
                }
            }
        }
    }
    return resultado;
}

function CapturarDatos(id){
    //variables locales
    let imprimirToral = document.getElementById('total');
    let operaciones = document.getElementById('operaciones');
    let historial = document.getElementById('historial');
    let array = [];
    let total; 

    if(id === "+" || id === "-" || id === "x" || id === "c" || id === "/")
    {
        operaciones.innerText = imprimirToral.innerText + ' ' + id ;
        operador = 1;
    }
    else if(id === "=")
    {
        operaciones.innerText = operaciones.innerText + ' ' + imprimirToral.innerText;
        array =operaciones.innerText.split(' ');
        total = Calculo(array);
        imprimirToral.innerText = total; 

        historial.innerHTML = operaciones.innerText + '' + id + '' + total + "<br>" + historial.innerText;
        
        operaciones.innerText = "";
        imprimirToral.innerText = 0;
    }

    else if(id === "c"){
        operaciones.innerText = "";
        imprimirToral.innerText = "0";
    }

    else
    {
        numero =Number(id);
        if(imprimirToral.innerText === '0' || operador === 1)
        {
            imprimirToral.innerText= numero;
            operador = 0;
        }
        else
        {
            imprimirToral.innerText= imprimirToral.innerText + numero;
        }
    }
}

