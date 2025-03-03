// abrir Quokka Ctrl + k y luego j

//// Cómo podemos comparar listas

// .every()  Todos los elementos de la lista cumplen una determinada condición


const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]


// const resultado = array.every(valor => {
//     if (typeof valor > 0) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(resultado)


const resultado2 = array.every(valor => valor > 0) 
console.log(resultado2)


//// Comparación de listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]
const ar3 = [1, 5, 3, 4]


console.log(ar1 == ar2) // Las listas no pueden compararse asi
console.log(ar1 === ar2) // Las listas no pueden compararse asi


const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false;
    const result = array_1.every((valor, i) => {
        if (valor === array_2[i]) return true
    })
    return result;
}

const compararArrays2 = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const result = array_1.every((valor, i) => valor === array_2[i])
    return result;
}


console.log(compararArrays(ar1, ar2))
console.log(compararArrays2(ar1, ar2))

console.log(compararArrays(ar1, ar3))
console.log(compararArrays2(ar1, ar3))



