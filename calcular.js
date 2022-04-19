let resultado = 0;
const valor5 = 5;
const valor10 = 10;

console.log(valor5+valor10);    // 15
console.log(valor5-valor10);    // -5
console.log(valor5*valor10);    // 50
console.log(valor5/valor10);    // 0.5

/*
== // comparar sin validar tipo de dato
=== // comparar con validacion de tipo de dato
!= // comparar sin validar tipo de dato
!== // comparar con validacion de tipo de dato
< // menor que
> // mayor que
*/

console.log(valor5 == valor10); // false

function sumar(parametro1, parametro2)  {
    resultado = parametro1 + parametro2;
    return resultado;
}

function restar(parametro1, parametro2) {
    resultado = parametro1 - parametro2;
    return resultado;
}

function mayor(parametro1, parametro2)  {
    if (parametro1 > parametro2) {
        return true;
    } else {
        return false;
    }
}


let resultado1 = sumar(valor5, valor10); // 15
let resultado2 = restar(valor10, valor5); // 5
let resultado3 = sumar((valor5*valor10), 200); // 250

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);


console.log(mayor(150000, 15));
console.log(mayor(5, 15));

