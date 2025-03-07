
const persona = {
    nombre: "Pedro",
    apellido1: "Alcoba",
    apellido2: null,
    edad: 34,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola")
    }
}

console.log(persona)
// node index.js
persona.saludo()


const persona2 = {
    nombre: "Julia",
    apellido1: "Fernández",
    apellido2: null,
    edad: 35,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola")
    }
}
console.log(persona2)
persona2.saludo()


// Función factory
const creaPersona = (nombre, apellido1, apellido2, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre, 
        apellido1,
        apellido2,
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hola")
        }
    }
}

const nuevaPersona = creaPersona("Mario", "Alcoba", "Fernández", 3, false)
console.log(nuevaPersona)

const nuevaPersona2 = creaPersona("David", "Valera", "", 35, true)
console.log(nuevaPersona2)