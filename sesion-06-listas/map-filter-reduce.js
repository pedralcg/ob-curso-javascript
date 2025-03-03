//// Trabajar con metodos más avanzados

// .map()

const array= ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Murcia", "Bilbao"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)


const newArray = array.map((valor, indice) => {
    return `${indice +1} - ${valor}`
})
console.log(newArray)


// .filter()

const listaObjetos = [
    {nombre: "Leire", edad: 40, vivienda: "desconocida"},
    {nombre: "Pedro", edad: 34, vivienda: "Autonomias"},
    {nombre: "Julia", edad: 35, vivienda: "Autonomias"},
    {nombre: "Mario", edad: 3, vivienda: "Autonomias"},
    {nombre: "Nuka", edad: 7, vivienda: "Autonomias"}
]

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad >30) {
//         return true
//     } else {
//         return false
//     }
// })

// Sólo mayores de 30 años
const personasMayores = listaObjetos.filter(obj => obj.edad >30) 
console.log(personasMayores)

// Que no sea Pedro
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Pedro") 
console.log(nuevaLista)



// .reduce() --> Obtener algo a partir de una lista

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)