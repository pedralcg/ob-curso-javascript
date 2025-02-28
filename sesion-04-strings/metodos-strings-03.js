// Métodos de cadenas de texto (parte 3)

// https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.match(/los/g)) // Devuelve un array con todas las coincidencias de la palabra "Tito"
console.log(texto_largo.match(/no/g)) // Devuelve un array con todas las coincidencias de la palabra "no" Ojo! Devuelve no de dentro de palabras

console.log(texto_largo.includes("Tito")) 
console.log(texto_largo.includes("Pedro"))  // ¿Existe la palabra dentro del texto?

//// Saber si un texto empieza con una palabra

console.log(texto_largo.startsWith("Tito"))
console.log(texto_largo.startsWith("árbol"))


//// Saber si un texto empieza con una palabra
console.log(texto_largo.endsWith("árboles"))
console.log(texto_largo.endsWith("árboles."))
