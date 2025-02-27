// Bucles While --> se ejecuta mientras la condición sea verdadera

// while (condition) {
// codigo a ejecutar
//}

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++; // muy importante para no crear un bucle infinito
}


// Bucles Do while --> se ejecuta al menos una vez

i = 15

do {
    console.log("Estoy en el do while");
    i++;
} while (i < max);