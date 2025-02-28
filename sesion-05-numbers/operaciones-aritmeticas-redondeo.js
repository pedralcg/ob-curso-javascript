// Principales operaciones aritmeticas 

let a = 3.5;
let b = 4.8;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División


//Representación de los número en cadenas de texto
console.log(typeof a);
let a_str = a.toString();

console.log(a_str);
console.log(typeof a_str);


// Redondeo de número decimales

let c = 3.3;
let d = c * 3;
console.log(d);

// .toFixed() redondea el número a la cantidad de decimales que se le indique
console.log(d.toFixed(0)); // Ojo son strings
console.log(d.toFixed(1)); // Ojo son strings
console.log(d.toFixed(2)); // Ojo son strings

let e = 1845.158742395;
console.log(e.toFixed(2)); // Ojo son strings

// .toPrecision() redondea el número a la cantidad de cifras significativas que se le indique
console.log(e.toPrecision(1)); // Ojo son strings
console.log(e.toPrecision(4)); // Ojo son strings
console.log(e.toPrecision(7)); // Ojo son strings

