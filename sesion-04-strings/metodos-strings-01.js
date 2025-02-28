// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

//// Obtener partes de cadenas  de caracteres
// slice() devuelve una parte de una cadena de caracteres
// substring() devuelve una parte de una cadena de caracteres
// substr() devuelve una parte de una cadena de caracteres ESTÁ OBSOLETO

let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10); // Obseoleto
console.log(substr_str);


//// Reemplazar partes de una cadena de caracteres
// replace() reemplaza una parte de una cadena de caracteres por otra
// replace actua en el primer elemento encontrado en la cadena de caracteres

let cade
na = "Hola mi nombres es Pedro"
console.log(cadena)

console.log(cadena.replace("Pedro", "Julia"))

// Alt + z para ajustar el texto a la pantalla
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.replace("los", "cinco"))

// Al utilizar la expresión regular /g (global) reemplaza todas las intancias
console.log(texto_largo.replace(/los/g, "cinco"))
console.log(texto_largo.replace(/Tito/g, "Pedro"))
