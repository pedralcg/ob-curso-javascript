var variable;
let variableLet_;

const constante = "Hola soy una constante";
//constante = "Adiós";
// Nos da error

// Afecta a todo el codigo
var a = 1;
console.log(a);
a = 5;
console.log(a);

// Afecta al bloque de codigo donde está siendo declarado
let b = 3;
console.log(b);
b = 7.4;
console.log(b);


// Afecta a todo el codigo
var variable = "Hola soy una variable VAR"
for (var i = 0; i < 3; i++) {
    var variable = "Hola soy una 2a variable VAR dentro del for"
}
console.log(variable);


// Afecta al bloque de codigo donde está siendo declarado
let variableLet = "Hola soy una variable LET"
for (var i = 0; i < 3; i++) {
    let variableLet = "Hola soy una 2a variable LET dentro del for"
}
console.log(variableLet);

////////////////////////

console.log(typeof variable);
console.log(typeof variableLet);
console.log(typeof a);
console.log(typeof b);