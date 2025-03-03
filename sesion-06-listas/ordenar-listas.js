// abrir Quokka Ctrl + k y luego j

// .sort() --> modifica el array

const array = [2, 5, 9, 15, 1, 2, 0, 4]

console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return +1
    } else if (a > b) {
        return -1
    } else { // a === b
        return 0
    }
})

console.log(array)


// Ordenar únicamente arrays numéricos

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]
arrayNumerico.sort((a, b) => b - a )
console.log(arrayNumerico)


// Interesante en arrays de objetos

const listaObjetos = [
    {nombre: "Leire", edad: 40, vivienda: "desconocida"},
    {nombre: "Pedro", edad: 34, vivienda: "Autonomias"},
    {nombre: "Julia", edad: 35, vivienda: "Autonomias"},
    {nombre: "Mario", edad: 3, vivienda: "Autonomias"},
    {nombre: "Nuka", edad: 7, vivienda: "Autonomias"}
]

listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return +1
    } else if (a.edad > b.edad) {
        return -1
    } else {
        return 0 //a.edad === b.edad
    }
} )
console.log(listaObjetos)


// // Este método hace la resta de lso 2 valroes y si es negativa a<b
// listaObjetos.sort((a, b) => a.edad - b.edad)
// console.log(listaObjetos)
