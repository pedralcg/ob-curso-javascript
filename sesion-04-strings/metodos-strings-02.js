    // Métodos de cadenas de texto (parte 2)

let input = "Leo"
let db = "leo"

//// toLowerCase() y toUpperCase()
// Estos métodos convierten una cadena de texto a minúsculas o mayúsculas respectivamente.
console.log(input === db)

console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toLowerCase())

console.log(input.toUpperCase() === db.toUpperCase())
console.log(db.toUpperCase())


//// Formas de concatenar cadenas de texto

let str1 = "Hola soy una primera cadena de texto"
let str2 = "y yo soy una segunda cadena de texto"

console.log(str1.concat(" ", str2))
console.log(str1+ " " + str2)
console.log(str1 + str2) // Posible errorer de suma de numeros
console.log(`${str1} ${str2}`)

//// Eliminar espacios al inicio y al final de una cadena de texto

let str3 = "       Hola soy un string con espacios al final.         "
console.log(str3.length)
//trim()
console.log(str3.trim().length)
console.log(str3.trimStart().length)
console.log(str3.trimEnd().length)


//// Obtener el caracter de una determinada posición de una cadena de texto
let str4 = "Hola soy el string número 4"; // ["H", "o", "l", "a", " ", "s", "o", "y", " ", "e", "l", " ", "s", "t", "r", "i", "n", "g", " ", "n", "ú", "m", "e", "r", "o", " ", "4"]

console.log(str4.charAt(5))
console.log(str4[5])


//// Obtener la posición de una palabra denrto de una cada de caracteres

let str5 = "Hola soy Pedro y me gusta correr"
console.log(str5.indexOf("Pedro"))
console.log(str5[9])

let srt6 = "Hola soy Pedro y mi padre se llama también Pedro"
console.log(srt6.lastIndexOf("Pedro"))