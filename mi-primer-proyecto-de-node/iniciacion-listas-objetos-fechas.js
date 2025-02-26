// Listas (arrays)
const lista1 = [1, "dos", 3, null, 5, true, 7, 8, undefined, 10];
console.log(lista1);
const lista2 = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(lista2);

const lista3 = lista1.concat(lista2);
console.log(lista3);
lista3[0] = "uno + uno son 13";
lista3[1] = 22222222222;
console.log(lista3);

const lista4 = [lista1, lista2, lista3];
console.log(lista4);


// Objetos
const movil = {
    altura: 10,
    ancho: 5,
    marca: "Xiaomi",
    isWhite: false,
    isBlack: true,
    contactos: ["Juan", "Pedro", "Maria"],
    tarjeta: {
        marca: "Samsung",
        almacenamiento: 128,
        velocidad: "XC 1"
    },
    "altura-tarjeta": 5 // No se reconocen los guiones
}

console.log(movil.marca);
movil.marca = "Samsung";
console.log(movil.marca);

movil.año = 2021;
console.log(movil.año);


// Fechas
// Librerias de apoyo: moment.js

const fecha = new Date();
console.log(fecha);

const fecha_milis = new Date(10)
console.log(fecha_milis);

const fecha_cadena = new Date("25 marzo 2020")
console.log(fecha_cadena);

const fecha_valores = new Date(2025, 2, 26)
console.log(fecha_valores);

const dia = fecha.getDate();
const mes = fecha.getMonth() +1;
const año = fecha.getFullYear();
console.log(dia, mes, año);