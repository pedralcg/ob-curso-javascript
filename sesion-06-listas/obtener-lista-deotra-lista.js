//// Cómo obtener una lista a partir de otra lista
// .slice()

const array = ["hola", 1, 2, 3, true, null, "adios"]

// .slice() --> no modifica el valor del array original

console.log(array.slice(1,4));

const array2 = array.slice(5,7);
console.log(array2);

const array3 = array.slice(2,-2);
console.log(array3);

