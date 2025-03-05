//// Que on las funciones, cómo se declaran y cómo se utilizan
// Bloques de código que se ejecuta con un fin específico

// saludar ()
// function saludar(parametros1, parametro2, parametro3) {
//     console.log("Hola")
// }

const nom = "Pedro"

saludar (nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

//////////
let nom2= "Julia"
despedir(nom2)

function despedir (nombre) {
    nombre = "Diego"
    console.log( `Adiós ${nombre}`)
}


//////////
let persona = {nombre: "Julia", apellido: "Fernández"}

saludarPersona(persona)
console.log(persona)

function saludarPersona (objeto) {
    objeto.apellido = "Alcoba"
    console.log( `Hola ${objeto.nombre} ${objeto.apellido}`)
}

//saludarPersona() // Error al no encontrar objeto.nombre y objeto.apellido
//saludar() // Nombre undefined



/////////// Parámetros por defecto

function imprimeNumero (numero = 7) { //Parámetros por defecto
    console.log(numero)
}

imprimeNumero()


/////////// Factor de propagación como parámetros


function imprimir (...parametros) {
    console.log(parametros)
}

imprimir(1, 2, 3, false, undefined, "Hola", true, "Adios")



/////////// Return


function suma (...numeros) {
    return numeros.reduce((a, b) => a + b)
}

const s = suma (1, 2, 3, 4, 9, 15, 16)

console.log(s)


/////////// Ámbito de una función
let variable = "Hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "Adiós"
    console.log(variable_interna)
    return a * b
}

console.log(multiplicar())
console.log(multiplicar(4, 5))
console.log(multiplicar(7, 7))

//console.log(variable_interna) // Variable interna sólo esta definida en el interior de la función


