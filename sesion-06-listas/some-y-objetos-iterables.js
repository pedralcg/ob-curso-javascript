// abrir Quokka Ctrl + k y luego j

//// .some() Comparar si algunos elementos de la lista cumplen una condición


const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]



const result = array.some( valor => valor <-10)
console.log(result)



const existe = array.some( valor => valor === 9)
console.log(existe)



const listaObjetos = [
    {nombre: "Leire", edad: 40, vivienda: "desconocida"},
    {nombre: "Pedro", edad: 34, vivienda: "Autonomias"},
    {nombre: "Julia", edad: 35, vivienda: "Autonomias"},
    {nombre: "Mario", edad: 3, vivienda: "Autonomias"},
    {nombre: "Nuka", edad: 7, vivienda: "Autonomias"}
]
const existeNombre = listaObjetos.some( persona => persona.nombre === "Mario")
console.log(existeNombre)



// Cómo obtener una lista a partir de un objeto iterable

const str = "Hola soy Pedro"
console.log(str[9])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "Hola",69])
const ar_set = Array.from(set)
console.log(ar_set)




const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys) // Sacar las keys/índices del array original
console.log(ar_keys)


