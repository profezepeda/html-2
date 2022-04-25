/* objetos */
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    estatura: 172,
    direccion: {
        calle: "Calle falsa",
        ciudad: "Ciudad falsa",
        numero: 138
    }
}

document.getElementById("nombre").innerHTML = persona.nombre;
document.getElementById("apellido").innerHTML = persona.apellido;
document.getElementById("edad").innerHTML = persona.edad;
document.getElementById("estatura").innerHTML = persona.estatura / 100;


/* arreglos */
let personas = [
    { idpersona: 1, nombre: "Juan", apellido: "Perez", edad: 20, estatura: 172 },
    { idpersona: 2, nombre: "Pedro", apellido: "Perez", edad: 20, estatura: 172 },
    { idpersona: 3, nombre: "Juan", apellido: "González", edad: 21, estatura: 122 },
    { idpersona: 4, nombre: "Magdalena", apellido: "González", edad: 27, estatura: 162 },
    { idpersona: 5, nombre: "Petronila", apellido: "Galvez", edad: 24, estatura: 168 },
    { idpersona: 6, nombre: "Verónica", apellido: "Lizama", edad: 24, estatura: 168 }
];

function agregarTomas() {
    const nuevoTomas = { idpersona: 7, nombre: "Tomas", apellido: "Lizama", edad: 24, estatura: 168 }
    personas.push(nuevoTomas);
    cargarPersonas();
}

function agregarPersona()   {
    const personaNombre = document.getElementById("personaNombre").value;
    const personaApellido = document.getElementById("personaApellido").value;

    if (personaNombre == "" || personaApellido == "") {
        return false;
    }

    const nuevaPersona = {
        idpersona: personas.length + 1,
        nombre: personaNombre,
        apellido: personaApellido,
        edad: 24,
        estatura: 168
    }
    personas.push(nuevaPersona);
    document.getElementById("personaNombre").value = ""
    document.getElementById("personaApellido").value = ""

    cargarPersonas();
}

function cargarPersonas()   {
    let elementoPersonas = document.getElementById("personas");
    elementoPersonas.innerHTML = "";
    personas.forEach(pers => {
        const fila = document.createElement("div")
        fila.className = "row"
            const colNombre = document.createElement("div")
            colNombre.className = "col-4"
            colNombre.innerHTML = pers.nombre
            const colApellido = document.createElement("div")
            colApellido.className = "col-4"
            colApellido.innerHTML = pers.apellido
        fila.appendChild(colNombre)
        fila.appendChild(colApellido)
        elementoPersonas.appendChild(fila)
    });
}



cargarPersonas()









/*
// POR UL + LI
let ulPersonas = document.createElement("ul");
personas.forEach(pers => {
    const elemento = document.createElement("li");
    elemento.innerHTML = pers.nombre + " " + pers.apellido
    ulPersonas.appendChild(elemento);
})

let elementoPersonas = document.getElementById("personas");
elementoPersonas.appendChild(ulPersonas);
*/

/*

    <ul>
        <li>Juan</li>
        <li>Pedro</li>
        ....
    </ul>


*/



/* 
personas.forEach(element => {
    console.log(element.apellido)
});

const personaBuscada = personas.find(element => element.idpersona == 3);
console.log("SE BUSCA ....", personaBuscada);

const personasBuscadas = personas.filter(element => element.estatura > 170);
console.log("SE BUSCAN ....", personasBuscadas); */