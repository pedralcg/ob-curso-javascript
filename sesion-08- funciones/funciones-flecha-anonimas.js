// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map(function(valor) {
    return valor *2
})
console.log(array2)

const array3 = array.map((valor) => valor * 5)
console.log(array3)

// const dobleDelvalor = valor => {
//     return valor *2
// }
// console.log(dobleDelvalor(5))

console.log(doble(5))
//console.log(dobleDelvalor2(5)) // No podemos llamarla de esta manera antes de inicializarla

const dobleDelvalor2 = valor => valor *2
console.log(dobleDelvalor2(5))

function doble(valor) {
    return valor * 2
}

// Hosting --> Las funciones tipo felcha sólo pueden accederse despues de inicializarse

// Funcion anónima --> Funciones que no tienen asignado un nombre
