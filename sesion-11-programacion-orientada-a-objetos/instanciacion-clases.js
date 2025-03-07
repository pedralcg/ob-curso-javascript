class Persona {
    // nombre; // nombre: nombre, 
    //a pellido1;
    // apellido2;
    // edad;
    // isDeveloper;
    ///// Método constructor
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    // Todas las funciones declaradas en objetos y/o clases se denominan métodos
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad}`)
    }
}


const nueva_persona = new Persona("Pedro", 34, true)
console.log(nueva_persona)
nueva_persona.saludo()


let numero = 60
console.log(typeof numero)
let persona_2 = new Persona("Maria", 34, false) // instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)
