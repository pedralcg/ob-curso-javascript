// Trabajando con objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: "true",
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4_juegos": [1, 2, 3, 4],
    '5_juegos': [1, 2, 3, 4, 5]
}

console.log(obj.id)
console.log(obj.nombre)
//console.log(obj."4_juegos") // Error --> si el objeto empieza por comillas lo ideal es llamarlo por corchetes
console.log(obj["4_juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj; // Objetos Apuntan al mismo sitio de la memoria. Los cambios en 1 se realizan en 2
console.log(obj2);


////////////////////

obj2.nombre = "Pedro"
console.log(obj2.nombre)
console.log(obj.nombre)

// A la hora de igual elementos primitivos si se realiza una copia del valor y se almacena en otro lugar de la memoria

// Para duplicar un objeto dentro de otro, tenemos que utilizar el factor de extensión (operador SPREAD)
const obj3 = {...obj}
console.log(obj.nombre)
console.log(obj3.nombre)


obj3.nombre = "Mario"
console.log(obj.nombre)
console.log(obj3.nombre)



////////////
//Como ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", año: 1939},
    {titulo: "Titanic", año: 1997},
    {titulo: "Moana", año: 2016},
    {titulo: "El efecto Mariposa", año: 2004},
    {titulo: "TED", año: 2012},
    {titulo: "Aaaa", año: 1012},
]

console.log(listaPeliculas)

/// El método .sort() muta el valor de la lista original

//listaPeliculas.sort((a, b) => a.año - b.año)
// console.log(listaPeliculas)
//console.log(listaPeliculas.sort((a, b) => a.año - b.año))

//console.log(listaPeliculas.sort((a, b) => a.titulo.localeCompare(b.titulo)));

listaPeliculas.sort((a, b) => a.titulo.localeCompare(b.titulo)); // no sirve la funcion resta al ser cadenas de texto
console.log(listaPeliculas)