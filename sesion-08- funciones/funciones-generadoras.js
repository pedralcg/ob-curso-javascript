// Funciones generadoras

// Programa que genera un id incremental

function* generaId() {
    let id = 0
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
} 

const gen = generaId()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// Seleccion y edición multiple de líneas
// Selecciona el texto a editar y pulsa CTRL+D, despues de seleccionar todas las lineas de interés modifica el texto
