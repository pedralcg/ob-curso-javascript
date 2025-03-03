// Cómo trabajar con listas (arrays, arreglos, vectores .....)

let var1 = 45;
let array = [1, "hola", false, {ide: 5}, null, undefined, var1];

console.log(array);


// Acceder a los valores de un array a través de su posición
// array[indice]
console.log(array[0]);
console.log(array[3]);
console.log(array[6]);



///// Métodos para introducir nuevos valores
// .push() .unshift() --> Mutan el valor de nuestro array

// Modificar un valor del array
array[0] = 69;
console.log(array[0]);

// Valores al final .push()
array.push("casi final", 69, var1, "final");
console.log(array);

// Valores al principio .Unshift()
array.unshift("Este es el principio", var1, "comenzamos");
console.log(array);



///// Métodos para eliminar valores en nuestros arrays
// .pop() .shift()  --> Mutan el valor del array

const array2 = [1, 3, "hola", false];

// Valores al final --> pop()
array2.pop()
console.log(array2);

// Valores al principio --> shift()
array2.shift()
console.log(array2);


///// Métodos para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)

const array3 = [1, 2, 3, 4, 5, 6];

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2,3);
console.log(array3);

// Añadir valores .splice(indice, 0 (no buscamos eliminar), valores a añadir)
array3.splice(2,0,"Hola", "Hola2", "Hola 3");
console.log(array3);

// Modificar valores .splice (indice, 1 (eliminamos un valor),nuevo valor de reemplazo)
array3.splice(2,1, "Adios");
console.log(array3);