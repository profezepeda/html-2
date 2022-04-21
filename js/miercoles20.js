// const informacion = document.getElementById('informacion');
// console.log(informacion.innerHTML);

const titulo = document.getElementById("titulo")
titulo.innerHTML = "HORA"
const numero = document.getElementById("numero")
let valor = 0
let volverCalculoHora = false;
const nombres = [ "Juan", "Juana", "Mario", "María", "Pedro", "Pedra", "Emilio", "Emilia" ];

function incremento() {
    valor = valor + 1
    numero.innerHTML = valor
    setTimeout( () => { incremento() }, 1000)
}

function hora() {
    const fecha = new Date()
    numero.innerHTML = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds()
    if (volverCalculoHora)    {
        setTimeout( () => { hora() }, 1000)
    } else {
        numero.innerHTML = ""
    }
}

function comenzar() {
    volverCalculoHora = true
    document.getElementById("botonDetener").disabled = false
    document.getElementById("botonComenzar").disabled = true
    hora()
}
function detener()  {
    volverCalculoHora = false
    document.getElementById("botonDetener").disabled = true
    document.getElementById("botonComenzar").disabled = false
}

function aleatorio(min, max)    {
    return Math.round(Math.random() * (max - min)) + min;
}

function jugarLoteria() {
    const premiado = aleatorio(0, nombres.length - 1)
    console.log(premiado)
    document.getElementById("loteria").innerHTML = nombres[premiado] + " ha ganado, número premiado: " + premiado
}


// hora()
// incremento()

setTimeout( () => { document.getElementById("informacion").innerHTML = "Hora de la mañana" }, 10000)

console.log(aleatorio(0, 100));