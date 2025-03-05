
const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    return false;
}

console.log(miFuncion("21"))



const miFuncion2 = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe de ser de tipo número");
}

// const elDoble = miFuncion2("2c1")
// console.log(elDoble)

//////// try & catch
const numero = "8"

try {
    // Código que puede fallar
    console.log("Está ejecutandose de manera correcta")
    const doble = miFuncion2(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("¡ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}



////// Errores más comunes JS
// InternalError --> Lanzado por el interprete cuando hay un problema interno, como por ejemplo problemas de recusividad (StackOverflow)
// SyntaxError --> Fallo de sintaxis
// TypeError --> Fallado de tipado de los datos
// RangeError --> Tratando de acceder a una posición inexistente
// ReferenceError --> No existe la referencia

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error