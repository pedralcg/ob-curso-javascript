// Formas de importar/exportar módulos
// 1. CommonJS - require
//  2. Import ES6 - import




///// 1. CommonJS - require

// const moduloMatematicas = require("./modulos/matematicas.js")
// const fact = moduloMatematicas.factorial(5)
// console.log(fact)
// const sum = moduloMatematicas.suma(12, 90)
// console.log(sum)

// const factorial = moduloMatematicas.factorial;
// const fact2 = factorial(5)
// console.log(fact2)

const {factorial, suma} = require("./modulos/matematicas.js")
const fact = factorial(5)
console.log(fact)
const sum = suma(12, 90)
console.log(sum)



//////  2. Import ES6 - import

// import "./matematicas.js";
