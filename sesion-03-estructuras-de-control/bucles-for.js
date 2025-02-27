// Bucles For

/*for(inicializacion; condicion; actualizacion){
    // Bloque de código
}*/

// i = i + 1 
// i += 1 
// i++

for (let i = 0; i < 10; i = i + 1) { 
    // Esto es el bucle
    console.log(i);
}


let lista = [1, 4, 6, 2, 3, 7, 10, 12];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// Estructura for of
for (let valor of lista) {
    console.log(valor);
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor);
})


let Pedro = {
    nombre: 'Pedro',
    apellido: 'Alcoba',
    edad: 34,
    isDeveloper: true
}

for (let propiedad in Pedro) {
    console.log(propiedad);
    console.log(Pedro);
    console.log(Pedro[propiedad]);
}