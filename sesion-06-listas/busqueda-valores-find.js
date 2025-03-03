//// Iterar los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined]


//// Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


//// Forma moderna ES6 (más eficiente) .forEach()
array.forEach(valor => {
    console.log(valor)
})


let suma = 0
const arrayNums = [3,6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma)


//// Busqueda de un valor dentro de una lista
// .find()

// Quiero encontrar el elemento 90
const variable = array.find(valor=> {
    if (valor === 90) {
        return true
    } 
})

console.log(variable)




const listaObjetos = [
    {nombre: "Leire", edad: 40, vivienda: "desconocida"},
    {nombre: "Pedro", edad: 34, vivienda: "Autonomias"},
    {nombre: "Julia", edad: 35, vivienda: "Autonomias"},
    {nombre: "Mario", edad: 3, vivienda: "Autonomias"},
    {nombre: "Nuka", edad: 7, vivienda: "Autonomias"}
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Pedro") {
//         return true
//     }
// })

const objeto = listaObjetos.find(o => {
    return o.nombre === "Julia"
})

console.log(objeto)
console.log(objeto.vivienda)