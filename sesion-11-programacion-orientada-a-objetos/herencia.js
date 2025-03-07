// Inheritance - Herencia

class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, y tengo ${this._edad} años`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        //this.nombre = nombre // No podemos volver a llamarlos al estar en un constructor superior
        //this.edad = edad // No podemos volver a llamarlos al estar en un constructor superior
        super(nombre, edad) // llamamos de esta manera
        this.lenguaje = lenguaje
    }
////////////////Polimorfismo
    saludo() { // Override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Pedro", 34, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo --> Varias formas