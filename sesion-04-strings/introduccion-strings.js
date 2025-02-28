// Sesión 04 - Strings (Cadenas de caracteres)


let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';
let str1 = `Hola soy un texto con comillas tildadas`;

//let str_error = "Hola soy un texto con comillas erroneas'; // Error

console.log(str_sng);
console.log(str_dbl);

//let str_comillas = "El otro día me dijo literalmente "ve a sacar la basura""; // Error doble comillas dobles
//let str_comillas_simples = 'El otro día me dijo literalmente 've a sacar la basura''; // Error doble comillas simples
let str_comillas1 = "El otro día me dijo literalmente \"ve a sacar la basura\"";    
let str_comillas2 = 'El otro día me dijo literalmente \'ve a sacar la basura\'';
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'";

console.log(str_comillas1);
console.log(str_comillas2);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);


/////////// Comillas invertidas (backticks)
/// Permite incluir variables dentro de un string ${variable}

let str_backticks = `Hola soy un texto con comillas tildadas`;
console.log(str_backticks);


let nombre = "Pedro";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);


//// Plantillas HTML
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla);


////// Introducción de variables con HTML
let libros = ["Empieza por el por qué", "La semana laboral de 4 horas", "Padre rico, padre pobre"];

// let libros_html = `
//     <ul>
//         <li>${libtros[0]}</li>
//         <li>${libtros[1]}</li>
//         <li>${libtros[2]}</li>
//     </ul>
// `;

// console.log(libros_html);


