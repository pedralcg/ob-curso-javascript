class Persona {
    // Private --> #
    // Es necesario inicializar
    // Sólo se puede acceder desde dentro de la clase

    #nombre
    #edad
    //#obtenEdad

    // Protected -> _
    // Sólo se puede acceder desde dentro de la clase y de clases descendientes

    _isDeveloper = true

    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} años`)
    }
    obtenNombre() { //Función getter --> Nos permite acceder de forma controlada a un atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Pedro", 34)
console.log(persona)
console.log(persona.nombre)
persona.saludo()

// persona.nombre = "Adios"
// console.log(persona.nombre)

console.log(persona.obtenNombre())
//console.log(persona.#obtenEdad()) // No se puede acceder a la propiedad "#obtenEdad" fuera de la clase "Persona" porque tiene un identificador privado
console.log(persona._isDeveloper)


/////////////////////////////////////////////////////////////////

// Getter --> métodos que nos permiten obtener atributos/métodos provados o protegidos

const edad = persona.getEdad()
console.log(edad)

// Setter --> métodos que nos permiten cambiar el valro de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona

persona.setEdad(45)
console.log(persona.getEdad())