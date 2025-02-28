// Operador .valueOf() 
let a = 2;
let b = new Number(3);
let c = new String("Hola soy un string 3.14");

console.log(a);
console.log(b);
console.log(a + b);

console.log(c);
console.log(c.valueOf());

// NaN (Not a Number) - Infinity

console.log(a * c);
console.log(isNaN(a * c));

let numerador = 19;
let divisor = 2;
let divisor2 = null;

console.log(numerador / divisor);
console.log(numerador / (divisor - 2));
console.log(numerador / divisor2);


// Como convertir los strings a valores numéricos con Number, parseInt y parseFloat

let numero = "5.89";
let num2 = 17.2;

console.log(numero + num2); // Error de concepto
// Number()
console.log(Number(numero) + num2);
// parseInt() --> OJO!! convierte a número entero
console.log(parseInt(numero) + num2); //Error por transformación a número entero
// parseFloat() --> Convierte el número a Float (decimal)
console.log(parseFloat(numero) + num2);


// Número hexadecimales (base 16) --> Utilizados en la asignación de memoria

let numHex= '0x3a5b7';
console.log(parseInt(numHex, 8)); // En base8 es 0
console.log(parseInt(numHex, 10)); // En base10 es 0
console.log(parseInt(numHex, 16)); // En base16 es 239031



// Obtener los valores máximo y mínimo en JavaScript

let min_precision = Number.EPSILON

let min_valor_js = Number.MIN_VALUE

let max_valor_js = Number.MAX_VALUE

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);

console.log(2 ** 1023);
console.log(2 ** 1024);